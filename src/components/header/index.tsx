import { Text } from "@/components/text/styled";
import { ButtonContainer, MainContainer, TitleContainer } from "./styled";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
import { Button } from "@/components/button";
import { useLocation } from "react-router-dom";
import { WalletOptionsModal } from "./compoenent/walletOptionsModal";
import { useState } from "react";
import { ButtonWalletConnect } from "./compoenent/connectedWallet/button";
import { WalletConnectedModal } from "./compoenent/connectedWallet/walletModalConnected";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <MainContainer>
      <TitleContainer>
        {currentPage !== "/" && (
          <>
            <Text fontWeight="bold" fontSize="30px">
              {currentPage === "/dashboard/new-link"
                ? "New Link"
                : currentPage === "/dashboard/my-links"
                ? "My Links"
                : currentPage === "/dashboard/get-in-touch"
                ? "Get in Touch"
                : currentPage === "/dashboard/transactions"
                ? "Transactions"
                : "Dashboard"}
            </Text>
            <Text
              color={applyOpacity(theme.colors.dark[2], 70)}
              fontSize="13px"
            >
              Protect your links. Profit from them
            </Text>
          </>
        )}
      </TitleContainer>
      <ButtonContainer>
        {currentPage === "/" ? (
          <Button
            title="Connect Wallet"
            onClick={() => handleOpenModal()}
            isLoading={isLoading}
          />
        ) : (
          <ButtonWalletConnect
            onClick={() => handleOpenModal()}
            isLoading={isLoading}
          />
        )}
      </ButtonContainer>
      <WalletOptionsModal
        isOpen={isModalOpen && currentPage === "/"}
        onClose={handleCloseModal}
        setIsLoading={setIsLoading}
      />
      <WalletConnectedModal
        isOpen={isModalOpen && currentPage !== "/"}
        onClose={handleCloseModal}
        setIsLoading={setIsLoading}
      />
    </MainContainer>
  );
};
