import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Mission</MenuItem>
          <MenuItem>Process</MenuItem>
        </Menu>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 82px;
  border: 1px solid red;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  border: 1px solid red;
`;

const Logo = styled.div``;

const Menu = styled.ul``;

const MenuItem = styled.li``;
