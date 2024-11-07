import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { NetworkId, WalletId, WalletManager, WalletProvider } from "@txnlab/use-wallet-react";

const walletManager = new WalletManager({
  wallets: [
    WalletId.DEFLY,
    WalletId.PERA,
    WalletId.EXODUS,
    {
      id: WalletId.WALLETCONNECT,
      options: { projectId: "0af28c6c83a29810852e9405b1d7fee7" },
    },
    {
      id: WalletId.LUTE,
      options: { siteName: "AlgoPredict.fun" },
    },
  ],
  network: NetworkId.TESTNET,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider manager={walletManager}>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
