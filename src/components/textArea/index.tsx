import type { FC } from "react";
import { MainContainer, StyledInput } from "./styled";
import { Text } from "../text/styled";
import { theme } from "@/assets/colors";

interface InputProps {
  placeholder: string;
  value: string;
  label: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const TextArea: FC<InputProps> = ({
  disabled,
  onChange,
  placeholder,
  value,
  label,
}) => {
  return (
    <MainContainer>
      <Text color={theme.colors.dark[1]} fontWeight="500">
        {label}
      </Text>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </MainContainer>
  );
};
