import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AddNewAd() {
  const user = useSelector(selectUser);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const [newBooking, setNewBooking] = useState({
    car: {},
    user: user,
    startDate: "",
    endDate: "",
  });

  // fetching new car by ID
  useEffect(() => {
    fetch(`http://localhost:8080/Car/find/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setNewBooking({
          ...newBooking,
          car: result,
        });
      });
  }, [id]);

  // making POST request
  const addBooking = async () => {
    setIsLoading(true);

    try {
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
          console.log("Dodano: ", data);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <h1>Booking creator</h1>
        <label for="name">User:</label>
        <input
          type="text"
          placeholder={user.firstname}
          name="user"
          readOnly
          required
        />

        <label for="name">Car:</label>
        <input
          type="text"
          placeholder={`${newBooking.car.manufacturer} ${newBooking.car.model}`}
          name="car"
          readOnly
          required
        />

        <ButtonForm onClick={() => addBooking()}>
          {isLoading ? <BeatLoader size={10} color="#14213d" /> : "Create Ad"}
        </ButtonForm>
      </Form>
    </Container>
  );
}

export default AddNewAd;

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
