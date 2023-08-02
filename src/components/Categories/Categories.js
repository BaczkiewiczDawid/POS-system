import React from "react";
import { CategoriesWrapper } from "./Categories.style";
import Button from "../Button/Button";
import offer from "../../data/offer.json";

const Categories = () => {
  return (
    <CategoriesWrapper>
      {offer.categories.map((category) => (
        <Button key={category.name} text={category} />
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
