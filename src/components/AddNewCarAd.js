import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function AddNewCarAd() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [newCar, setNewCar] = useState({
    id: 3,
    manufacturer: "",
    ac: "KLIMA",
    fuel_type: "",
    vin_number: "1GNEK13ZX3R298984",
    engine_capacity: "1900",
    model: "",
    number_of_doors: 0,
    number_of_seats: 0,
    power: 0,
    registration_number: "",
    subtype: "sedan",
    transmission: "",
    year_of_production: "",
  });

  const [newBooking, setNewBooking] = useState({
    car: newCar,
    user: { id: 6 },
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setNewCar({ ...newBooking });

    setNewBooking((prevState) => ({
      car: {
        ...prevState.car,
        [event.target.name]: event.target.value,
      },
      user: {},
      startDate: "",
      endDate: "",
    }));

    console.log(newBooking);
  };

  // making POST request
  const addBooking = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:8080/Car/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });

      const response = await fetch(`http://localhost:8080/bookings/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.description);
      } else {
        setTimeout(() => {
          history.push("/ads");
        }, 1000);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <h1>Create an ad</h1>
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="manufacturer"
          value={newCar.manufacturer}
          onChange={handleChange}
          required
        />

        <label for="name">Model:</label>
        <input
          type="text"
          placeholder="Model"
          name="model"
          value={newCar.model}
          onChange={handleChange}
          required
        />

        <label for="name">Fuel type:</label>
        <input
          type="text"
          placeholder="Fuel type"
          name="fuel_type"
          value={newCar.fuel_type}
          onChange={handleChange}
          required
        />

        <label for="name">Power:</label>
        <input
          type="number"
          min="0"
          max="1000"
          placeholder="Power"
          name="power"
          value={newCar.power}
          onChange={handleChange}
          required
        />

        <label for="name">Registration nr:</label>
        <input
          type="text"
          placeholder="Registration nr"
          name="registration_number"
          value={newCar.registration_number}
          onChange={handleChange}
          required
        />

        <label for="name">Transmission:</label>
        <input
          type="text"
          placeholder="Transmission"
          name="transmission"
          value={newCar.transmission}
          onChange={handleChange}
          required
        />

        <label for="Seats">Seats:</label>
        <select
          name="seats"
          value={newCar.seats}
          onChange={handleChange}
          required
        >
          <option value="2">2</option>
          <option value="5" selected="selected">
            5
          </option>
          <option value="7">7</option>
        </select>

        <ButtonForm onClick={() => addBooking()}>
          {isLoading ? <BeatLoader size={10} color="#14213d" /> : "Apply"}
        </ButtonForm>
      </Form>
    </Container>
  );
}

export default AddNewCarAd;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 24px auto;
  animation: ${fadeIn} 500ms ease-in-out;
`;

const Form = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
  gap: 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: #14213d;
  padding: 48px;
  color: #f9f9f9;
  animation: ${fadeIn} 250ms ease-in-out;

  .MuiSvgIcon-root {
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px;
    font-size: 36px !important;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: rotate(90deg);
    }
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    border: 1px solid #14213d;
    border-radius: 6px;
    padding: 12px;
    padding: 16px 48px 16px 32px;
    transition: all 250ms ease-in-out;
    width: 200px;
    opacity: 0.75;
    letter-spacing: 0.5px;

    &:focus {
      outline: none;
      padding-left: 24px;
      opacity: 1;
    }
  }

  button {
    margin-top: 48px;
  }
`;

const Informations = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 24px;

   {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonForm = styled.button`
  background: #fca311;
  color: #f9f9f9;
  padding: 16px 32px;
  border: 1px solid #14213d;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  width: 160px;

  &:hover {
    background: #f1c47b;
  }
`;
