import React from "react";
import styled from "styled-components";

function Offer() {
  return (
    <Container>
      <Heading>Our fleet</Heading>
      <Main>
        <Header>
          <Filter>Filter by:</Filter>
          <MiniCard></MiniCard>
        </Header>
        <Cars>
          <CarCard>
            <Image>
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-white-fiat-500-carcarvehicletransportfiat-961524650065dsyyk.png"
                alt=""
              />
            </Image>
            <Content>
              <Title>Fiat 500</Title>
              <Desc>5 miejsc | manualna | benzyna</Desc>
            </Content>
          </CarCard>
          <CarCard>
            <Image>
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-white-fiat-500-carcarvehicletransportfiat-961524650065dsyyk.png"
                alt=""
              />
            </Image>
            <Content>
              <Title>Fiat 500</Title>
              <Desc>5 miejsc | manualna | benzyna</Desc>
            </Content>
          </CarCard>
          <CarCard>
            <Image>
              <img
                src="https://www.pngarts.com/files/3/Audi-A6-PNG-Pic.png"
                alt=""
              />
            </Image>
            <Content>
              <Title>Fiat 500</Title>
              <Desc>5 miejsc | manualna | benzyna</Desc>
            </Content>
          </CarCard>
          <CarCard>
            <Image>
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-white-fiat-500-carcarvehicletransportfiat-961524650065dsyyk.png"
                alt=""
              />
            </Image>
            <Content>
              <Title>Fiat 500</Title>
              <Desc>5 miejsc | manualna | benzyna</Desc>
            </Content>
          </CarCard>
        </Cars>
      </Main>
    </Container>
  );
}

export default Offer;

const Container = styled.div`
  max-width: 1200px;
  margin: 96px auto;
  width: 90vw;
`;

const Main = styled.div`
  margin-top: 24px;
  border-radius: 24px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: clamp(3rem, 5vw, 5rem);
  letter-spacing: -1px;
`;

const Header = styled.div`
  margin: 12px;
  padding: 12px;
  height: 48px;
  display: flex;
  gap: 24px;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Filter = styled.span``;

const MiniCard = styled.div``;

const Cars = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 48px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CarCard = styled.div`
  padding: 10px;
`;

const Image = styled.div`
  max-width: 240px;
  display: grid;
  place-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div``;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Desc = styled.span`
  margin-top: 8px;
`;
