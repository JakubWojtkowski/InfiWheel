import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./components/Offer";

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/offer">
            <Offer />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    344deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 240, 1) 65%,
    rgba(229, 229, 229, 1) 94%,
    rgba(241, 196, 123, 1) 100%
  );
  overflow: hidden;
  background-blend-mode: screen;
  color: #202020;
`;
