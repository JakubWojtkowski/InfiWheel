import React from "react";
import styled from "styled-components";
import tailored1 from "../assets/images/tailored1.png";
import tailored2 from "../assets/images/tailored2.png";
import tailored3 from "../assets/images/tailored3.png";
import tailored4 from "../assets/images/tailored4.png";

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
            <Image src={tailored1} alt="" />
          </ItemCardImage>
          <ItemCardTitleCar>Electric</ItemCardTitleCar>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image src={tailored2} alt="" />
          </ItemCardImage>
          <ItemCardTitleCar>SUV</ItemCardTitleCar>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image src={tailored3} alt="" />
          </ItemCardImage>
          <ItemCardTitleCar>City</ItemCardTitleCar>
        </ItemCard>

        <ItemCard>
          <ItemCardImage>
            <Image src={tailored4} alt="" />
          </ItemCardImage>
          <ItemCardTitleCar>Minivan</ItemCardTitleCar>
        </ItemCard>
      </Items>

      <MiniHeading>Available in your city in Poland</MiniHeading>
      <Items>
        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://www.goodfreephotos.com/albums/poland/warsaw/lights-of-warsaw-at-dusk.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Warszawa</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://www.bialystok.pl/resource/image/192/334/3818/7927/0x0.jpgg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Bialystok</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://www.sundaypost.com/wp-content/uploads/sites/13/2018/03/iStock-580115446.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Kraków</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://tapety.tja.pl/obrazki/tja_normalne/202409.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Wroclaw</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://asp.katowice.pl/files/galleries/461/strefa_2.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Katowice</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://s.inyourpocket.com/gallery/szczecin/2021/03/waly%20chrobrego%20szczecin%20voivodeship%20office%20maritime%20akademia%20morska%20stettin%20szczecin%20poland.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Szczecin</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://cdn.generationvoyage.fr/2021/02/guide-poznan-1.jpg"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Poznań</ItemCardTitle>
        </ItemCardCity>

        <ItemCardCity>
          <ItemCardImage>
            <Image
              src="https://tse1.mm.bing.net/th?id=OIP.YnB3w5i0UCW1Pp_XZMpWtwHaE7&pid=Api"
              alt="city"
            />
          </ItemCardImage>
          <ItemCardTitle>Gdańsk</ItemCardTitle>
        </ItemCardCity>
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
  opacity: 0.75;
  font-size: clamp(1rem, 3.5vw, 1.15rem);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const MiniHeading = styled.h2`
  font-size: clamp(1rem, 5vw, 2rem);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;
  margin: 24px 0 36px 0;

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

const ItemCardCity = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 0.35fr;
  align-items: center;
  grid-gap: 12px;
  overflow: hidden;
`;

const ItemCardImage = styled.div`
  height: 80%;
  display: grid;
  place-items: center;
  background: #e5e5e5;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ItemCardTitle = styled.span`
  flex: 1;
  font-size: clamp(0.75rem, 2.5vw, 1rem);
  font-family: "Rubik";
`;

const ItemCardTitleCar = styled(ItemCardTitle)`
  display: grid;
  place-items: center;
  font-family: "Rubik";
`;
