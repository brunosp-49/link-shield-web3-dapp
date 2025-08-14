import { ModalBackground, ModalContainer } from "./styled";
import type React from "react";

interface BlankModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const BlankModal: React.FC<BlankModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const handleBackgroundClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground isOpen={isOpen} onClick={handleBackgroundClick}>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackground>
  );
};
