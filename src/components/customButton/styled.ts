import styled from "styled-components";
import { theme } from "@/assets/colors/index";

interface ButtonContainerProps {
  backgroundColor?: string;
  isLoading?: boolean;
  customHeight?: string;
}

export const CommonButton = styled.div<ButtonContainerProps>`
  user-select: none;
  cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
  border-radius: 8px;
  min-width: 141px;
  width: fit-content;
  height: ${({ customHeight }) => customHeight || "50px"};
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor = theme.colors.blue[1] }) =>
    backgroundColor};
  &:hover {
    opacity: ${({ isLoading }) => !isLoading && 0.7};
  }
  &:active {
    opacity: ${({ isLoading }) => !isLoading && 0.5};
  }
`;
