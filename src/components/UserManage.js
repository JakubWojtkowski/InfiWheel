import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

function UserManage() {
  return (
    <Container>
      <Main>
        <Header>
          <Avatar />
          <Heading>User Name</Heading>
        </Header>

        <Content>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
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
    width: 280px !important;
    height: 280px !important;
  }
`;

const Heading = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 24px;
  place-items: center;
`;

const Card = styled.div`
  background: red;
  border-radius: 12px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
