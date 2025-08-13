import { theme } from "@/assets/colors";
import type { IconProps } from "@/types";

export const GetInTouch = ({ active }: IconProps) => (
  <svg
    width={16}
    height={18}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0662 4.70318C11.8425 4.44439 12.5816 5.18302 12.3231 5.95936L9.02104 15.8644C8.78753 16.5648 7.89925 16.7744 7.37715 16.2525L5.08402 13.959L7.30314 9.72353L3.06682 11.9419L0.773688 9.64985C0.251712 9.12787 0.461216 8.2386 1.16129 8.00485L11.0662 4.70318Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
    />
    <path
      d="M11.0662 4.70318C11.8425 4.44439 12.5816 5.18302 12.3231 5.95936L9.02104 15.8644C8.78753 16.5648 7.89925 16.7744 7.37715 16.2525L5.08402 13.959L7.30314 9.72353L3.06682 11.9419L0.773688 9.64985C0.251712 9.12787 0.461216 8.2386 1.16129 8.00485L11.0662 4.70318Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
    <path
      d="M11.0662 4.70318C11.8425 4.44439 12.5816 5.18302 12.3231 5.95936L9.02104 15.8644C8.78753 16.5648 7.89925 16.7744 7.37715 16.2525L5.08402 13.959L7.30314 9.72353L3.06682 11.9419L0.773688 9.64985C0.251712 9.12787 0.461216 8.2386 1.16129 8.00485L11.0662 4.70318Z"
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
    <circle
      cx={1.5}
      cy={15.5}
      r={1.5}
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
    />
    <circle
      cx={1.5}
      cy={15.5}
      r={1.5}
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
    <circle
      cx={1.5}
      cy={15.5}
      r={1.5}
      fill={active ? theme.colors.blue[1] : theme.colors.dark[2]}
      fillOpacity={0.2}
    />
  </svg>
);
