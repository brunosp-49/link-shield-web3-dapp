import { ContentContainer, MainContainer } from "./styles";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider/styled";
import { TextArea } from "@/components/textArea";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Input
          label="E-mail"
          value={email}
          onChange={setEmail}
          placeholder="Type your e-mail address"
        />
        <Input
          label="Name"
          value={name}
          onChange={setName}
          placeholder="Type your name"
        />
        <TextArea
          label="Message"
          value={message}
          onChange={setMessage}
          placeholder="Type your message"
        />
        <Divider height={9} />
        <Button title="Send message" />
      </ContentContainer>
    </MainContainer>
  );
};

export default GetInTouch;
