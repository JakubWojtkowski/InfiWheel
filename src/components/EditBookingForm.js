import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function EditBookingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [editBooking, setEditBooking] = useState({});

  const handleChange = (event) => {
    setEditBooking({ ...editBooking, [event.target.name]: event.target.value });
    console.log(editBooking);
  };

  const updateBooking = async () => {
    console.log("ok: ", editBooking);

    try {
      const response = await fetch(
        `http://localhost:8080/bookings/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data.description);
      }

      setTimeout(() => {
        console.log(data);
        history.push("/ads");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/bookings/")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setEditBooking(result);
      });
  }, []);

  return (
    <Container>
      <Form>
        <h1>Nr. {id}</h1>
        <label for="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={editBooking.name}
          onChange={handleChange}
          required
        />

        <label for="name">Model:</label>
        <input
          type="text"
          placeholder="Model"
          name="model"
          value={editBooking.model}
          onChange={handleChange}
          required
        />

        <label for="type">Type:</label>

        <select
          name="type"
          value={editBooking.type}
          onChange={handleChange}
          required
        >
          <option selected="selected" value="Manual">
            Manual
          </option>
          <option value="Automatic">Automatic</option>
        </select>

        <label for="Seats">Seats:</label>
        <select
          name="seats"
          value={editBooking.seats}
          onChange={handleChange}
          required
        >
          <option value="2">2</option>
          <option value="5" selected="selected">
            5
          </option>
          <option value="7">7</option>
        </select>
        <ButtonForm onClick={() => updateBooking()}>
          {isLoading ? <BeatLoader size={10} color="#14213d" /> : "Apply"}
        </ButtonForm>
      </Form>
    </Container>
  );
}

export default EditBookingForm;

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
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
