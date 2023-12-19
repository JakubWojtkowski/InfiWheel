import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./components/Offer";
import Register from "./components/Register";
import UserManage from "./components/UserManage";
import Reservations from "./components/Reservations";
import UserCarAds from "./components/UserCarAds";
import EditBookingForm from "./components/EditBookingForm";
import AddNewCarAd from "./components/AddNewCarAd";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import AddNewAd from "./components/AddNewAd";

function App() {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/user">
            {user.email !== null ? <UserManage /> : <Login />}
          </Route>

          <Route path="/reservations">
            {user.email !== null ? <Reservations /> : <Login />}
          </Route>

          <Route path="/ads/edit/:id">
            {user.email !== null ? <EditBookingForm /> : <Login />}
          </Route>

          <Route path="/ads/Car/add">
            {user.email !== null ? <AddNewCarAd /> : <Login />}
          </Route>

          <Route path="/ads/:id/Booking/add">
            {user.email !== null ? <AddNewAd /> : <Login />}
          </Route>

          <Route path="/ads">
            {user.email !== null ? <UserCarAds /> : <Login />}
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
