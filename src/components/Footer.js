import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>footer</Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 164px;
  border: 1px solid red;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
`;
