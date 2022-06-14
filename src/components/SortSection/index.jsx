import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";

const SortWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.8rem 3rem;
  border-bottom: 1px solid #000006;
`;

const SortSection = ({ handleSortByDate, handleSortByName }) => {
  const [sortBtnToggle, setSortBtnToggle] = useState(true);
  return (
    <SortWrap>
      <Button
        variant={sortBtnToggle ? "contained" : "outlined"}
        bgcolor={sortBtnToggle ? "#000066" : "white"}
        name="Sort By Date"
        size="md"
        onClick={() => {
          handleSortByDate();
          setSortBtnToggle(true);
        }}
      />
      <Button
        variant={sortBtnToggle ? "outlined" : "contained"}
        bgcolor={!sortBtnToggle ? "#000066" : "white"}
        name="Sort By Name"
        size="md"
        onClick={() => {
          handleSortByName();
          setSortBtnToggle(false);
        }}
      />
    </SortWrap>
  );
};

export default SortSection;
