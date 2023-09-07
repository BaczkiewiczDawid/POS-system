import React from "react";
import { Wrapper, Heading, List, SingleItem } from "./Extensions.style";
import CloseBtn from "../CloseBtn/CloseBtn";
import categoryList from "../../data/categoryList.json";

const Extensions = () => {
  const extensionsList = categoryList.extensions;

  return (
    <Wrapper>
      <Heading>
        <h2>Select extensions</h2>
        <CloseBtn />
      </Heading>
      <List>
        {extensionsList.map((extension) => {
          return (
            <SingleItem key={extension.name}>
              <h3>{extension.name}</h3>
              <p>{extension.price}</p>
            </SingleItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

export default Extensions;
