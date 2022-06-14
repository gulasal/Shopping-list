import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "../Button";
import styled from "styled-components";

const ListBottomSection = ({ handleInputChange }) => {
  let newItem = "";

  const handleChange = (item) => {
    newItem = item.target.value;
  };

  return (
    <InputWrap>
      <TextareaAutosize
        aria-label="empty textarea"
        className="input"
        placeholder="New Item..."
        minRows={3}
        onChange={(name) => handleChange(name)}
      />
      <Button
        variant="contained"
        size="lg"
        bgcolor="green"
        name="Add"
        onClick={(name) => handleInputChange(newItem)}
      />
    </InputWrap>
  );
};

// styles
const InputWrap = styled.div`
  padding: 3% 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .input {
    border-radius: 5px;
    width: 70%;
    padding: 3%;
    font-size: 1rem;
  }
`;

export default ListBottomSection;
