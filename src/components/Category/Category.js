import React from "react";
import { CategoryWrapper, Info } from './Category.style'

const Category = ({ name, quantity, icon, setSelectedCategory }) => {
  const handleSetCategory = () => {
    setSelectedCategory(name)
  }

  return (
    <CategoryWrapper onClick={handleSetCategory}>
      <img src={icon} alt="Icon" />
      <Info>
        <h2>{name}</h2>
        <p></p>
      </Info>
    </CategoryWrapper>
  );
};

export default Category;
