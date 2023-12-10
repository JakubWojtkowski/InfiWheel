import { Avatar } from "@mui/material";
import React from "react";
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
          <Card>Reservations</Card>
          <Card>Car ads</Card>
          <Card>Manage your account</Card>
        </Content>
      </Main>
    </Container>
  );
}

export default UserManage;

const Container = styled.div`
  max-width: 1200px;
  margin: 24px auto;
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
`;

const Card = styled.div`
  border-radius: 12px;
  width: 300px;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  height: 200px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(33, 35, 38, 0.1) 4px 6px 6px -4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
