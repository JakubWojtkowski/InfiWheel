import React from "react";
import styled from "styled-components";

function DownloadApp() {
  return (
    <Container>
      <Heading>Book a car and be on your way</Heading>
      <SubHeading>
        Experience seamless convenience at your fingertips<br></br>—download our
        mobile app now from our website and unlock a world of possibilities!
      </SubHeading>

      <img
        src="https://images.ctfassets.net/ckse46n1g03h/5mPPTj9DgHWtqeATyT4yo8/837805d786ee04e3d1ccb7c1a8ef5c02/bolt-app-hero.png"
        loading="lazy"
        alt=""
      />

      <DownloadButton>Download the App</DownloadButton>
      <Links>
        <Text>
          Available for all <br></br>phones on <span>IOS</span> and
          <span> Android</span>
        </Text>
        <ButtonLink />
      </Links>
    </Container>
  );
}

export default DownloadApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    width: 55%;
  }

  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

const Heading = styled.h2`
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  text-align: center;
  line-height: 1.5;
`;

const SubHeading = styled.span`
  margin-bottom: 24px;
  line-height: 1.5;
  text-align: center;
  opacity: 0.75;
  font-size: clamp(1rem, 3.5vw, 1.15rem);
`;

const DownloadButton = styled.button`
  background: #fca311;
  padding: 16px 32px;
  border-radius: 16px;
  border: 1px solid #14213d;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  font-size: 1rem;

  &:hover {
    background: #f1c47b;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Text = styled.span`
  text-align: center;
  line-height: 1.5;

  span {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const ButtonLink = styled.div`
  width: 380px;
  height: 8vh;
  background: url("../images/download-app-store.png") center no-repeat;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 6vh;
  }
`;
