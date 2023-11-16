import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
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
  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%),
    radial-gradient(
      91% 146%,
      rgba(255, 255, 255, 0.5) 47%,
      rgba(0, 0, 0, 0.5) 100%
    );
  background-blend-mode: screen;
  color: #202020;
`;
