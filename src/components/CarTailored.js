import React from "react";
import styled from "styled-components";

function CarTailored({ image, name }) {
  return (
    <ItemCard>
      <ItemCardImage>
        <Image src={`../images/${image}`} alt="" />
      </ItemCardImage>
      <ItemCardTitleCar>{name}</ItemCardTitleCar>
    </ItemCard>
  );
}

export default CarTailored;

const ItemCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 240px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 5px 5px -5px;
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

const ItemCardTitleCar = styled.span`
  display: grid;
  place-items: center;
  flex: 1;
  font-family: "Rubik";
`;
