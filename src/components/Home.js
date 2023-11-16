import React from "react";
import styled from "styled-components";
import Standards from "./Standards";
import Hero from "./Hero";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <Standards />
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
`;

// const Blob = styled.div`
//   border-radius: 71% 29% 63% 37% / 53% 30% 70% 47%;
//   width: 620px;
//   height: 640px;
//   background: #fca311;
//   position: absolute;
//   top: -72px;
//   right: 32px;
//   z-index: 0;

//   @media only screen and (max-wdith: 1200px) {
//     width: 620px;
//     height: 640px;
//   }
// `;
