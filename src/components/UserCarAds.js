import React from "react";
import styled from "styled-components";

function UserCarAds() {
  const edit = () => {
    alert("Not implemented yet");
  };

  return (
    <Container>
      <Main>
        <Heading>Your car ads: 1</Heading>
        <ButtonAdd>Create new</ButtonAdd>
        <Cards>
          <Card>
            <CardContent>
              <ImageContent>
                <Image
                  src="https://www.carscoops.com/wp-content/uploads/2019/07/1062bf0c-bmw-e46-m3-.jpg"
                  alt="car"
                />
              </ImageContent>

              <TextContent>
                <Text>
                  <h3>Nr. 88124</h3>
                  <span>Name: Bmw e46</span>
                  <span>Type: Manual</span>
                  <span>Date: 23.10.2023</span>
                  <span>Views: 157</span>
                </Text>
                <Buttons>
                  <Button onClick={edit}>Edit</Button>
                  <Button remove>Remove</Button>
                </Buttons>
              </TextContent>
            </CardContent>
            <Number>01</Number>
          </Card>

          <Card>
            <CardContent>
              <ImageContent>
                <Image
                  src="https://www.presiondeneumaticos.com/wp-content/uploads/2020/09/Volkswagen-Golf-6-scaled.jpg"
                  alt="car"
                />
              </ImageContent>

              <TextContent>
                <Text>
                  <h3>Nr. 88617</h3>
                  <span>Name: Volkswagen golf 6</span>
                  <span>Type: Manual</span>
                  <span>Date: 29.10.2023</span>
                  <span>Views: 92</span>
                </Text>
                <Buttons>
                  <Button onClick={edit}>Edit</Button>
                  <Button remove>Remove</Button>
                </Buttons>
              </TextContent>
            </CardContent>
            <Number>02</Number>
          </Card>
        </Cards>
      </Main>

      <Form action="">
        <label for="email">
          <b>Name: </b>
        </label>
        <input type="text" placeholder="Name" name="name" required />

        <label for="psw">
          <b>Type: </b>
        </label>
        <input type="text" placeholder="Type" name="type" required />

        <Button>Apply</Button>
      </Form>
    </Container>
  );
}
// dodaj nowe ogloszenie, zarzadzaj dostepnymi ogloszeniami
export default UserCarAds;

const Container = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 24px auto;
  color: #14213d;
`;

const Main = styled.div`
  display: grid;
  place-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 24px;
`;

const ButtonAdd = styled.button`
  margin-bottom: 48px;
  background: #fca311;
  padding: 16px 32px;
  border: 1px solid #14213d;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  width: 180px;
  font-size: 1rem;

  &:hover {
    background: #f1c47b;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled.div`
  width: 70vw;
  height: 45vh;

  background: #f9f9f9;
  flex: 1;
  display: flex;
  border-radius: 12px;
  position: relative;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.5) 0px 1px 0px inset;
`;

const CardContent = styled.div`
  padding: 32px;
  z-index: 0;
  display: flex;
  gap: 24px;
  flex: 1;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImageContent = styled.div`
  flex: 0.65;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
`;

const TextContent = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  flex: 1;
  background: ${(props) => (props.remove ? "#ef233c" : "#14213d")};
  color: #f9f9f9;
  padding: 16px 32px;
  border: 1px solid #14213d;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;

  &:hover {
    opacity: 0.8;
  }
`;

const Number = styled.span`
  position: absolute;
  opacity: 0.75;
  letter-spacing: -1px;
  bottom: 0;
  margin: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  gap: 12px;
  border: 1px solid red;

  button {
    margin-top: 24px;
  }
`;
