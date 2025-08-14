import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 146px 20px 20px 65px;
  box-sizing: border-box;
`;

export const ListContainer = styled.div``;

export const InputEditModalContainer = styled.div`
padding: 10px 0px;
`;

export const ButtonContainer = styled.div<{ isLoading?: boolean }>`
  max-width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  transition: background-color 0.3s;
  ${(props) =>
    props.isLoading &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
  `}
`;

export const PaginationContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: flex-start;
  padding: 0px 20px 0px 65px;
`;