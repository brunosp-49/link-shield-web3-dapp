import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useDisconnect,
  useWeb3ModalState,
} from "@web3modal/ethers/react";
import { SuccessCustomToast } from "@/components/customToaster/success";
import { FailCustomToast } from "@/components/customToaster/fail";
import { usePrevious } from "../usePrevious";

export const useWallet = () => {
  const navigate = useNavigate();

  const { open } = useWeb3Modal();
  const { address, isConnected, status } = useWeb3ModalAccount();
  const { open: isModalOpen, loading } = useWeb3ModalState();
  const { disconnect } = useDisconnect();

  const prevStatus = usePrevious(status);
  const prevIsModalOpen = usePrevious(isModalOpen);

  useEffect(() => {
    console.log({
      status,
      isConnected,
      isModalOpen,
      loading,
      prevStatus,
      prevIsModalOpen,
    });
    if (prevStatus === "disconnected" && status === "connected") {
      toast.custom((id) => (
        <SuccessCustomToast id={id} message="Carteira Conectada!" />
      ));
      navigate("/dashboard");
    }

    if (!loading && prevIsModalOpen && !isModalOpen && !isConnected) {
      toast.custom((id) => (
        <FailCustomToast id={id} message="Conexão cancelada" />
      ));
    }

    if (prevStatus === "connected" && status === "disconnected") {
      toast.info("Carteira desconectada.");
      navigate("/");
    }
  }, [
    status,
    isConnected,
    isModalOpen,
    prevStatus,
    prevIsModalOpen,
    navigate,
    loading,
  ]);

  const handleConnect = () => {
    open();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const isLoading = loading;

  return {
    isLoading,
    isConnected,
    address,
    connect: handleConnect,
    disconnect: handleDisconnect,
    openAccountModal: () => open({ view: "Account" }),
  };
};
