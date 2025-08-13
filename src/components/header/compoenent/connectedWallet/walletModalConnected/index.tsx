import { Text } from "@/components/text/styled";
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalOption,
  ModalOptions,
} from "./styled";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
import type React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SuccessCustomToast } from "@/components/customToaster/success";
import { FailCustomToast } from "@/components/customToaster/fail";
import DisconnectModal from "@/assets/svg/disconnectModal";

interface WalletConnectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
}
export const WalletConnectedModal: React.FC<WalletConnectedModalProps> = ({
  isOpen,
  onClose,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (isLoading) {
      return;
    }

    if (setIsLoading) {
      setIsLoading(true);
    }
    try {
      onClose();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.custom((id) => (
        <SuccessCustomToast id={id} message="Wallet connected" />
      ));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.custom((id) => (
        <FailCustomToast
          id={id}
          message="to connect wallet. Please try again."
        />
      ));
    } finally {
      if (setIsLoading) {
        setIsLoading(false);
      }
    }
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target === event.currentTarget && !isLoading) {
      onClose();
    }
  };

  return (
    <ModalBackground isOpen={isOpen} onClick={handleBackgroundClick}>
      <ModalContainer>
        <ModalHeader>
          <Text fontSize="14px" fontWeight="500">
            DISCONNECT YOUR WALLET
          </Text>
        </ModalHeader>
        <ModalOptions>
          {[{ Icon: DisconnectModal, name: "Disconnect" }].map(
            ({ Icon, name }) => (
              <ModalOption
                key={name}
                onClick={connectWallet}
                isLoading={isLoading}
              >
                <Icon />
                <Text
                  fontSize="16px"
                  color={applyOpacity(theme.colors.dark[1], 70)}
                  fontWeight="bold"
                >
                  {name}
                </Text>
              </ModalOption>
            )
          )}
        </ModalOptions>
      </ModalContainer>
    </ModalBackground>
  );
};
