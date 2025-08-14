import { theme } from "@/assets/colors";
import styled, { css } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-family: "Inter", sans-serif;
`;

export const PaginationButton = styled.button<{
  $isActive?: boolean;
  $isDots?: boolean;
}>`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  width: 34.53px;
  height: 34.53px;
  border-radius: 4px;
  background-color: ${theme.colors.light[1]};
  border: 1px solid #bebebe;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover:not([disabled]):not([aria-disabled="true"]) {
    background-color: #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #8c7ae6, 0 0 0 4px rgba(140, 122, 230, 0.3);
  }

  &:disabled,
  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.$isActive &&
    css`
      background-color: #e9e1ff;
      color: #fff;
      border-color: #7949ff;
      box-shadow: 0 2px 4px rgba(140, 122, 230, 0.2);
    `}

  ${(props) =>
    props.$isDots &&
    css`
      background-color: transparent;
      color: #555;
      border: none;
      cursor: default;
      box-shadow: none;
      &:hover {
        background-color: transparent;
      }
    `}
`;
