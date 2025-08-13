import { applyOpacity } from "@/utils/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.aside`
  display: flex;
  height: 100dvh;
  padding: 0px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 62px;
  align-items: center;
  box-sizing: border-box;
  width: 320px;
  background: linear-gradient(
    180deg,
    ${applyOpacity("#F0FFF5", 51)} 0%,
    ${applyOpacity("#ECE8FB", 44)} 57%,
    ${applyOpacity("#FCFCFF", 70)} 100%
  );
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin-top: 142px;
  width: 100%;
`;

export const SidebarMenuItem = styled(Link)`
  display: flex;
  width: 80%;
  height: 27px;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
`;

export const OutletContainer = styled.main`
  flex: 1;
  padding: 20px;
`;

export const ActiveContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
