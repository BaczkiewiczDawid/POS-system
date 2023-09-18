import React from "react";
import { Overlay, Modal, ListWrapper, ListItem } from "./Extensions.style";
import CloseBtn from "../CloseBtn/CloseBtn";
import categoryList from "../../data/categoryList.json";

const Extensions = () => {
  const extensionsList = categoryList.extensions;

  return (
    <>
      <Overlay />
      <Modal>
        <h2>Select extensions</h2>
        <ListWrapper>
          <ListItem>
            <h3>2 How wings</h3>
            <p>3.99</p>
          </ListItem>
          <ListItem>
            <h3>2 How wings</h3>
            <p>3.99</p>
          </ListItem>
          <ListItem>
            <h3>2 How wings</h3>
            <p>3.99</p>
          </ListItem>
          <ListItem>
            <h3>2 How wings</h3>
            <p>3.99</p>
          </ListItem>
        </ListWrapper>
      </Modal>
    </>
  );
};

export default Extensions;
