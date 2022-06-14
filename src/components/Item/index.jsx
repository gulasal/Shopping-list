import React from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ItemWrap = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #000066;
`;

const ItemBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemName = styled.div``;

const Item = ({ name, id, handleDeleteClick }) => {
  return (
    <ItemWrap>
      <ItemBody>
        <ItemName key={id}>{name}</ItemName>
        <DeleteForeverIcon
          onClick={() => handleDeleteClick(id)}
          style={{ color: "#FF0000", cursor: "pointer" }}
        />
      </ItemBody>
    </ItemWrap>
  );
};

export default Item;
