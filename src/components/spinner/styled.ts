import { theme } from "@/assets/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid ${theme.colors.light[1]};
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
