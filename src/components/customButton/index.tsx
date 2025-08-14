import { Text } from "@/components/text/styled";
import type React from "react";
import { CommonButton } from "./styled";
import { Spinner } from "../spinner/index";
import { theme } from "@/assets/colors";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  isLoading?: boolean;
  customHeight?: string;
  customTextSize?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  backgroundColor,
  textColor,
  isLoading = false,
  customHeight,
  customTextSize = "15px",
}) => {
  return (
    <CommonButton
      backgroundColor={backgroundColor}
      isLoading={isLoading}
      customHeight={customHeight}
      onClick={() => {
        if (isLoading || !onClick) return;
        onClick();
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Text
          fontSize={customTextSize}
          fontWeight="bold"
          color={textColor || theme.colors.light[1]}
        >
          {title}
        </Text>
      )}
    </CommonButton>
  );
};
