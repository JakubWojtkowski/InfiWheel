import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/user/userSlice";

function Offer() {
  const [cars, setCars] = useState([]);
  const user = useSelector(selectUser);
  const [reservation, setReservation] = useState();
  const [newBooking, setNewBooking] = useState({
    car: "",
    user: user,
    startDate: new Date().toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    endDate: new Date().toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  });

  const [display, setDisplay] = useState(false);
  const [date, setDate] = useState({
    min: new Date().toLocaleDateString("fr-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),

    max: "2024-01-30",
  });

  // handlers

  const handleClick = (id) => {
    setDisplay(true);
    getCar(id);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBooking((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // creating reservation

  const getCar = (id) => {
    fetch(`http://localhost:8080/Car/find/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setNewBooking({
          ...newBooking,
          car: result,
        });
        console.log(result);
      });
  };

  const createReservation = async (id) => {
    setDisplay(false);
    if (user.email === null) return;

    if (newBooking.car.manufacturer !== "") {
      try {
        const response = await fetch(`http://localhost:8080/bookings/add`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBooking),
        });

        console.log(response);

        const data = await response.json();
        if (!response.ok) {
          console.log(data.description);
        }
        setTimeout(() => {
          console.log(data);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/Car/all")
      .then((res) => res.json())
      .then((result) => {
        setCars(result);
      });
  }, []);

  console.log(newBooking);

  return (
    <Container>
      <Heading>Our Fleet</Heading>
      <Main>
        <Header>
          <Filter>Filter by:</Filter>
          <FilterCards>
            <FilterCard active>Manual</FilterCard>
            <FilterCard>Automatic</FilterCard>
            <FilterCard>SUV</FilterCard>
            <FilterCard>Electric</FilterCard>
            <FilterCard>City</FilterCard>
            <FilterCard>Minivan</FilterCard>
          </FilterCards>
        </Header>

        <Cars>
          {cars?.map((car, index) => {
            return (
              <CarCard key={index}>
                <Image>
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-white-fiat-500-carcarvehicletransportfiat-961524650065dsyyk.png"
                    alt=""
                  />
                </Image>
                <Content>
                  <Title>{car.manufacturer}</Title>
                  <Desc>
                    {car.number_of_seats} seats | {car.transmission} |{" "}
                    {car.fuel_type}
                  </Desc>
                </Content>

                {display && (
                  <>
                    <label for="start">Start date:</label>

                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      min={date.min}
                      max={date.max}
                      onChange={handleChange}
                    />

                    <label for="start">End date:</label>

                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      min={date.min}
                      max={date.max}
                      onChange={handleChange}
                    />
                  </>
                )}
                {display && (
                  <Button cancel onClick={() => setDisplay(false)}>
                    Cancel
                  </Button>
                )}

                <Button
                  onClick={() => {
                    display === false
                      ? handleClick(car.id)
                      : createReservation(car.id);
                  }}
                >
                  {display === false ? "Choose date" : "Reserve"}
                </Button>
              </CarCard>
            );
          })}
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
  min-height: 48px;
  display: flex;
  gap: 24px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Filter = styled.span`
  font-size: 1.15rem;
`;

const FilterCards = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FilterCard = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding: 2px 10px;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #fca311;
  }
`;

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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    box-shadow: rgba(27, 31, 35, 0.1) 0px 2px 3px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  }
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

const Content = styled.div`
  flex: 1;
  gap: 4px;
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

const Desc = styled.span`
  margin-top: 8px;
  opacity: 0.65;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  background: ${(props) => (props.cancel ? "" : "#fca311")};
  border: 1px solid #14213d;
  cursor: pointer;
  font-weight: bold;
  margin-top: 8px;
  transition: all 250ms ease-in-out;

  &:hover {
    border-radius: 24px;
  }
`;
