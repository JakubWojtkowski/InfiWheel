import {
  Apple,
  FacebookSharp,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";
import { setUserSignIn } from "../features/user/userSlice";
import { BeatLoader } from "react-spinners";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibilityOff, setIsVisibilityOff] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const switchPassword = (e) => {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    setIsVisibilityOff(!isVisibilityOff);
  };

  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const signIn = async () => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        users.map((userDb) => {
          if (
            userDb.email === user.email &&
            userDb.password === user.password
          ) {
            dispatch(
              setUserSignIn({
                password: userDb.password,
                email: userDb.email,
                firstname: userDb.firstname,
                surname: userDb.surname,
              })
            );
            setTimeout(() => {
              setIsLoading(true);
              history.push("/");
            }, 1000);
          } else {
            setIsLoading(false);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  useEffect(() => {
    fetch("http://localhost:8080/User/all")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUsers(result);
      });
  }, []);

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
                name="email"
                value={user.email}
                onChange={handleOnChange}
                id="email"
                required
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleOnChange}
                required
              ></Input>

              {isVisibilityOff ? (
                <VisibilityOff onClick={switchPassword} />
              ) : (
                <Visibility onClick={switchPassword} />
              )}
            </LoginForm>
            <OptionalText password>Forgot Password?</OptionalText>
            <LoginBtn onClick={signIn}>
              {isLoading ? <BeatLoader size={10} color="#14213d" /> : "Login"}
            </LoginBtn>
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
              <Link to={"/register"}>
                <span>Register now</span>
              </Link>
            </OptionalText>
          </Form>

          <LoginImage>
            <Image src="../images/login.png" alt="login" />
          </LoginImage>
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 82px);
  color: #14213d;
`;

const Wrapper = styled.div`
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

const SubHeading = styled.span`
  margin-bottom: 24px;
  opacity: 0.85;
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

const LoginBtns = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 32px;
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
  transition: all 0.25s;

  .MuiSvgIcon-root {
    font-size: 24px !important;
  }

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

  &:nth-last-child(1) {
    opacity: 0.7;
  }
`;
