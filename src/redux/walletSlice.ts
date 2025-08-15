/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LinkShieldContract } from "@/services/contractService";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Web3 from "web3";

interface WalletState {
  isConnected: boolean;
  account: string | null;
  web3: any;
  contract:  LinkShieldContract | null;
}

const initialState: WalletState = {
  isConnected: false,
  account: null,
  web3: null,
  contract: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (
      state,
      action: PayloadAction<{ account: string; web3: Web3; contract: any }>
    ) => {
      state.isConnected = true;
      state.account = action.payload.account;
      state.web3 = action.payload.web3;
      state.contract = action.payload.contract;
    },
    clearWallet: (state) => {
      state.isConnected = false;
      state.account = null;
      state.web3 = null;
      state.contract = null;
    },
  },
});

export const { setWallet, clearWallet } = walletSlice.actions;

export default walletSlice.reducer;
