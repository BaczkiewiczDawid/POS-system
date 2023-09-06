import React from "react";
import { CategoryWrapper, Info } from "./Category.style";

const Category = ({
  name,
  price,
  extendable,
  icon,
  setSelectedCategory,
  primary,
  include,
  setIncludedItems,
}) => {
  const handleSetCategory = () => {
    if (primary) {
      setSelectedCategory(name);
    } else {
      setIncludedItems({
        name,
        price,
        extendable,
        items: include,
      });
    }
  };

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
