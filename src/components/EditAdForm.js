import { Close } from "@mui/icons-material";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function EditAdForm(props) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopUp = () => {
    isOpen && (document.body.style.overflowY = "");
    setIsOpen(false);
    props.showPopUp();
  };

  return (
    <Container>
      {isOpen && (
        <Form action="">
          <label for="name">Name:</label>
          <input type="text" placeholder="Name" name="name" required />

          <label for="type">Type:</label>
          <input type="text" placeholder="Type" name="type" required />

          <ButtonForm>Apply</ButtonForm>
          <Close onClick={() => closePopUp()} />
        </Form>
      )}
    </Container>
  );
}

export default EditAdForm;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 98;
  animation: ${fadeIn} 250ms ease-in-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 50vh;
  margin: auto;
  gap: 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: #14213d;
  padding: 48px;
  color: #f9f9f9;
  animation: ${fadeIn} 250ms ease-in-out;

  .MuiSvgIcon-root {
    position: absolute;
    top: 0;
    right: 0;
    margin: 12px;
    font-size: 36px !important;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: rotate(90deg);
    }
  }

  label {
    font-weight: bold;
  }

  input {
    border: 1px solid #14213d;
    border-radius: 6px;
    padding: 12px;
    padding: 16px 48px 16px 32px;
    transition: all 250ms ease-in-out;
    width: 200px;
    opacity: 0.75;
    letter-spacing: 0.5px;

    &:focus {
      outline: none;
      padding-left: 24px;
      opacity: 1;
    }
  }

  button {
    margin-top: 48px;
  }
`;

const ButtonForm = styled.button`
  background: #fca311;
  color: #f9f9f9;
  padding: 16px 32px;
  border: 1px solid #14213d;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  width: 160px;

  &:hover {
    background: #f1c47b;
  }
`;
