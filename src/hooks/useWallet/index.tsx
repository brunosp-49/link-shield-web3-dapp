/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { setWallet } from "@/redux/walletSlice";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function useWallet() {
  const dispatch = useDispatch();
  const account = useSelector((state: RootState) => state.wallet.account);

  async function connectWallet(): Promise<Web3 | null> {
    if (!window.ethereum) {
      alert("MetaMask não encontrada.");
      return null;
    }

    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      dispatch(setWallet({ account: accounts[0] }));
      localStorage.setItem("walletAddress", accounts[0]);

      const web3Instance = new Web3(window.ethereum);
      return web3Instance;
    } catch (error) {
      console.error("Erro ao conectar carteira:", error);
      return null;
    }
  }

  async function checkConnection(): Promise<Web3 | null> {
    if (!window.ethereum) return null;

    const accounts: string[] = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      dispatch(setWallet({ account: accounts[0] }));
      const web3Instance = new Web3(window.ethereum);
      return web3Instance;
    }

    return null;
  }

  useEffect(() => {
    const savedAccount = localStorage.getItem("walletAddress");
    if (savedAccount) {
      checkConnection();
    }
  }, []);

  return { account, connectWallet, checkConnection };
}
