import { Header } from "@/components/header";
import { ContainerHome } from "@/components/containers/styled";
import {
  Card,
  CardsContainer,
  CardTextContainer,
  LogoContainer,
  MainContainer,
  PrinciplesContainer,
  TextContainer,
} from "./styles";
import { LinkShield } from "@/assets/svg/linkShield";
import ShieldIcon from "@/assets/svg/shield";
import { Text } from "@/components/text/styled";
import { applyOpacity } from "@/utils/colors";
import { theme } from "@/assets/colors";
import ShieldCard from "@/assets/svg/shieldCard";
import CoinsCard from "@/assets/svg/coinsCard";
import PrivacyCard from "@/assets/svg/privacyCard";
const LandingPage = () => (
  <ContainerHome>
    <Header />
    <MainContainer>
      <LogoContainer>
        <ShieldIcon />
        <LinkShield />
      </LogoContainer>
      <TextContainer>
        <Text fontSize="41px" color={applyOpacity(theme.colors.dark[1], 70)}>
          Protect your links. Profit from them.
        </Text>
        <Text color={applyOpacity(theme.colors.dark[2], 70)} fontSize="20px">
          LinkShield protects your URLs with blockchain technology, ensuring
          they remain safe, untampered, and fully under your control. Share them
          for free or set a small per-click fee, allowing you to monetize
          traffic through secure micro-payments. Every visit becomes a
          transparent, profitable interaction — built for the decentralized web.
        </Text>
      </TextContainer>
      <PrinciplesContainer>
        <Text fontSize="32px" color={applyOpacity(theme.colors.dark[1], 70)}>
          How it works
        </Text>
        <CardsContainer>
          <Card>
            <ShieldCard />
            <CardTextContainer>
              <Text
                color={applyOpacity("#141414", 70)}
                fontWeight="500"
                fontSize="15.5px"
              >
                Your link safe
              </Text>
              <Text
                color={applyOpacity(theme.colors.dark[1], 70)}
                fontSize="15px"
                textAlign="center"
              >
                Your links are safe inside the blockchain.
              </Text>
            </CardTextContainer>
          </Card>
          <Card>
            <CoinsCard />
            <CardTextContainer>
              <Text
                color={applyOpacity("#141414", 70)}
                fontWeight="500"
                fontSize="15.5px"
              >
                Income
              </Text>
              <Text
                color={applyOpacity(theme.colors.dark[1], 70)}
                fontSize="15px"
                textAlign="center"
              >
                Your links can earn money with every click.{" "}
              </Text>
            </CardTextContainer>
          </Card>
          <Card>
            <PrivacyCard />
            <CardTextContainer>
              <Text
                color={applyOpacity("#141414", 70)}
                fontWeight="500"
                fontSize="15.5px"
              >
                Anonymity
              </Text>
              <Text
                color={applyOpacity(theme.colors.dark[1], 70)}
                fontSize="15px"
                textAlign="center"
              >
                Your privacy is protected with every visit.{" "}
              </Text>
            </CardTextContainer>
          </Card>
        </CardsContainer>
      </PrinciplesContainer>
    </MainContainer>
  </ContainerHome>
);

export default LandingPage;
