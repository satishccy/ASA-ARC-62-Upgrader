import algosdk from 'algosdk';
import * as algokit from '@algorandfoundation/algokit-utils';

async function acceptAndReceiveTokens(
  sender: algosdk.Account,
  receiver: algosdk.Account,
  assetId: number,
  amount: number
) {
  const testnetClient = algokit.AlgorandClient.testNet();

  const optin = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    sender: receiver.addr,
    receiver: receiver.addr,
    assetIndex: assetId,
    amount: 0,
    suggestedParams: await testnetClient.client.algod.getTransactionParams().do(),
  });

  const signedTxn = optin.signTxn(receiver.sk);
  await testnetClient.client.algod.sendRawTransaction(signedTxn).do();

  const assetTransferTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    sender: sender.addr,
    receiver: receiver.addr,
    assetIndex: assetId,
    amount,
    suggestedParams: await testnetClient.client.algod.getTransactionParams().do(),
  });

  const signedTxn2 = assetTransferTxn.signTxn(sender.sk);
  testnetClient.client.algod.sendRawTransaction(signedTxn2).do();
}

(async () => {
  const admin = algosdk.mnemonicToSecretKey(
    'music saddle shoot cat credit mask promote unknown fine end beach slam reopen federal true infant alert neglect inhale egg clock chat weird abandon hundred'
  );

  //   first account: 6B3SKDOSESSQ5L4GI2VCBMESN6G5TC7CDBRG476OTKSZDPZZD77RXBE7UM
  // mnemonic:
  // second account: SOFKZG37BNXAUCGV2LWNI5KSUL2QUR35RMCWDLXJWXACKWOW4FAS7KTUNM
  // mnemonic:
  // third account: WAQ4MFE3MZFREX247H2NUBJLCFVCRSPKIE5VFAWUAH66LJ4KVYV2JIY7UI
  // mnemonic:
  // fourth account: GS2AYBZMKP22P7MKFTHCWZ7UMZNB2BTZM47HQOYNGVL65KW4HV6SWLC754
  // mnemonic:
  const a1 = algosdk.mnemonicToSecretKey(
    'grant silk zoo light shell smart diagram arrange false shy cram virus right glare ritual cabin engage term until sail gym young rigid above home'
  );
  const a2 = algosdk.mnemonicToSecretKey(
    'village indicate season acoustic boy define marriage anger supply gun behave smoke motion scatter arctic car bitter hill drill reason exile tomato cram abstract enforce'
  );
  const a3 = algosdk.mnemonicToSecretKey(
    'pole coach feature limit need flip wing wood board tumble soon like repair beyond nut dentist time bunker vehicle ribbon gas emerge reason abandon episode'
  );
  const a4 = algosdk.mnemonicToSecretKey(
    'ritual argue brisk squeeze round trouble west myself believe scout shy bamboo life more jacket wagon top crazy elder tooth paddle any correct absorb acquire'
  );
  const testnetClient = algokit.AlgorandClient.testNet();

  const newAsset = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    assetName: 'AlgoGuy',
    unitName: 'AG',
    total: 1_000_000,
    decimals: 0,
    sender: admin.addr,
    defaultFrozen: false,
    manager: admin.addr,
    reserve: admin.addr,
    freeze: admin.addr,
    clawback: admin.addr,
    suggestedParams: await testnetClient.client.algod.getTransactionParams().do(),
  });

  const signedTxn = newAsset.signTxn(admin.sk);
  await testnetClient.client.algod.sendRawTransaction(signedTxn).do();
  const txInfo = await algosdk.waitForConfirmation(testnetClient.client.algod, newAsset.txID(), 3);

  console.log('Asset ID: ', txInfo.assetIndex);

  const assetId = Number(txInfo.assetIndex!);

  await acceptAndReceiveTokens(admin, a1, assetId, 3_50_000);
  console.log(`sent 3_50_000 AlgoGuy Tokens to user [${a1.addr}]`);
  await acceptAndReceiveTokens(admin, a3, assetId, 50_000);
  console.log(`sent 50_000 AlgoGuy Tokens to burn address [${a3.addr}]`);
  await acceptAndReceiveTokens(admin, a4, assetId, 1_00_000);
  console.log(`sent 1_00_000 AlgoGuy Tokens to lock address [${a4.addr}]`);
  await acceptAndReceiveTokens(admin, a2, assetId, 1_00_000);
  console.log(`sent 1_00_000 AlgoGuy Tokens to generic address [${a2.addr}]`);

  console.log(`Kept 4_00_000 AlgoGuy Tokens in reserve address [${admin.addr}]`);

  console.log('Tokens sent');
})();
