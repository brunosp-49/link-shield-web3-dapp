import { styled } from "styled-components";
import shieldSvg from "@/assets/svg/backgroundImage.svg";

export const Container = styled.div`
  margin: 0;
`;

export const SubContainer = styled.div``;

export const ContainerHome = styled.div`
  margin: 0;
  min-height: calc(100dvh - 46px);
  background-image: url(${shieldSvg});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 650px;
`;
