import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import { Link } from "react-router-dom/cjs/react-router-dom";

function UserCarAds() {
  // const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  const removeCarAd = (id) => {
    console.log(id);
  };

  // fetching all the reservations
  useEffect(() => {
    fetch("http://localhost:8080/bookings/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBookings(result);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Main>
          <Heading>Your car ads: {bookings.length}</Heading>
          <Link to={"/ads/Car/add"}>
            <ButtonAdd>Create new</ButtonAdd>
          </Link>
          <Cards>
            {bookings &&
              bookings.map((booking, index) => {
                return (
                  <Card key={index}>
                    <CardContent>
                      <ImageContent>
                        <Image
                          src="https://www.carscoops.com/wp-content/uploads/2019/07/1062bf0c-bmw-e46-m3-.jpg"
                          alt="car"
                        />
                      </ImageContent>

                      <TextContent>
                        <Text>
                          <h3>Nr. {booking.id}</h3>
                          <span>
                            Name:{" "}
                            <b>
                              {booking.car.manufacturer} {booking.car.model}
                            </b>
                          </span>
                          <span>Type: {booking.car.transmission}</span>
                          <span>Seats: {booking.car.number_of_seats}</span>
                          <span>
                            Date:{" "}
                            <Moment format="YYYY/MM/DD">
                              {booking.startDate}
                            </Moment>
                          </span>
                          <span>Views: 157</span>
                        </Text>
                        <Buttons>
                          <Link to={`ads/edit/${booking.id}`}>
                            <Button>Edit</Button>
                          </Link>
                          <Button
                            onClick={() => removeCarAd(booking.id)}
                            remove
                          >
                            Remove
                          </Button>
                        </Buttons>
                      </TextContent>
                    </CardContent>
                    <Number>
                      {booking.id < 10 ? "0" + booking.id : booking.id}
                    </Number>
                  </Card>
                );
              })}
          </Cards>
        </Main>
      </Wrapper>
    </Container>
  );
}
// dodaj nowe ogloszenie, zarzadzaj dostepnymi ogloszeniami
export default UserCarAds;

const Container = styled.div`
  min-height: 100vh;
  margin: 24px auto;
  color: #14213d;
  position: relative;
`;

const Wrapper = styled.div``;

const Main = styled.div`
  display: grid;
  place-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 24px;
`;

const ButtonAdd = styled.button`
  margin-bottom: 64px;
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
