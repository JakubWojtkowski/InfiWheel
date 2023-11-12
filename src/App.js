import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #e5e5e5;
  color: #202020;
`;
