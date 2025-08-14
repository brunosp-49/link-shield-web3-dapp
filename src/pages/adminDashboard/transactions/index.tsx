import {
  ContentContainer,
  ListContainer,
  MainContainer,
  PaginationContainer,
} from "./styles";
import { Header } from "@/components/header";
import { Text } from "@/components/text/styled";
import { ListRow } from "./components/listRow";
import Pagination from "@/components/pagination";

const Transactions = () => {
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
      <PaginationContainer>
        <Pagination itemsPerPage={7} onPageChange={() => {}} totalItems={21} />
      </PaginationContainer>
    </MainContainer>
  );
};

export default Transactions;
