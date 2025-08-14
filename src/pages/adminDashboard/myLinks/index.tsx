import {
  ButtonContainer,
  ContentContainer,
  InputEditModalContainer,
  ListContainer,
  MainContainer,
  PaginationContainer,
} from "./styles";
import { Header } from "@/components/header";
import { useState } from "react";
import { Text } from "@/components/text/styled";
import { ListRow } from "./components/listRow";
import { ConfirmModal } from "@/components/modal/confirmModal";
import { theme } from "@/assets/colors";
import { BlankModal } from "@/components/modal/blankModal";
import { applyOpacity } from "@/utils/colors";
import { Input } from "@/components/input";
import { CustomButton } from "@/components/customButton";
import Pagination from "@/components/pagination";

const MyLinks = () => {
  const [link, setLink] = useState("");
  const [rate, setRate] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Text fontWeight="500">MY LINKS</Text>
        <ListContainer>
          {[
            {
              url: "http://www.google.com.br",
              linkId: "jd$sd",
              dateCreated: "08/26/2018",
              active: true,
            },
            {
              url: "http://www.facebook.com.br",
              linkId: "fd$t6",
              dateCreated: "01/20/2020",
              active: true,
            },
            {
              url: "http://www.twitter.com",
              linkId: "tw$123",
              dateCreated: "03/15/2021",
              active: false,
            },
            {
              url: "http://www.linkedin.com",
              linkId: "ln$456",
              dateCreated: "07/10/2019",
              active: true,
            },
            {
              url: "http://www.github.com",
              linkId: "gh$789",
              dateCreated: "11/05/2020",
              active: false,
            },
            {
              url: "http://www.reddit.com",
              linkId: "rd$101",
              dateCreated: "02/22/2022",
              active: false,
            },
            {
              url: "http://www.instagram.com",
              linkId: "ig$202",
              dateCreated: "09/30/2021",
              active: true,
            },
          ].map((row, index) => (
            <ListRow
              onDeleteClick={() => setIsDeleteModalOpen(true)}
              onEditClick={() => setIsEditModalOpen(true)}
              onPauseClick={() => setIsPauseModalOpen(true)}
              onStartClick={() => setIsStartModalOpen(true)}
              url={row.url}
              dateCreated={row.dateCreated}
              linkId={row.linkId}
              active={row.active}
              key={index}
            />
          ))}
        </ListContainer>
      </ContentContainer>
      <PaginationContainer>
        <Pagination itemsPerPage={7} onPageChange={() => {}} totalItems={21} />
      </PaginationContainer>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Do you want to delete?"
        subTitle="This action cannot be revoked"
        onConfirm={() => {}}
        confirmButtonColor={theme.colors.red[1]}
      />
      <BlankModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <Text
          fontWeight="bold"
          fontSize="22px"
          color={applyOpacity(theme.colors.dark[1], 90)}
        >
          Edit Link
        </Text>
        <InputEditModalContainer>
          <Input
            label="Your link"
            value={link}
            onChange={setLink}
            placeholder="Which link do you want to protect?"
          />
          <Input
            label="Fee (POL)"
            value={rate}
            onChange={setRate}
            placeholder="0.000000000001"
          />
        </InputEditModalContainer>
        <ButtonContainer>
          <CustomButton
            title={"Cancel"}
            onClick={() => setIsEditModalOpen(false)}
            customHeight="38px"
            customTextSize="13px"
            backgroundColor={theme.colors.dark[3]}
            textColor={theme.colors.dark[1]}
          />
          <CustomButton
            onClick={() => {}}
            title={"Confirm"}
            customHeight="38px"
            textColor={theme.colors.light[1]}
            customTextSize="13px"
            backgroundColor={theme.colors.blue[1]}
          />
        </ButtonContainer>
      </BlankModal>
      <ConfirmModal
        isOpen={isPauseModalOpen}
        onClose={() => setIsPauseModalOpen(false)}
        title="Do you want to pause your link?"
        subTitle="You link is going to be paused, and stop working"
        onConfirm={() => {}}
        confirmButtonColor={theme.colors.orange[1]}
      />
      <ConfirmModal
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        title="Do you want to resume your link?"
        subTitle="Your link is going to be unpaused, and will work again."
        onConfirm={() => {}}
        confirmButtonColor={theme.colors.green[1]}
      />
    </MainContainer>
  );
};

export default MyLinks;
