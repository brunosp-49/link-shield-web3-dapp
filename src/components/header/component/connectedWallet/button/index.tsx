import { Text } from "@/components/text/styled";
import type React from "react";
import { CommonButton } from "./styled";
import { theme } from "@/assets/colors";
import { Spinner } from "@/components/spinner";

interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  title: string;
}

export const ButtonWalletConnect: React.FC<ButtonProps> = ({
  onClick,
  isLoading = false,
  title,
}) => {
  return (
    <CommonButton
      isLoading={isLoading}
      onClick={() => {
        if (isLoading || !onClick) return;
        onClick();
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            style={{
              backgroundColor: theme.colors.green[1],
              width: "10px",
              height: "10px",
              borderRadius: "5px",
            }}
          />
          <Text fontSize="15px" fontWeight="bold" color={theme.colors.light[1]}>
            {title}
          </Text>
        </>
      )}
    </CommonButton>
  );
};
