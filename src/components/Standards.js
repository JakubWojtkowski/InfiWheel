import React from "react";
import styled from "styled-components";

function Standards() {
  return (
    <Container>
      <Heading>Elevating Standards</Heading>
      <SubHeading>
        Reserve InfiWheel by the hour or day and pay only for the time you spend
        driving
      </SubHeading>
      <Main>
        <Item>
          <ItemImage>
            <Image src="../images/standards_access.png" alt="item" />
          </ItemImage>
          <Title>24/7 Accessibility</Title>
          <Description>
            <span>Connect with us </span>anytime and anywhere you are
          </Description>
        </Item>

        <Item>
          <ItemImage>
            <Image src="../images/standards_cars.png" alt="item" />
          </ItemImage>
          <Title>Cars near you</Title>
          <Description>
            Explore cars nearby with <span> easy access</span> from any location
          </Description>
        </Item>

        <Item>
          <ItemImage>
            <Image src="../images/standards_save.png" alt="item" />
          </ItemImage>
          <Title>Save money</Title>
          <Description>
            InfiWheel covers gas, and <span> insurance</span> for your car
          </Description>
        </Item>

        <Item>
          <ItemImage>
            <Image src="../images/standards_public.png" alt="item" />
          </ItemImage>

          <Title>Go beyond public transit</Title>
          <Description>
            <span>Perfect complement</span> to the bus and train
          </Description>
        </Item>
      </Main>
    </Container>
  );
}

export default Standards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #14213d;
`;

const Heading = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2.75rem);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SubHeading = styled.span`
  margin-bottom: 24px;
  opacity: 0.75;
  font-size: clamp(1rem, 3.5vw, 1.15rem);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Item = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemImage = styled.div`
  height: 70%;
  display: grid;
  place-items: end;
  background: #e5e5e5;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 95%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h4`
  text-align: center;
`;

const Description = styled.span`
  text-align: center;

  span {
    color: #fca311;
    font-weight: 600;
  }
`;
