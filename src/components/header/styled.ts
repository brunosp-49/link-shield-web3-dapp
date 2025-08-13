import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 58px;
  margin-top: 38px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  @media (max-width: 490px) {
    display: none;
  }
`;
