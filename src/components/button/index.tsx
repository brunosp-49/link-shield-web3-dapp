import { Text } from "@/components/text/styled";
import type React from "react";
import { CommonButton } from "./styled";
import { Spinner } from "../spinner/index";
import { theme } from "@/assets/colors";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  mode?: "normal" | "cancel" | "delete" | "wallet" | "pay";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  mode = "normal",
  isLoading = false,
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
        <Text
          fontSize="15px"
          fontWeight="bold"
          color={
            mode === "normal" || mode === "cancel"
              ? theme.colors.light[1]
              : mode === "delete"
              ? theme.colors.dark[1]
              : theme.colors.light[1]
          }
        >
          {title}
        </Text>
      )}
    </CommonButton>
  );
};
