import { theme } from "@/assets/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 500px;
  margin-top: 46px;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  svg:focus,
  svg:active {
    border: none;
    outline: none;
  }
`;

export const CopyContainer = styled.div``;

export const UrlContainer = styled.div`
  width: 170px;
  max-width: 170px;
  box-sizing: border-box;
  min-width: 0;
`;

export const DateContainer = styled.div`
  width: 75px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const Status = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? theme.colors.green[1] : theme.colors.orange[1]};
  width: 19px;
  height: 19px;
  user-select: none;
`;
