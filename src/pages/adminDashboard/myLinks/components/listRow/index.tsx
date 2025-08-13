import type { FC } from "react";
import {
  ActionsContainer,
  CopyContainer,
  DateContainer,
  MainContainer,
  UrlContainer,
} from "./styled";
import CopyIcon from "../../assets/copy";
import { Text } from "@/components/text/styled";
import EditIcon from "../../assets/edit";
import DeleteIcon from "../../assets/delete";
import { TooltipStyle, TooltipStyled } from "@/components/tooltip/styled";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";

interface ListRowProps {
  url: string;
  linkId: string;
  dateCreated: string;
}

export const ListRow: FC<ListRowProps> = ({ dateCreated, linkId, url }) => (
  <MainContainer key={linkId}>
    <CopyContainer>
      <CopyIcon
        data-tooltip-content={"Copy protected url"}
        data-tooltip-id="copy"
      />
    </CopyContainer>
    <UrlContainer>
      <Text
        data-tooltip-content={url}
        data-tooltip-id="url"
        textOverflow="ellipsis"
        color="#6F6C99"
      >
        {url}
      </Text>
    </UrlContainer>
    <DateContainer>
      <Text color={applyOpacity(theme.colors.dark[2], 50)}>{dateCreated}</Text>
    </DateContainer>
    <ActionsContainer>
      <EditIcon data-tooltip-content={"Edit Link"} data-tooltip-id="edit" />
      <DeleteIcon
        data-tooltip-content={"Delete Link"}
        data-tooltip-id="delete"
      />
    </ActionsContainer>
    <TooltipStyled style={TooltipStyle} place="top" id="url" />
    <TooltipStyled style={TooltipStyle} place="top" id="copy" />
    <TooltipStyled style={TooltipStyle} place="top" id="edit" />
    <TooltipStyled style={TooltipStyle} place="top" id="delete" />
  </MainContainer>
);
