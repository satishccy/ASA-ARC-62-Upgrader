import algosdk from 'algosdk';

(async () => {
  const a1 = algosdk.generateAccount();
  const a2 = algosdk.generateAccount();
  const a3 = algosdk.generateAccount();
  const a4 = algosdk.generateAccount();
  console.log(`first account: ${a1.addr}\nmnemonic: ${algosdk.secretKeyToMnemonic(a1.sk)}`);
  console.log(`second account: ${a2.addr}\nmnemonic: ${algosdk.secretKeyToMnemonic(a2.sk)}`);
  console.log(`third account: ${a3.addr}\nmnemonic: ${algosdk.secretKeyToMnemonic(a3.sk)}`);
  console.log(`fourth account: ${a4.addr}\nmnemonic: ${algosdk.secretKeyToMnemonic(a4.sk)}`);
})();
