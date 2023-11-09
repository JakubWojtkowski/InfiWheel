import React from "react";
import styled from "styled-components";
import Login from "./components/Login";

function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #e5e5e5;
  color: #202020;
`;
