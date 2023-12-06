import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src="../images/logo2.png" alt="logo" />
        </Logo>
        <Menu>
          <Link to={"/"}>
            <MenuItem active>
              Home
              <Dot />
            </MenuItem>
          </Link>

          <MenuItem>About</MenuItem>

          <Link to={"/offer"}>
            <MenuItem>Offer</MenuItem>
          </Link>

          <MenuItem>FAQ</MenuItem>

          <MenuBtns>
            <Link to={"/login"}>
              <LoginBtn>Sign In</LoginBtn>
            </Link>
            <MenuBtn>Let's ride</MenuBtn>
          </MenuBtns>

          <HamburgerMenu>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
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

const HamburgerMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;
  margin-left: 24px;

  div:nth-child(1) {
    width: 24px;
  }
  div:nth-child(3) {
    width: 16px;
  }

  &:hover {
    div:nth-child(1) {
      width: 16px;
    }

    div:nth-child(2) {
      width: 24px;
    }

    div:nth-child(3) {
      width: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 32px;
  background: #14213d;
  height: 4px;
  transition: all 250ms ease-in-out;
  border-radius: 4px;
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
  transition: all 0.25s ease-in-out;

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    gap: 0px;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  position: relative;
  color: #14213d;

  &:hover {
    color: #fca311;
    p:nth-child(1) {
      width: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
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

const MenuBtns = styled.div`
  margin-left: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LoginBtn = styled(MenuItem)`
  color: #fca311;
`;

const MenuBtn = styled.a`
  background: #eeeeee;
  padding: 10px 20px;
  border: 1px solid #14213d;
  max-width: 140px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s;
  font-weight: bold;
  letter-spacing: 0.25px;

  &:hover {
    background: #14213d;
    color: #fff;
  }
`;
