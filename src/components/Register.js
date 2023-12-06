import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

function Register() {
  return (
    <Container>
      <Main>
        <Form>
          <LoginForm>
            <Heading>Create an account</Heading>
            <Input type="text" placeholder="Name" id="name" required></Input>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone number (eg. 123456789)"
              pattern="[0-9]{9}"
              required
            ></Input>
            <Input type="text" placeholder="Email" id="email" required></Input>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              required
            ></Input>
          </LoginForm>
          <LoginBtn>Create an account</LoginBtn>

          <OptionalText>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span>Log In</span>
            </Link>
          </OptionalText>
        </Form>

        <LoginImage>
          <Image src="../images/login.png" alt="login" />
        </LoginImage>
      </Main>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  max-width: 1200px;
  margin: 48px auto;
  width: 90vw;
`;

const Main = styled.div`
  display: flex;
  gap: 24px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 0.35;

  a {
    text-decoration: none;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  .MuiSvgIcon-root {
    cursor: pointer;
    position: absolute;
    bottom: 12px;
    right: 16px;
    opacity: 0.6;
    transition: opacity 250ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

const LoginImage = styled.div`
  flex: 0.65;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  font-size: 3rem;
  letter-spacing: -1px;
`;

const Input = styled.input`
  font-size: 1rem;
  background: transparent;
  border: none;
  border: 2px solid #202020;
  border-radius: 32px;
  padding: 16px 48px 16px 32px;
  transition: all 250ms ease-in-out;
  color: #14213d;
  opacity: 0.5;

  &::placeholder {
    color: #202020;
  }

  &:focus {
    outline: none;
    padding-left: 24px;
    opacity: 1;
  }
`;

const LoginBtn = styled.button`
  background: #fca311;
  cursor: pointer;
  padding: 16px 32px;
  border: 1px solid transparent;
  border-radius: 16px;
  font-weight: bold;
  letter-spacing: 0.25px;
  font-weight: bold;
  transition: all 0.25s;
  color: #14213d;

  &:hover {
    background: #f1c47b;
  }
`;

const OptionalText = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
  text-align: ${(props) => (props.password ? "right" : "center")};

  a {
    color: #14213d;
  }

  span {
    text-decoration: underline;
  }

  &:nth-last-child(1) {
    opacity: 0.7;
  }
`;
