import React from "react";
import styled from "styled-components";
import Badge from "@mui/joy/Badge";
import { Typography } from "@mui/joy/";

const HeaderWrap = styled.div`
  width: 100%;
  height: 20%;
  background: #000055;
  padding: 3% 6%;
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const CardWrap = styled.div`
  color: white;
  padding-right: 0.3rem;
`;

const ListHeaderSection = ({ itemNum }) => {
  return (
    <HeaderWrap>
      <MainContent>
        <Title>
          <span>Shopping List</span>
        </Title>
        <CardWrap>
          <Badge badgeContent={itemNum} size="md" color="secondary">
            <Typography fontSize="2rem">🛍</Typography>
          </Badge>
        </CardWrap>
      </MainContent>
    </HeaderWrap>
  );
};

export default ListHeaderSection;
