import styled from "styled-components";

interface ButtonContainerProps {
  mode?: "normal" | "cancel" | "delete";
  isLoading?: boolean;
}

export const ButtonWallet = styled.div``;

export const CommonButton = styled.div<ButtonContainerProps>`
  user-select: none;
  cursor: ${({ isLoading }) => (isLoading ? "default" : "pointer")};
  border-radius: 8px;
  min-width: 141px;
  box-sizing: border-box;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ isLoading }) =>
    isLoading ? "center" : "space-between"};
  background-color: #af29fe;
  &:hover {
    opacity: ${({ isLoading }) => !isLoading && 0.7};
  }
  &:active {
    opacity: ${({ isLoading }) => !isLoading && 0.5};
  }
`;
