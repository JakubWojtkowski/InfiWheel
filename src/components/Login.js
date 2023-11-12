import {
  Apple,
  FacebookSharp,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import login from "../assets/images/login.png";

function Login() {
  const [isVisibilityOff, setIsVisibilityOff] = useState(true);

  const switchPassword = (e) => {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";

    password.setAttribute("type", type);

    setIsVisibilityOff(!isVisibilityOff);
  };

  return (
    <Container>
      <Wrapper>
        <Main>
          <Form>
            <LoginForm>
              <Heading>Welcome back!</Heading>
              <SubHeading>Please enter your details</SubHeading>
              <Input
                type="text"
                placeholder="Email"
                id="email"
                required
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                required
              ></Input>

              {isVisibilityOff ? (
                <VisibilityOff onClick={switchPassword} />
              ) : (
                <Visibility onClick={switchPassword} />
              )}
            </LoginForm>
            <OptionalText password>Forgot Password?</OptionalText>
            <LoginBtn>Login</LoginBtn>
            <OptionalText>or continue with</OptionalText>
            <LoginBtns>
              <SecondaryLoginBtn>
                <Google />
              </SecondaryLoginBtn>
              <SecondaryLoginBtn>
                <Apple />
              </SecondaryLoginBtn>
              <SecondaryLoginBtn>
                <FacebookSharp />
              </SecondaryLoginBtn>
            </LoginBtns>
            <OptionalText>
              Don't have an account?{" "}
              <span style={{ color: "#fca311", fontWeight: "bold" }}>
                Register now
              </span>
            </OptionalText>
          </Form>

          <LoginImage>
            <Image src={login} alt="login" />
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
  grid-template-columns: 0.4fr 0.55fr;
  place-items: center;
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const LoginImage = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1px;
  text-align: center;
`;

const SubHeading = styled.span`
  text-align: center;
  margin-bottom: 24px;
  opacity: 0.85;
`;

const Input = styled.input`
  font-size: 1rem;
  max-width: 320px;
  background: #e5e5e5;
  border: none;
  border: 1px solid #202020;
  border-radius: 32px;
  padding: 16px 48px 16px 32px;
  transition: all 250ms ease-in-out;
  color: #202020;
  opacity: 0.6;

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
  border: none;
  border-radius: 32px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: #202020;
`;

const LoginBtns = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 48px;
`;

const SecondaryLoginBtn = styled.button`
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  background: #fca311;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #202020;

  .MuiSvgIcon-root {
    font-size: 24px !important;
  }
`;

const OptionalText = styled.span`
  font-size: 0.8rem;
  cursor: pointer;
  text-align: ${(props) => (props.password ? "right" : "center")};
`;
