import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 35px;
  left: 35px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 143px;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.07);
  background: linear-gradient(
    90deg,
    ${applyOpacity(theme.colors.light[1], 98)} 0%,
    ${applyOpacity(theme.colors.light[1], 98)} 50%,
    ${applyOpacity(theme.colors.light[1], 98)} 80%
  );
  border-radius: 10.8px;
  padding: 18px;
  border: 1px solid ${theme.colors.light[2]};
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

export const DismissButton = styled.div`
  background-color: #14b4e6;
  width: 83px;
  padding: 7px 20px;
  border-radius: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`;
