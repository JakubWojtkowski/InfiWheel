import { Badge, DirectionsCar, EmojiPeople } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Main>
        <MainLeft>
          <Image src="../images/about3.jpg" alt="" />
          <Image src="../images/about1.jpg" alt="" />
        </MainLeft>
        <MainRight>
          <Heading>
            We simplify car rental for your convenience
            <span>.</span>
          </Heading>

          <Text>
            As a leading rental car company, InfiWheel is committed to providing
            freedom and comfort. Whether it's a business trip, family vacation,
            or spontaneous road trip, we enhance your travel experience.
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

  span {
    color: #fca311;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const MainLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  width: 55%;
  height: 100%;
  position: absolute;
  left: 24px;
  top: 0;
  object-fit: contain;
  border-radius: 32px;
  z-index: 33;

  &:nth-child(2) {
    left: 220px;
    top: 150px;
    filter: grayscale(50%);
  }

  @media only screen and (max-width: 1024px) {
    &:nth-child(2) {
      left: 150px;
      top: 120px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.div`
  position: relative;
  line-height: 2;
  width: 85%;
  font-size: clamp(0.75rem, 5vw, 1.25rem);
  z-index: 0;
`;

const Numbers = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const Number = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  grid-gap: 4px;

  .MuiSvgIcon-root {
    color: #fca311 !important;
    font-size: 54px !important;
    margin-bottom: 8px;
  }
`;

const Head = styled.h3``;

const Desc = styled.span`
  opacity: 0.8;
  text-align: center;
`;
