import styled from "styled-components";
import { theme } from "@/assets/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 78px;
  padding: 10px 0px;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  border: 1px solid ${theme.colors.dark[3]};
  border-radius: 10.8px;
  width: 340px;
  box-sizing: border-box;
  height: 46px;
  padding: 0px 16px;
  outline: none;
  color: ${theme.colors.dark[1]};
  font-size: 16px;
  font-weight: 300;
  font-family: Helvetica Neue, Arial, sans-serif;
  &::placeholder {
    font-family: Helvetica Neue, Arial, sans-serif;
  }
`;
