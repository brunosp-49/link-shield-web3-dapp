import { theme } from "@/assets/colors";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
}

export const ModalBackground = styled.div<ModalProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0%;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(225, 225, 225, 0.05);
`;

export const ModalContainer = styled.div`
  border-radius: 8px;
  user-select: none;
  min-width: 439px;
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  min-height: 216px;
  max-height: 550px;
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.1);
  background: ${theme.colors.light[1]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 32px 28px;
  box-sizing: border-box;
`;
