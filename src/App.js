import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <Login />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #e5e5e5;
  color: #202020;
`;
