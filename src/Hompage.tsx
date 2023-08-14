import React, { useContext } from "react";
import Image from "next/image";
import { Logo, Twitter, TwitterMobile } from "../public";
import {
  Container,
  Text,
  TextContainer,
  TextWrapper,
  Title,
  TwitterText,
  Wrapper,
} from "./styles/HomePage.Styled";
import Link from "next/link";
import GlobalContext from "./Context/GlobalContext";

export default function HomePage() {
  const { isMobile } = useContext(GlobalContext);

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Title>Tech focused Investments in the Global South</Title>
        <TextWrapper>
          <TwitterText>
            <Link href="https://twitter.com/ltadvisorsVC" passHref target="#">
              Get in touch {isMobile ? <TwitterMobile /> : <Twitter />}
            </Link>
          </TwitterText>
          <TextContainer>
            <Text>
              Nairobi
              <Image
                src="/Kenya.svg"
                alt="kenya flag icon"
                width={17.5}
                height={10.189}
              />
            </Text>
            <Text>
              Berlin
              <Image
                src="/Germany.svg"
                alt="Germany flag icon"
                width={17.5}
                height={10.189}
              />
            </Text>
            <Text>
              Nassau
              <Image
                src="/Bahamas.svg"
                alt="Bahamas flag icon"
                width={17.5}
                height={10.189}
              />
            </Text>
          </TextContainer>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}
