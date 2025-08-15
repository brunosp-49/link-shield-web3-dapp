import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
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
  justify-content: flex-end;
  align-items: start;
  backdrop-filter: blur(5px);
  background-color: rgba(225, 225, 225, 0.05);
`;

export const ModalContainer = styled.div`
  border-radius: 10.8px;
  user-select: none;
  width: 290px;
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  min-height: 180px;
  max-height: 550px;
  margin-top: 100px;
  margin-right: 40px;
  box-shadow: 0px 50px 50px rgba(0, 0, 0, 0.05);
  background: linear-gradient(
    180deg,
    ${applyOpacity(theme.colors.light[1], 56)} 0%,
    ${applyOpacity("#F8F8FF", 71)} 50%,
    ${applyOpacity(theme.colors.light[1], 59)} 80%
  );
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 28px 0px;
  box-sizing: border-box;
`;

export const ModalOptions = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalOption = styled.div<{ isLoading?: boolean }>`
  max-width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 21px;
  gap: 15px;
  transition: background-color 0.3s;
  ${(props) =>
    props.isLoading &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
  `}

  &:hover {
    background-color: ${applyOpacity(theme.colors.dark[3], 30)};
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0px 22px;
`;
