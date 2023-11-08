import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <LoginForm>form</LoginForm>
          <LoginImage>
            <Image
              src="https://i.insider.com/60dd87bfcad1220011caf684?format=jpeg"
              alt="login"
            />
          </LoginImage>
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const Main = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const LoginForm = styled.form``;

const LoginImage = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
