import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <LoginForm>
            <Heading>Welcome back!</Heading>
            <SubHeading>Please enter your details</SubHeading>
            <Input type="text" placeholder="Email"></Input>
            <Input type="password" placeholder="Password"></Input>
            <PasswdForgot>Forgot Password?</PasswdForgot>

            <LoginBtn>Log In</LoginBtn>
            <Register>
              Don't have an account? <strong>Sign Up</strong>
            </Register>
          </LoginForm>
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
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  place-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LoginImage = styled.div`
  flex: 0.75;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 1px;
`;

const SubHeading = styled.span`
  text-align: center;
  margin-bottom: 24px;
  opacity: 0.85;
`;

const Input = styled.input`
  font-size: 1rem;
  background: #e5e5e5;
  border: none;
  border-bottom: 1px solid #202020;
  padding: 0 48px 16px 0;
  transition: all 250ms ease-in-out;
  color: #202020;

  &::placeholder {
    color: #202020;
  }

  &:focus {
    outline: none;
    padding: 0 48px 10px 0;
    border-bottom: 1px solid #202020;
  }
`;

const LoginBtn = styled.button`
  background: #fca311;
  cursor: pointer;
  padding: 16px 32px;
  border: none;
  border-radius: 32px;
  margin-bottom: 48px;
`;

const PasswdForgot = styled.span`
  font-size: 0.85rem;
  opacity: 0.65;
  cursor: pointer;
  text-align: right;
  margin-bottom: 24px;
`;

const Register = styled.span`
  font-size: 0.85rem;
  text-align: center;
`;
