import { useEffect, useState, type FC } from "react";
import {
  ActionsContainer,
  CopyContainer,
  DateContainer,
  MainContainer,
  Status,
  UrlContainer,
} from "./styled";
import CopyIcon from "../../assets/copy";
import { Text } from "@/components/text/styled";
import EditIcon from "../../assets/edit";
import DeleteIcon from "../../assets/delete";
import { TooltipStyle, TooltipStyled } from "@/components/tooltip/styled";
import { theme } from "@/assets/colors";
import { applyOpacity } from "@/utils/colors";
import PauseIcon from "../../assets/pause";
import PlayIcon from "../../assets/play";

interface ListRowProps {
  url: string;
  linkId: string;
  dateCreated: string;
  active: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onPauseClick: () => void;
  onStartClick: () => void;
}

export const ListRow: FC<ListRowProps> = ({
  dateCreated,
  linkId,
  url,
  active,
  onDeleteClick,
  onEditClick,
  onPauseClick,
  onStartClick,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(`http://www.link-shield.com/${linkId}`);
    setCopied(true);
  };
  return (
    <MainContainer key={linkId}>
      <CopyContainer>
        <CopyIcon
          data-tooltip-content={copied ? "Copied" : "Copy protected url"}
          data-tooltip-id="copy"
          onClick={copy}
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
      <Status
        active={active}
        data-tooltip-content={active ? "Active" : "Paused"}
        data-tooltip-id={active ? "statusActive" : "statusPaused"}
      >
        <Text lineHeight="0" fontSize="12px" color={theme.colors.light[1]}>
          {active ? "A" : "P"}
        </Text>
      </Status>
      <DateContainer>
        <Text color={applyOpacity(theme.colors.dark[2], 50)}>
          {dateCreated}
        </Text>
      </DateContainer>
      <ActionsContainer>
        <EditIcon
          onClick={onEditClick}
          data-tooltip-content={"Edit Link"}
          data-tooltip-id="edit"
        />
        <DeleteIcon
          onClick={onDeleteClick}
          data-tooltip-content={"Delete Link"}
          data-tooltip-id="delete"
        />
        {active ? (
          <PauseIcon
            onClick={onPauseClick}
            data-tooltip-content={"Pause link"}
            data-tooltip-id="pause"
          />
        ) : (
          <PlayIcon
            onClick={onStartClick}
            data-tooltip-content={"Unpause"}
            data-tooltip-id="start"
          />
        )}
      </ActionsContainer>
      <TooltipStyled style={TooltipStyle} place="top" id="url" />
      <TooltipStyled style={TooltipStyle} place="top" id="copy" />
      <TooltipStyled style={TooltipStyle} place="top" id="edit" />
      <TooltipStyled style={TooltipStyle} place="top" id="delete" />
      <TooltipStyled style={TooltipStyle} place="top" id="pause" />
      <TooltipStyled style={TooltipStyle} place="top" id="start" />
      <TooltipStyled style={TooltipStyle} place="top" id="statusActive" />
      <TooltipStyled style={TooltipStyle} place="top" id="statusPaused" />
    </MainContainer>
  );
};
