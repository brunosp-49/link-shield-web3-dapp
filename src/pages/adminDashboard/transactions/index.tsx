import { useNavigate } from "react-router-dom";
import { ContentContainer, ListContainer, MainContainer } from "./styles";
import { Header } from "@/components/header";
import { useState } from "react";
import { Text } from "@/components/text/styled";
import { ListRow } from "./components/listRow";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Transactions = ({ user }: any) => {
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
        <Text fontWeight="500">HISTORY</Text>
        <ListContainer>
          {[
            {
              address: "0xbfg3...9E98Eqf",
              id: "jd$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "ja$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "jb$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "jc$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "je$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "jf$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
            {
              address: "0xbfg3...9E98Eqf",
              id: "jg$sd",
              amount: "0.00598",
              dateCreated: "08/26/2018",
            },
          ].map((row, index) => (
            <ListRow
              address={row.address}
              dateCreated={row.dateCreated}
              id={row.id}
              amount={row.amount}
              key={index}
            />
          ))}
        </ListContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Transactions;
