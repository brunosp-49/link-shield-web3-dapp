import { useNavigate } from "react-router-dom";
import { ContentContainer, MainContainer } from "./styles";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider/styled";
import { TextArea } from "@/components/textArea";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetInTouch = ({ user }: any) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // if (!user) {
  //   navigate("/");
  //   return null;
  // }

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
        <Button title="Create Link" />
      </ContentContainer>
    </MainContainer>
  );
};

export default GetInTouch;
