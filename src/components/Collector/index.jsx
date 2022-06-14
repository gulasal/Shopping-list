import React, { useState } from "react";
import Header from "../ListHeaderSection";
import ListMainSection from "../ListMainSection";
import Footer from "../ListBottomSection";
import styled from "styled-components";
import { data } from "./data";

const Collector = () => {
  const [items, setItems] = useState(data);

  // item deleter
  const handleDeleteClick = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // item adder
  const handleInputChange = (item) => {
    const date = new Date();
    item !== ""
      ? setItems([...items, { id: items.length, name: item, date: date }])
      : alert("white something in the input field");
  };

  // sort by name
  const handleSortByName = () => {
    let newItems = items.sort((a, b) => a.name.localeCompare(b.name));
    setItems([...newItems]);
  };

  // sort by date
  const handleSortByDate = () => {
    let itemsSortedByDate = items
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .reverse();
    setItems([...itemsSortedByDate]);
  };

  return (
    <CollectorWrap>
      <Header itemNum={items.length} />
      <ListMainSection
        items={items}
        handleDeleteClick={handleDeleteClick}
        handleSortByName={handleSortByName}
        handleSortByDate={handleSortByDate}
      />
      <Footer handleInputChange={handleInputChange} />
    </CollectorWrap>
  );
};

// styles
const CollectorWrap = styled.div`
  box-shadow: 14px 14px 28px #9d9d9d, -14px -14px 28px #ffffff;
  min-width: 25rem;
  min-height: 50vh;
  border-radius: 7px;
  overflow: hidden;
  color: #000066;
`;

export default Collector;
