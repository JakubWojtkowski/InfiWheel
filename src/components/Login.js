import { Apple, FacebookSharp, Google } from "@mui/icons-material";
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
            <Input type="text" placeholder="Email" name="email"></Input>
            <Input
              type="password"
              placeholder="Password"
              name="password"
            ></Input>
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
              Don't have an account? <strong>Sign Up</strong>
            </OptionalText>
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
  grid-template-columns: 0.4fr 0.55fr;
  place-items: center;
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LoginImage = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Heading = styled.h2`
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
  width: 320px;
  background: #e5e5e5;
  border: none;
  border-bottom: 1px solid #202020;
  padding: 0 48px 16px 0;
  transition: padding 250ms ease-in-out;
  color: #202020;
  opacity: 0.55;

  &::placeholder {
    color: #202020;
  }

  &:focus {
    outline: none;
    padding: 0 48px 10px 0;
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
