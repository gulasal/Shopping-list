import React from "react";
import styled from "styled-components";
import SortSection from "../SortSection";
import Item from "../Item";

const ListBodyWrap = styled.div`
  min-height: 20rem;
  width: 100%;

  & > h2 {
    color: grey;
    font-weight: 200;
    margin: 2rem;
    text-align: center;
  }
`;

const ListMainSection = ({
  items,
  handleDeleteClick,
  handleSortByDate,
  handleSortByName,
}) => {
  return (
    <ListBodyWrap>
      <SortSection
        handleSortByDate={handleSortByDate}
        handleSortByName={handleSortByName}
      />
      {items.length !== 0 ? (
        items.map((item) => (
          <Item
            name={item.name}
            key={item.id}
            handleDeleteClick={() => handleDeleteClick(item.id)}
          />
        ))
      ) : (
        <h2>No Item Added</h2>
      )}
    </ListBodyWrap>
  );
};

export default ListMainSection;
