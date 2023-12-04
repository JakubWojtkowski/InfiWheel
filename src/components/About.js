import { Badge, DirectionsCar, EmojiPeople } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Main>
        <MainLeft></MainLeft>

        <MainRight>
          <Heading>About Us</Heading>

          <Text>
            We believe in making every journey an unforgettable adventure. As a
            premier rental car company, we are dedicated to providing you with
            the keys to convenience, freedom, and comfort. Whether you're
            embarking on a business trip, a family vacation, or a spontaneous
            road trip with friends, InfiWheel is here to enhance your travel
            experience.
          </Text>
        </MainRight>
      </Main>
      <Numbers>
        <Number>
          <EmojiPeople />
          <Head>100k+</Head>
          <Desc>clients from around the world</Desc>
        </Number>

        <Number>
          <DirectionsCar />
          <Head>100+</Head>
          <Desc>cars in the our fleet</Desc>
        </Number>

        <Number>
          <Badge />
          <Head>1.5mln+</Head>
          <Desc>drivers and suppliers</Desc>
        </Number>
      </Numbers>
    </Container>
  );
}

export default About;

const Container = styled.div`
  color: #14213d;
`;

const Heading = styled.h2`
  font-size: clamp(3rem, 5vw, 5rem);
  letter-spacing: -1px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
`;

const MainLeft = styled.div`
  display: flex;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Text = styled.div`
  position: relative;
  line-height: 2;
  width: 85%;
  font-size: clamp(0.75rem, 5vw, 1.25rem);
  z-index: 0;
`;

const Numbers = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const Number = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;

  .MuiSvgIcon-root {
    color: #fca311 !important;
    font-size: 48px !important;
    margin-bottom: 8px;
  }
`;

const Head = styled.h3``;

const Desc = styled.span`
  opacity: 0.8;
`;
