/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from "web3";
import LinkShieldABI from "./abi/LinkShield.json";
import { Contract } from "web3-eth-contract";

export type LinkShieldContract = Contract<typeof LinkShieldABI>;

const CONTRACT_ADDRESS = "0xF8A34c7876aD8f66E5E5e386729CE9D300726E2b";

export const getContractInstance = (web3: Web3): LinkShieldContract => {
  const contract = new web3.eth.Contract(
    LinkShieldABI as any,
    CONTRACT_ADDRESS
  );
  return contract;
};
