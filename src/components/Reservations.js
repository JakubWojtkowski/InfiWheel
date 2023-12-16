import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";

function Reservations() {
  const [reservations, setReservations] = useState([]);

  // cancel reservation
  const deleteReservation = (id) => {
    fetch(`http://localhost:8080/bookings/cancel/${id}`, { method: "PUT" })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // fetching all the reservations
  useEffect(() => {
    fetch("http://localhost:8080/bookings/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReservations(result);
      });
  }, []);

  return (
    <Container>
      <h1>Your reservations: </h1>
      <table>
        <tr>
          <th>Nr. of reservation</th>
          <th>Car</th>
          <th>Model</th>
          <th>Start date</th>
          <th>End date</th>
        </tr>
        {reservations?.map((reservation, index) => {
          return (
            <tr key={index}>
              <td>{reservation.id}</td>
              <td>{reservation.car.manufacturer}</td>
              <td>{reservation.car.model}</td>
              <td>
                <Moment format="YYYY/MM/DD">{reservation.startDate}</Moment>
              </td>
              <td>
                <Moment format="YYYY/MM/DD">{reservation.endDate}</Moment>
              </td>
              <Button onClick={() => deleteReservation(reservation.id)}>
                Cancel
              </Button>
            </tr>
          );
        })}
      </table>
    </Container>
  );
}
// monitorowanie rezerwacji - status platnosci, data odbioru i zwrotu auta

export default Reservations;

const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  color: #14213d;
  display: flex;
  flex-direction: column;
  gap: 24px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 24px;
  }
`;

const Button = styled.button`
  background: #ef233c;
  color: #f9f9f9;
  padding: 16px 32px;
  border: 1px solid transparent;
  border-color: ${(props) => (props.learn ? "#fff" : "transparent")};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  font-size: 1rem;
  margin-left: 24px;

  &:hover {
    opacity: 0.8;
  }
`;
