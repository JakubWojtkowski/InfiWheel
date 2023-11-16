import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <Container>
      <Main>
        <Text>
          <SubHeading>Find Your Perfect Rental with Us</SubHeading>
          <Heading>
            <span>Freedom </span>
            on Four Wheels
          </Heading>
          <Description>
            Start your adventure with our exceptional rental options. Whether
            it's a weekend getaway or a cross-country expedition, we have the
            ideal vehicle to elevate your travel experience.
          </Description>

          <Buttons>
            <Button>Book a car</Button>
            <Button>See our offer </Button>
          </Buttons>
        </Text>
        <ImageContent>
          <Blob />
          <Image src={HeroImage} alt="hero" />
        </ImageContent>
      </Main>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  min-height: calc(100vh - 82px);
  position: relative;
  padding: 48px 0;
  color: #14213d;
  display: grid;
  place-items: center;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 0.45fr;
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const ImageContent = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Blob = styled.div`
  border-radius: 71% 29% 63% 37% / 53% 30% 70% 47%;
  width: 540px;
  height: 620px;
  background: #fca311;
  position: absolute;
  top: -220px;
  right: -60px;
  margin: 24px;
  z-index: 0;

  @media only screen and (max-width: 1200px) {
    width: 380px;
    height: 440px;
    top: -40px;
    right: -40px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;

  @media only screen and (max-width: 1000px) {
    width: 40vw;
  }
`;

const Heading = styled.h1`
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  z-index: 1;
  font-weight: 900;

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 92%;
      left: 3.5px;
      z-index: -1;
      bottom: 8px;
      height: 12px;
      border-radius: 0px 0px 24px 0px;
      background: rgb(20, 33, 61);
      background: linear-gradient(
        90deg,
        rgba(20, 33, 61, 1) 0%,
        rgba(241, 196, 123, 1) 0%,
        rgba(252, 163, 17, 0.9472163865546218) 100%
      );

      @media only screen and (max-width: 768px) {
        height: 8px;
        bottom: 4px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SubHeading = styled.h3`
  opacity: 0.65;
  font-size: clamp(0.75rem, 3.5vw, 1.25rem);
`;

const Description = styled.span`
  line-height: 2;
  z-index: 12;
  margin-top: 24px;
  font-size: clamp(0.75rem, 5vw, 1.25rem);

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 72px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  background: #fca311;
  padding: 16px 32px;
  border: 1px solid transparent;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  width: 180px;
  font-size: 1rem;

  &:nth-child(1):hover {
    background: #f1c47b;
  }

  &:nth-child(2) {
    background: #eeeeee;
    color: #14213d;
    border-color: #14213d;

    &:hover {
      background: #14213d;
      color: #fff;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 130px;
    font-size: 0.75rem;
    padding: 12px 24px;
  }
`;
