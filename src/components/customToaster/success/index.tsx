import { Text } from "@/components/text/styled";
import { DismissButton, MainContainer, TextContainer } from "./styled";
import { theme } from "@/assets/colors";
import type { FC } from "react";
import ToastS from "@/assets/svg/toastS";
import { toast } from "sonner";

export interface CustomToastProps {
  message: string;
  id: string | number;
}

export const SuccessCustomToast: FC<CustomToastProps> = ({ message, id }) => {
  return (
    <MainContainer key={id} id={String(id)}>
      <ToastS />
      <TextContainer>
        <Text>{message}</Text>
        <Text fontWeight="500" color={theme.colors.green[1]}>
          successfully
        </Text>
      </TextContainer>
      <DismissButton onClick={() => toast.dismiss(id)}>
        <Text color={theme.colors.light[1]} fontSize="15px" fontWeight="400">
          Dismiss
        </Text>
      </DismissButton>
    </MainContainer>
  );
};
