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
          {extensionsList.map((item) => {
            return (
              <ListItem key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </ListItem>
            )
          })}
        </ListWrapper>
      </Modal>
    </>
  );
};

export default Extensions;
