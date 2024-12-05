import { NetworkId, useWallet } from "@txnlab/use-wallet-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import "./styles/Header.css";
import ConnectWalletModal from "./components/ConnectWalletModal";
import * as algokit from "@algorandfoundation/algokit-utils";
import algosdk, { AtomicTransactionComposer } from "algosdk";
import { Arc62Client } from "./contracts/Arc62";
import { s } from "vite/dist/node/types.d-aGj9QkWt";
import { get } from "http";

const algorandClient = algokit.AlgorandClient.testNet();
const mainAlgorandClient = algokit.AlgorandClient.mainNet();
let client = algorandClient;
const ZERO_ADDRESS = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ";
function base64ToUint8Array(base64: string) {
  const binaryString = atob(base64); // Decode the Base64 string to binary
  const length = binaryString.length;
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
}
const App = () => {
  const { wallets, activeWallet, activeAccount, transactionSigner, setActiveNetwork } = useWallet();
  const [assetId, setAssetId] = useState(0);
  const [network, setNetwork] = useState("testnet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [assetData, setAssetData] = useState<any>(null);
  const [manager, setManager] = useState<string | null>(null);
  const [isArc62, setIsArc62] = useState(0);

  useEffect(() => {
    setActiveNetwork(network === "mainnet" ? NetworkId.MAINNET : NetworkId.TESTNET);
    client = network === "mainnet" ? mainAlgorandClient : algorandClient;
  }, [network]);

  const initData = () => {
    setManager(null);
    setData(null);
    setAssetData(null);
    setIsArc62(0);
    setBurnerAddress("");
    setLockedAddress("");
    setGenericAddress("");
  };

  const fetchAsset = async () => {
    initData();
    if (!assetId) {
      toast.error("Please enter asset ID");
      return;
    }

    try {
      const peradata = await fetch(`https://${network}.api.perawallet.app/v1/public/assets/${assetId}`);
      const data = await peradata.json();
      console.log(peradata.status);
      if (peradata.status !== 200) {
        console.log("first", data);
        toast.error(data.fallback_message);
        return;
      }
      //check a path exist in the object

      if (data.collectible && data.collectible.metadata && data.collectible.metadata.properties) {
        if (data.collectible.metadata.properties["arc-62"] && data.collectible.metadata.properties["arc-62"]["application-id"]) {
          setIsArc62(Number(data.collectible.metadata.properties["arc-62"]["application-id"]));
        }
      }

      setData(data);

      const res = await client.client.indexer.lookupAssetByID(assetId).do();
      if (res.asset) {
        setManager(res.asset.params.manager);
        setAssetData(res.asset.params);
        const encoder = new TextEncoder();
        const note = encoder.encode("arc62:");
        const reconfigs = [];
        let configtxns = await client.client.indexer.lookupAssetTransactions(assetId).txType("acfg").notePrefix(note).do();
        console.log(configtxns);
        for (let i = 0; i < configtxns.transactions.length; i++) {
          reconfigs.push(configtxns.transactions[i]);
        }
        while (configtxns.nextToken) {
          configtxns = await client.client.indexer
            .lookupAssetTransactions(assetId)
            .txType("acfg")
            .notePrefix(note)
            .nextToken(configtxns.nextToken)
            .do();
          for (let i = 0; i < configtxns.transactions.length; i++) {
            reconfigs.push(configtxns.transactions[i]);
          }
        }
        const latest = reconfigs[reconfigs.length - 1];
        console.log(latest);
        if (latest) {
          const note = latest.note;
          const decoder = new TextDecoder();

          const noteStr = base64ToUint8Array(note);
          const noteStrDecoded = decoder.decode(noteStr);
          const arc62 = noteStrDecoded.split("arc62:");
          console.log(arc62, arc62[1][0]);
          if (arc62.length > 1 && arc62[1][0] === "j") {
            const json = JSON.parse(arc62[1].slice(1));
            if (json["application-id"]) {
              setIsArc62(json["application-id"]);
            }
          }
        }
      } else {
        toast.error("Asset not found");
      }
    } catch (e: any) {
      console.log(e);
      toast.error("Error fetching asset:" + e.message);
    }
  };

  useEffect(() => {
    async function getArc62Details() {
      if (isArc62 !== 0) {
        const Caller = new Arc62Client({ resolveBy: "id", id: isArc62 }, client.client.algod);
        const g = await Caller.getGlobalState();
        console.log(g);

        const gl: any = await Caller.appClient.getGlobalState();
        if (gl.asset_id.value !== assetId) {
          toast.error("Invalid app id mentioned in the asset");
          return;
        }
        if (gl.burned && gl.burned.valueRaw) {
          setBurnerAddress(algosdk.encodeAddress(gl.burned.valueRaw));
        }
        if (gl.locked && gl.locked.valueRaw) {
          setLockedAddress(algosdk.encodeAddress(gl.locked.valueRaw));
        }
        if (gl.generic && gl.generic.valueRaw) {
          setGenericAddress(algosdk.encodeAddress(gl.generic.valueRaw));
        }
      }
    }

    getArc62Details();
  }, [isArc62]);

  const [fetchingCirculatingSupply, setFetchingCirculatingSupply] = useState("");

  const getCirculatingSupply = async () => {
    if (activeAccount) {
      try {
        setFetchingCirculatingSupply("Fetching circulating supply...");
        const arc62Caller = new Arc62Client({ resolveBy: "id", id: isArc62 }, client.client.algod);
        const g = await arc62Caller
          .compose()
          .arc62GetCirculatingSupply(
            { assetId: assetId },
            {
              assets: [assetId],
              accounts: [assetData.reserve, burnerAddress, lockedAddress, genericAddress],
              sender: { addr: activeAccount.address, signer: transactionSigner },
            }
          )
          .simulate({});
        if (g.returns[0]) {
          toast.success("Circulating Supply: " + Number(g.returns[0]));
        } else {
          toast.error("Error getting circulating supply");
        }
        console.log(g);
      } catch (e: any) {
        console.log(e);
        toast.error("Error getting circulating supply: " + e.message);
      } finally {
        setFetchingCirculatingSupply("");
      }
    } else {
      toast.error("Please connect wallet");
    }
  };

  const [isMakingarc62Compatiable, setIsMakingarc62Compatiable] = useState("");
  const [burnerAddress, setBurnerAddress] = useState("");
  const [lockedAddress, setLockedAddress] = useState("");
  const [genericAddress, setGenericAddress] = useState("");

  const makeArc62Compatiable = async () => {
    try {
      if (activeAccount) {
        const currentAddress = activeAccount.address;
        if (currentAddress !== manager) {
          toast.error("Only the manager can make asset arc62 compatiable");
          return;
        }
        if (burnerAddress !== "") {
          if (!algosdk.isValidAddress(burnerAddress)) {
            toast.error("Invalid burner address");
            return;
          }
        }
        if (lockedAddress !== "") {
          if (!algosdk.isValidAddress(lockedAddress)) {
            toast.error("Invalid locked address");
            return;
          }
        }
        if (genericAddress !== "") {
          if (!algosdk.isValidAddress(genericAddress)) {
            toast.error("Invalid generic address");
            return;
          }
        }

        const arc62Caller = new Arc62Client({ resolveBy: "id", id: 0 }, client.client.algod);

        setIsMakingarc62Compatiable("Signing transaction...");
        const create = await arc62Caller.create.createApplication(
          {
            assetId: assetId,
            burned: burnerAddress == "" ? ZERO_ADDRESS : burnerAddress,
            locked: lockedAddress == "" ? ZERO_ADDRESS : lockedAddress,
            generic: genericAddress == "" ? ZERO_ADDRESS : genericAddress,
          },
          { sender: { addr: activeAccount.address, signer: transactionSigner }, assets: [assetId] }
        );

        setIsMakingarc62Compatiable("Making Asset Reconfig...");

        const appId = create.appId;
        const appAddress = create.appAddress;

        console.log(create);

        const encoder = new TextEncoder();
        const note = encoder.encode(`arc62:j{"application-id":${appId}}`);

        // Create asset configuration transaction
        const assetConfigTxn = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
          from: activeAccount.address,
          assetIndex: assetId,
          manager: assetData.manager,
          reserve: assetData.reserve,
          freeze: assetData.freeze,
          clawback: assetData.clawback,
          suggestedParams: await client.client.algod.getTransactionParams().do(),
          strictEmptyAddressChecking: true,
          note: note,
        });
        const atc = new AtomicTransactionComposer();
        atc.addTransaction({ txn: assetConfigTxn, signer: transactionSigner });

        setIsMakingarc62Compatiable("Signing transaction...");
        const signedTxn = await atc.gatherSignatures();
        setIsMakingarc62Compatiable("Sending transaction...");
        const res = await atc.execute(client.client.algod, 3);
        toast.success("Created APP", {
          onClick: () => {
            window.open(`https://lora.algokit.io/testnet/transaction/${assetConfigTxn.txID()}`);
          },
        });

        await fetchAsset();
      } else {
        toast.error("Please connect wallet");
      }
    } catch (e: any) {
      console.log(e);
      toast.error("Error making asset arc62 compatiable: " + e.message);
    } finally {
      setIsMakingarc62Compatiable("");
    }
  };

  return (
    <>
      <>
        <section className="header_section" id="header_section">
          <div className="sticky_nav">
            <a className="cmpny_name">Arc62 Backward Compatibility Dapp</a>
          </div>
          <div className="header_wrapper">
            <div className="first_wrap">
              <input
                value={assetId}
                onChange={(e) => setAssetId(parseInt(e.target.value))}
                type="number"
              />
              <select onChange={(e) => setNetwork(e.target.value)}>
                <option value="testnet">Testnet</option>
                <option value="mainnet">Mainnet</option>
              </select>
              <button onClick={(_) => fetchAsset()} className="fetch_asset_btn">
                Fetch Asset
              </button>
            </div>
            <div className="second_wrap">
              <button onClick={() => setIsModalOpen(true)} className="connect_wallet_btn">
                {activeAccount
                  ? `Connected as ${activeAccount.address.slice(0, 3)}...${activeAccount.address.slice(-3)}`
                  : "Connect Wallet"}
              </button>
            </div>
          </div>
        </section>
        <div style={{ marginTop: "140px" }}>
          {manager && (
            <div className="asset_info">
              <h1>Asset Info</h1>
              <p>
                <strong>Asset ID:</strong> {assetId}
              </p>

              <p>
                <strong>Asset Name:</strong> {data?.name}
              </p>
              <p>
                <strong>Unit Name:</strong> {data?.unit_name}
              </p>
              <p>
                <strong>Total Issuance:</strong> {data?.total_supply}
              </p>
              <p>
                <strong>Decimals:</strong> {data?.fraction_decimals}
              </p>
              <p>
                <p>
                  <strong>Manager:</strong> {manager}
                </p>
                <strong>Reserve:</strong> {assetData.reserve}
              </p>
              <p>
                <strong>Freeze:</strong> {assetData.freeze}
              </p>
              <p>
                <strong>Clawback:</strong> {assetData.clawback}
              </p>
              <p>
                <strong>ARC62 Compatiable:</strong> {isArc62 !== 0 ? "Yes" : "No"}
              </p>
              {isArc62 !== 0 && (
                <>
                  <p>
                    <strong>ARC62 App Id:</strong> {isArc62}
                  </p>
                  <p>
                    <strong>Burner Address:</strong> {burnerAddress}
                  </p>
                  <p>
                    <strong>Locked Address:</strong> {lockedAddress}
                  </p>
                  <p>
                    <strong>Generic Address:</strong> {genericAddress}
                  </p>
                  <p>
                    <button disabled={fetchingCirculatingSupply == "" ? false : true} onClick={(_) => getCirculatingSupply()}>
                      {fetchingCirculatingSupply == "" ? "Get Circulating Supply" : fetchingCirculatingSupply}
                    </button>
                  </p>
                </>
              )}

              {isArc62 === 0 && (
                <>
                  <div className="input_div">
                    <label>Burner Address</label>
                    <input value={burnerAddress} onChange={(e) => setBurnerAddress(e.target.value)} />
                  </div>
                  <div className="input_div">
                    <label>Locked Address</label>
                    <input value={lockedAddress} onChange={(e) => setLockedAddress(e.target.value)} />
                  </div>
                  <div className="input_div">
                    <label>Generic Address</label>
                    <input value={genericAddress} onChange={(e) => setGenericAddress(e.target.value)} />
                  </div>
                  <button disabled={isMakingarc62Compatiable == "" ? false : true} onClick={(_) => makeArc62Compatiable()}>
                    {isMakingarc62Compatiable == "" ? "Make Arc62 Compatiable" : isMakingarc62Compatiable}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <ConnectWalletModal wallets={wallets} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </>
    </>
  );
};

export default App;
