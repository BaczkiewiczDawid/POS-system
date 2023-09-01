import React from "react";
import { CategoryWrapper, Info } from './Category.style'

const Category = ({ id, name, quantity, icon }) => {
  return (
    <CategoryWrapper key={id}>
      <img src={icon} alt="Icon" />
      <Info>
        <h2>{name}</h2>
        <p>{quantity} Items</p>
      </Info>
    </CategoryWrapper>
  );
};

export default Category;
