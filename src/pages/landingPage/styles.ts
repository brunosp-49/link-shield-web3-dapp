import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 123px 0px 123px;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 30px 90px 0px 90px;
  }

  @media (max-width: 768px) {
    padding: 20px 70px 0px 70px;
  }

  @media (max-width: 600px) {
    padding: 20px 50px 0px 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 42.5px;
  justify-content: flex-start;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 775px;
  margin: 20px 0px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px auto;
  }
`;

export const PrinciplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  width: 100%;
  height: 212px;
  background-color: #faf9fc;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
    gap: 20px;
    background-color: transparent; /* Remove a cor de fundo do contêiner */
  }
`;

export const Card = styled.div`
  height: 100%;
  width: 127px;
  padding: 26px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 200px;
    padding: 15px;
    background-color: #faf9fc; /* Adiciona a cor de fundo ao card */
    border-radius: 10px;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 63px);
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
`;
