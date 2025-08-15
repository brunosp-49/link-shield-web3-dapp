import { useLocation } from "react-router-dom";
import { ButtonContainer, MainContainer, TitleContainer } from "./styled";
import { Text } from "../text/styled";
import { applyOpacity } from "@/utils/colors";
import { theme } from "@/assets/colors";
import { ButtonWalletConnect } from "./component/connectedWallet/button";
import { Button } from "../button";
import { useWallet } from "@/hooks/useWallet";

export const Header = () => {
  const { isLoading, isConnected, address, connect, openAccountModal } =
    useWallet();

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
        {isConnected ? (
          <ButtonWalletConnect
            title={
              address
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Connected"
            }
            onClick={openAccountModal}
          />
        ) : (
          <Button
            title="Connect Wallet"
            onClick={connect}
            isLoading={isLoading}
          />
        )}
      </ButtonContainer>
    </MainContainer>
  );
};
