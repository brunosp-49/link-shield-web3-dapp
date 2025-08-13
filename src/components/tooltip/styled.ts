import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { theme } from "@/assets/colors";

export const TooltipStyled = styled(Tooltip)`
  background-color: ${theme.colors.light[1]};
  border: 1px solid ${theme.colors.dark[3]};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.01);
`;

export const TooltipStyle = {
  borderRadius: "14px",
  fontFamily: "Helvetica Neue, Arial, sans-serif",
};
