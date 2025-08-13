import { theme } from "@/assets/colors";
import type { IconProps } from "@/types";

export const MyLinks = ({ active }: IconProps) => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 0C12.1046 0 13 0.895431 13 2V11C13 12.1046 12.1046 13 11 13H2C0.895431 13 0 12.1046 0 11V2C0 0.895431 0.895431 0 2 0H11ZM7.5 5C6.67157 5 6 5.67157 6 6.5C6 7.32843 6.67157 8 7.5 8H9.5C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5H7.5Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
    />
    <path
      d="M11 0C12.1046 0 13 0.895431 13 2V11C13 12.1046 12.1046 13 11 13H2C0.895431 13 0 12.1046 0 11V2C0 0.895431 0.895431 0 2 0H11ZM7.5 5C6.67157 5 6 5.67157 6 6.5C6 7.32843 6.67157 8 7.5 8H9.5C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5H7.5Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
    <path
      d="M11 0C12.1046 0 13 0.895431 13 2V11C13 12.1046 12.1046 13 11 13H2C0.895431 13 0 12.1046 0 11V2C0 0.895431 0.895431 0 2 0H11ZM7.5 5C6.67157 5 6 5.67157 6 6.5C6 7.32843 6.67157 8 7.5 8H9.5C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5H7.5Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
  </svg>
);
