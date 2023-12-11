import { CallMade } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

function UserManage() {
  return (
    <Container>
      <Main>
        <Header>
          <Avatar
            src="https://www.businessinsider.de/wp-content/uploads/2019/06/elon-musk.jpg"
            alt="profile image"
          />
          <SubHeading>Type of user</SubHeading>
          <Heading>User Name</Heading>
        </Header>

        <Content>
          <Link to={"/reservations"}>
            <Card>
              Reservations <CallMade />{" "}
            </Card>
          </Link>

          <Link to={"/ads"}>
            <Card>
              Car ads <CallMade />{" "}
            </Card>
          </Link>

          <Link to={"/manage"}>
            <Card>
              {" "}
              Manage your account <CallMade />{" "}
            </Card>
          </Link>
        </Content>
      </Main>
    </Container>
  );
}

export default UserManage;

const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  color: #14213d;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  .MuiAvatar-root {
    width: 240px !important;
    height: 240px !important;
  }
`;

const SubHeading = styled.span`
  opacity: 0.75;
`;

const Heading = styled.h2``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 24px;
  place-items: center;

  @media only screen and (max-width: 840px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  width: 260px;
  min-width: 240px;
  background: #14213d;
  color: #f9f9f9;
  font-size: 1.25rem;
  height: 200px;
  border-radius: 80% 70% 62% 40% / 86% 62% 70% 45%;
  cursor: pointer;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in-out;

  &:nth-child(2) {
    border-radius: 40% 50% 32% 80% / 40% 42% 60% 70%;
  }

  &:nth-child(3) {
    border-radius: 50% 50% 60% 32% / 42% 55% 70% 60%;
  }

  .MuiSvgIcon-root {
    font-size: 22px;
    color: #f9f9f9 !important;,
  }

  &:hover {
    gap: 8px;
    font-size: 1.3rem;
  }
`;
