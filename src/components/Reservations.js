import React from "react";
import styled from "styled-components";

function Reservations() {
  return (
    <Container>
      <h1>Your reservations: </h1>
    </Container>
  );
}
// monitorowanie rezerwacji - status platnosci, data odbioru i zwrotu auta

export default Reservations;

const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  color: #14213d;
`;
