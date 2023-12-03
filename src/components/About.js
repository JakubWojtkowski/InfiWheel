import { Done } from "@mui/icons-material";
import React, { useEffect } from "react";
import styled from "styled-components";

function About() {
  useEffect(() => {
    function showCards() {
      let cards = document.querySelectorAll(".card");
      let stickArea = document.querySelector(".stack-area");

      function rotateCards() {
        let angle = 0;
        cards.forEach((card) => {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle = angle - 10;
        });
      }
    }
  }, []);

  return (
    <Container>
      <Main>
        <MainLeft>
          <Cards className="cards">
            <Card className="card">
              <Sub>Simplified</Sub>
              <Content>Renting a car are now simple</Content>
            </Card>
            <Card>
              <Sub>Simplified</Sub>
              <Content>Renting a car are now simple</Content>
            </Card>
            <Card>
              <Sub>Boost Productivity</Sub>
              <Content>Perform your duties faster</Content>
            </Card>
            <Card>
              <Sub>Support</Sub>
              <Content>Now its 24/7 support</Content>
            </Card>
          </Cards>
        </MainLeft>

        <MainRight>
          <Heading>About Us</Heading>

          <Text>
            We believe in making every journey an unforgettable adventure. As a
            premier rental car company, we are dedicated to providing you with
            the keys to convenience, freedom, and comfort. Whether you're
            embarking on a business trip, a family vacation, or a spontaneous
            road trip with friends, InfiWheel is here to enhance your travel
            experience.
            <Under />
          </Text>
        </MainRight>
      </Main>
      <Numbers>
        <Number>
          <Done />
          <Head>100k+</Head>
          <Desc>clients from around the world</Desc>
        </Number>

        <Number>
          <Done />
          <Head>100k+</Head>
          <Desc>clients from around the world</Desc>
        </Number>

        <Number>
          <Done />
          <Head>100k+</Head>
          <Desc>clients from around the world</Desc>
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  flex-basis: 50%;
`;

const Cards = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Card = styled.div`
  width: 350px;
  height: 350px;
  padding: 32px;
  border-radius: 6mm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.5s ease-in-out;

  &:nth-child(1) {
    background: rgb(64, 122, 255);
    z-index: 4;
  }

  &:nth-child(2) {
    background: rgb(221, 62, 88);
    z-index: 3;
  }

  &:nth-child(3) {
    background: rgb(186, 113, 245);
    z-index: 2;
  }

  &:nth-child(4) {
    background: rgb(247, 92, 208);
    z-index: 1;
  }
`;

const Sub = styled.div``;

const Content = styled.div``;

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

const Under = styled.div`
  position: absolute;
  opacity: 0.9;
  top: 24px;
  bottom: 0;
  left: 180px;
  right: 0;
  width: 400px;
  z-index: -1;
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
