import React from "react";
import styled from "styled-components";

function CarsTailored() {
  return (
    <Container>
      <Heading>Cars tailored to your needs</Heading>
      <SubHeading>
        Reserve InfiWheel by the hour or day and pay only for the time you spend
        driving
      </SubHeading>

      <Items>
        <ItemCard>
          <ItemCardImage>
            <Image
              src="https://autofarallones.com/wp-content/uploads/2018/09/Zoe1.png"
              alt=""
            />
          </ItemCardImage>
          <ItemCardTitle>Electric</ItemCardTitle>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image
              src="http://www.pngall.com/wp-content/uploads/8/SUV-Car-PNG-HD-Image.png"
              alt=""
            />
          </ItemCardImage>
          <ItemCardTitle>SUV</ItemCardTitle>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image
              src="https://www.pngkit.com/png/full/865-8651925_car-side-view-png.png"
              alt=""
            />
          </ItemCardImage>
          <ItemCardTitle>City</ItemCardTitle>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image
              src="https://pluspng.com/img-png/black-and-white-van-png-courier-van-png-transparent-image-2100.png"
              alt=""
            />
          </ItemCardImage>
          <ItemCardTitle>VAN</ItemCardTitle>
        </ItemCard>
      </Items>
    </Container>
  );
}

export default CarsTailored;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px 0;
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

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    place-items: center;
  }
`;

const ItemCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 240px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const ItemCardImage = styled.div`
  height: 80%;
  display: grid;
  place-items: center;
  background: #e5e5e5;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ItemCardTitle = styled.span`
  flex: 1;
  display: grid;
  place-items: center;
`;
