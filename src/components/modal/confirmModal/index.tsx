import { Text } from "@/components/text/styled";
import {
  ButtonContainer,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalSubTitle,
} from "./styled";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
import type React from "react";
import { CustomButton } from "@/components/customButton";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  title?: string;
  subTitle?: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonTextColor?: string;
  cancelButtonTextColor?: string;
}
export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  isLoading,
  setIsLoading,
  onConfirm,
  title = "Do you want to confirm?",
  subTitle = "Please confirm your action to proceed.",
  cancelButtonColor,
  cancelButtonTextColor,
  cancelText,
  confirmButtonColor,
  confirmButtonTextColor,
  confirmText,
}) => {
  const OnConfirmTreated = async () => {
    if (isLoading) {
      return;
    }

    if (setIsLoading) {
      setIsLoading(true);
    }
    if (!onConfirm) return;
    onConfirm();
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
        <div>
          <ModalHeader>
            <Text
              fontSize="22px"
              color={applyOpacity(theme.colors.dark[1], 90)}
              fontWeight="bold"
            >
              {title}
            </Text>
          </ModalHeader>
          <ModalSubTitle>
            <Text
              fontSize="14px"
              color={applyOpacity(theme.colors.dark[2], 70)}
            >
              {subTitle}
            </Text>
          </ModalSubTitle>
        </div>
        <ButtonContainer>
          <CustomButton
            title={cancelText || "Cancel"}
            onClick={onClose}
            customHeight="38px"
            customTextSize="13px"
            backgroundColor={cancelButtonColor || theme.colors.dark[3]}
            textColor={cancelButtonTextColor || theme.colors.dark[1]}
          />
          <CustomButton
            onClick={OnConfirmTreated}
            title={confirmText || "Confirm"}
            customHeight="38px"
            textColor={confirmButtonTextColor || theme.colors.light[1]}
            customTextSize="13px"
            backgroundColor={confirmButtonColor || theme.colors.blue[1]}
          />
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};
