import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wallet, WalletAccount } from "@txnlab/use-wallet-react";
import { Transaction } from "algosdk";

export const Header = ({
  wallets,
  activeAccount,
  transactionSigner,
  assetId,
  setAssetId,
}: {
  wallets: Wallet[];
  activeAccount: WalletAccount | null;
  transactionSigner: (txnGroup: Transaction[], indexesToSign: number[]) => Promise<Uint8Array[]>;
  assetId: number;
  setAssetId: (id: number) => void;
}) => {
  return <></>;
};

export default Header;
