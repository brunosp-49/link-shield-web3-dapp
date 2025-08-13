import { Text } from "@/components/text/styled";
import { DismissButton, MainContainer, TextContainer } from "./styled";
import { theme } from "@/assets/colors";
import type { FC } from "react";
import ToastF from "@/assets/svg/toastF";
import { toast } from "sonner";
import type { CustomToastProps } from "../success";

export const FailCustomToast: FC<CustomToastProps> = ({ message, id }) => {
  return (
    <MainContainer key={id} id={String(id)}>
      <ToastF />
      <TextContainer>
        <Text fontWeight="500" color={theme.colors.red[1]}>
          Failed
        </Text>
        <Text>{message}</Text>
      </TextContainer>
      <DismissButton onClick={() => toast.dismiss(id)}>
        <Text color={theme.colors.light[1]} fontSize="15px" fontWeight="400">
          Dismiss
        </Text>
      </DismissButton>
    </MainContainer>
  );
};
