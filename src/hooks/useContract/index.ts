/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import Web3 from "web3";
import { type AbiItem } from "web3-utils";
import { useSelector } from "react-redux";

import LinkShieldABI from "../abis/LinkShield.json";
import type { RootState } from "@/redux/store";
const CONTRACT_ADDRESS = "0xSEU_CONTRATO_AQUI";

export default function useContract() {
  const account = useSelector((state: RootState) => state.wallet.account);

  const web3 = useMemo(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      return new Web3(window.ethereum);
    }
    return null;
  }, []);

  const contract = useMemo(() => {
    if (!web3) return null;
    return new web3.eth.Contract(LinkShieldABI as AbiItem[], CONTRACT_ADDRESS);
  }, [web3]);

  const addLink = async (url: string, fee: number) => {
    if (!contract || !account) throw new Error("Wallet not connected");
    return await contract.methods.addLink(url, fee).send({ from: account });
  };

  const payLink = async (linkId: string, value: string) => {
    if (!contract || !account) throw new Error("Wallet not connected");
    return await contract.methods
      .payLink(linkId)
      .send({ from: account, value: web3!.utils.toWei(value, "ether") });
  };

  const getLink = async (linkId: string) => {
    if (!contract || !account) throw new Error("Wallet not connected");
    return await contract.methods.getLink(linkId).call({ from: account });
  };

  const getLinkTransactions = async (
    linkId: string,
    page = 1,
    pageSize = 10
  ) => {
    if (!contract || !account) throw new Error("Wallet not connected");

    const allTx: any[] = await contract.methods
      .getLinkTransactions(linkId)
      .call({ from: account });
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedTx = allTx.slice(start, end);

    return {
      data: paginatedTx,
      total: allTx.length,
      page,
      pageSize,
      totalPages: Math.ceil(allTx.length / pageSize),
    };
  };

  const getMyEarningsHistory = async (page = 1, pageSize = 10) => {
    if (!contract || !account) throw new Error("Wallet not connected");

    const allTx: any[] = await contract.methods
      .getMyEarningsHistory()
      .call({ from: account });
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedTx = allTx.slice(start, end);

    return {
      data: paginatedTx,
      total: allTx.length,
      page,
      pageSize,
      totalPages: Math.ceil(allTx.length / pageSize),
    };
  };

  return {
    contract,
    web3,
    addLink,
    payLink,
    getLink,
    getLinkTransactions,
    getMyEarningsHistory,
  };
}
