import React from "react";
import styled from "styled-components";
import {
  FacebookSharp,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Item>
            <img src="../images/logo.png" alt="logo-footer" />
          </Item>
          <Item>
            <ItemHeading>Explore</ItemHeading>
            <ItemContent>Car fleet</ItemContent>
            <ItemContent>Why Us?</ItemContent>

            <ItemContent>Cars near you</ItemContent>
          </Item>
          <Item>
            <ItemHeading>Resources</ItemHeading>
            <ItemContent>Help center</ItemContent>
            <ItemContent>Pricing</ItemContent>
            <ItemContent>Contact</ItemContent>
            <ItemContent>Community</ItemContent>
          </Item>
          <Item>
            <ItemHeading>Company</ItemHeading>
            <ItemContent>Terms & Conditions</ItemContent>
            <ItemContent>Privacy</ItemContent>
          </Item>
        </Main>
        <Bottom>
          <Copyright>
            InfiWheel &copy; 2023.
            <br />
            All Rights Resserved
          </Copyright>
          <Socials>
            <FacebookSharp />
            <Instagram />
            <Twitter />
            <YouTube />
          </Socials>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #14213d;
  margin-top: 96px;
  border-radius: 64px 64px 0 0;
  color: #eeeeee;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  padding: 48px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;
  gap: 12px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    width: 128px;
    height: 128px;
  }
`;

const ItemHeading = styled.h3``;

const ItemContent = styled.a`
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Copyright = styled.span`
  opacity: 0.5;
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
