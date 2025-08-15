/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contract, ethers } from "ethers";
import LinkShieldABI from "@/services/abi/LinkShield.json";

export const projectId = "a67647fcd7c2f1451987fe702f75016a";

export const amoy = {
  chainId: 80002,
  name: "Polygon Amoy",
  currency: "POL",
  explorerUrl: "https://www.oklink.com/amoy",
  rpcUrl: "https://rpc-amoy.polygon.technology/",
};

export const metadata = {
  name: "LinkShield",
  description: "Proteja e monetize seus links",
  url: "https://seu-site.com",
  icons: ["https://seu-site.com/logo.png"],
};

const contractAddress = "0xF8A34c7876aD8f66E5E5e386729CE9D300726E2b";

export const getContract = async (provider: any) => {
  const ethersProvider = new ethers.BrowserProvider(provider);
  const signer = await ethersProvider.getSigner();
  return new Contract(contractAddress, LinkShieldABI, signer);
};

export const getMyLinks = async (provider: any) => {
  const contract = await getContract(provider);
  try {
    const links = await contract.getLinkListByUser(0, 10);
    return links;
  } catch (error) {
    console.error("Erro ao buscar links:", error);
    return [];
  }
};

export const createNewLink = async (
  provider: any,
  url: string,
  feeInEth: string
) => {
  const contract = await getContract(provider);
  try {
    const feeInWei = ethers.parseEther(feeInEth);
    const tx = await contract.addLink(url, feeInWei);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Erro ao criar link:", error);
    throw error;
  }
};
