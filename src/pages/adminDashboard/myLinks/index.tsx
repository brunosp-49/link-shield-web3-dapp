import { useNavigate } from "react-router-dom";
import { ContentContainer, ListContainer, MainContainer } from "./styles";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { useState } from "react";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider/styled";
import { Text } from "@/components/text/styled";
import { ListRow } from "./components/listRow";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyLinks = ({ user }: any) => {
  const [link, setLink] = useState("");
  const [rate, setRate] = useState("");

  const navigate = useNavigate();

  // if (!user) {
  //   navigate("/");
  //   return null;
  // }

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
            },
            {
              url: "http://www.facebook.com.br",
              linkId: "fd$t6",
              dateCreated: "01/20/2020",
            },
            {
              url: "http://www.twitter.com",
              linkId: "tw$123",
              dateCreated: "03/15/2021",
            },
            {
              url: "http://www.linkedin.com",
              linkId: "ln$456",
              dateCreated: "07/10/2019",
            },
            {
              url: "http://www.github.com",
              linkId: "gh$789",
              dateCreated: "11/05/2020",
            },
            {
              url: "http://www.reddit.com",
              linkId: "rd$101",
              dateCreated: "02/22/2022",
            },
            {
              url: "http://www.instagram.com",
              linkId: "ig$202",
              dateCreated: "09/30/2021",
            },
          ].map((row, index) => (
            <ListRow
              url={row.url}
              dateCreated={row.dateCreated}
              linkId={row.linkId}
              key={index}
            />
          ))}
        </ListContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default MyLinks;
