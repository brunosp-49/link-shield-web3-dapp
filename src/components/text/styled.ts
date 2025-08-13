import { theme } from "@/assets/colors";
import styled from "styled-components";

interface TextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  textOverflow?: string;
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => (color ? color : theme.colors.dark[1])};
  font-size: ${({ fontSize = "16px" }) => fontSize};
  font-weight: ${({ fontWeight = "400" }) => fontWeight};
  line-height: ${({ lineHeight = "1.5" }) => lineHeight};
  text-align: ${({ textAlign = "left" }) => textAlign};
  margin: ${({ margin = "0" }) => margin};
  padding: ${({ padding = "0" }) => padding};
  font-family: ${({ fontFamily = "Helvetica Neue, Arial, sans-serif" }) =>
    fontFamily};
  ${({ textOverflow }) =>
    textOverflow &&
    `
    text-overflow: ${textOverflow};
    overflow: hidden;
    white-space: nowrap;
  `}
`;
