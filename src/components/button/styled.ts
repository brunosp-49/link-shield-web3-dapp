import styled from "styled-components";
import { theme } from "@/assets/colors/index";

interface ButtonContainerProps {
  mode?: "normal" | "cancel" | "delete";
  isLoading?: boolean;
}

export const CommonButton = styled.div<ButtonContainerProps>`
  user-select: none;
  cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
  border-radius: 8px;
  min-width: 141px;
  width: fit-content;
  height: 50px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ mode }) =>
    mode === "normal"
      ? theme.colors.blue[1]
      : mode === "cancel"
      ? theme.colors.dark[3]
      : mode === "delete"
      ? theme.colors.red[1]
      : theme.colors.blue[1]};
  &:hover {
    opacity: ${({ isLoading }) => !isLoading && 0.7};
  }
  &:active {
    opacity: ${({ isLoading }) => !isLoading && 0.5};
  }
`;
