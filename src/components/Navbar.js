import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo2.png";
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
            <MenuItem active>
              Home
              <Dot />
            </MenuItem>
          </Link>
          <MenuItem>Offer</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Mission</MenuItem>
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
  width: 86px;
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
  z-index: 1;

  a {
    text-decoration: none;
    color: #14213d;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  position: relative;

  &:hover {
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  top: -4px;
  left: 40px;
  width: 8px;
  height: 8px;
  background: #fca311;
  border-radius: 50%;
`;

const MenuBtn = styled.a`
  background: #eeeeee;
  padding: 10px 20px;
  border: 1px solid #14213d;
  margin-left: 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s;
  font-weight: bold;
  letter-spacing: 0.25px;

  &:hover {
    background: #14213d;
    color: #e5e5e5;
  }
`;
