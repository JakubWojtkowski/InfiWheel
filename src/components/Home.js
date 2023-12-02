import React from "react";
import styled from "styled-components";
import Standards from "./Standards";
import Hero from "./Hero";
import CarsTailored from "./CarsTailored";
import DownloadApp from "./DownloadApp";
import Find from "./Find";
import About from "./About";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <About />
        <CarsTailored />
        <Standards />
        <Find />
        <DownloadApp />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 82px);
  position: relative;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 192px;
`;
