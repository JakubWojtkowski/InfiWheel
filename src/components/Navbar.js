import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Menu>
          <Link to={"/"}>
            <MenuItem active>Home</MenuItem>
          </Link>
          <MenuItem>About</MenuItem>
          <MenuItem>Mission</MenuItem>
          <MenuItem>Process</MenuItem>
          <MenuBtn>Let's ride</MenuBtn>
        </Menu>
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 82px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  height: 82px;
  width: 60px;
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  flex: 1;
  gap: 24px;
  color: #14213d;

  a {
    text-decoration: none;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  color: ${(props) => (props.active ? "#fca311" : "#14213d")};

  &:hover {
    color: #fca311;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const MenuBtn = styled.a`
  background: #fca311;
  padding: 10px 20px;
  margin-left: 16px;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.25s;
  font-weight: bold;
  letter-spacing: 0.25px;

  &:hover {
    background: #202020;
    color: #fca311;
  }
`;
