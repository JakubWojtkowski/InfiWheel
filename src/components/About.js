import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Heading>About</Heading>
      <Main>
        <MainLeft></MainLeft>
        <MainRight></MainRight>
      </Main>
    </Container>
  );
}

export default About;

const Container = styled.div`
  color: #14213d;
`;

const Heading = styled.h2`
  font-size: clamp(3rem, 5vw, 5vw);
  letter-spacing: -1px;
  text-align: right;
`;

const Main = styled.div`
  display: flex;
  gap: 4px;
`;

const MainLeft = styled.div`
  height: 200px;
  width: 100%;
`;

const MainRight = styled(MainLeft)``;
