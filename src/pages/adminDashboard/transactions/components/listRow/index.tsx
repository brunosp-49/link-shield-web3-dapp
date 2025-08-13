import type { FC } from "react";
import {
  DateContainer,
  MainContainer,
  AddressContainer,
  PolContainer,
  AmountContainer,
} from "./styled";
import { Text } from "@/components/text/styled";
import PolygonIcon from "../../assets/polygonIcon";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";

interface ListRowProps {
  address: string;
  amount: string;
  dateCreated: string;
  id: string;
}

export const ListRow: FC<ListRowProps> = ({
  dateCreated,
  address,
  amount,
  id,
}) => (
  <MainContainer key={id}>
    <PolContainer>
      <PolygonIcon />
    </PolContainer>
    <AddressContainer>
      <Text color="#6F6C99" textOverflow="ellipsis">
        {address}
      </Text>
    </AddressContainer>
    <AmountContainer>
      <Text color={theme.colors.green[1]}>{amount}</Text>
    </AmountContainer>
    <DateContainer>
      <Text color={applyOpacity(theme.colors.dark[2], 50)}>{dateCreated}</Text>
    </DateContainer>
  </MainContainer>
);
