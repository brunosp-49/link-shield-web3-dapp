import { ContentContainer, MainContainer } from "./styles";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider/styled";

const NewLink = () => {
  const [link, setLink] = useState("");
  const [rate, setRate] = useState("");

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
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
        <Divider height={9} />
        <Button title="Create Link" />
      </ContentContainer>
    </MainContainer>
  );
};

export default NewLink;
