import React from "react";
import styled from "styled-components";

function Find() {
  return (
    <Container>
      <BigHeading>
        Start renting <br></br>a car today
      </BigHeading>
      <Description>
        Maximize the potential of your vehicle - start renting a car today! Join
        our community of car owners offering their rides for rent. Turn your car
        into income and provide a convenient solution for fellow travelers.
      </Description>
      <Buttons>
        <Button>Get started now</Button>
        <Button learn>Learn about renting</Button>
      </Buttons>
    </Container>
  );
}

export default Find;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const BigHeading = styled.h2`
  text-align: center;
  font-size: clamp(3rem, 5vw, 5vw);
  letter-spacing: -1px;
`;

const Description = styled.span`
  text-align: center;
  width: 50%;
  line-height: 2;
  font-size: clamp(0.75rem, 5vw, 1.25rem);

  @media only screen and (max-width: 1024px) {
    width: 75%;
  }

  @media only screen and (max-width: 425px) {
    width: 95%;
  }
`;

const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  background: ${(props) => (props.learn ? "#fff" : "#fca311")};
  padding: 16px 32px;
  border-radius: 16px;
  border: 1px solid #14213d;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  font-size: 1rem;
  transition: all 250ms ease-in-out;
`;
