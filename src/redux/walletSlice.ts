import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WalletState {
  account: string | null;
}

const initialState: WalletState = {
  account: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<{ account: string }>) => {
      state.account = action.payload.account;
    },
    clearWallet: (state) => {
      state.account = null;
    },
  },
});

export const { setWallet, clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
