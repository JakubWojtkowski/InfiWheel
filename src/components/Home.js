import React from "react";
import styled from "styled-components";
import Standards from "./Standards";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Standards />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 82px);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 48px auto;
  width: 90vw;
`;
