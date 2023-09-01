import React from "react";
import icon from "../../assets/images/bookmark.svg";
import { Wrapper } from "./Categories.style";
import Category from "../Category/Category";
import categoryList from "../../data/categoryList.json";

const Categories = () => {
  return (
    <Wrapper>
      {categoryList.categories.map((item) => {
        return (
          <Category
            name={item.name}
            quantity={item.quantity}
            id={item.id}
            icon={icon}
          />
        );
      })}
    </Wrapper>
  );
};

export default Categories;
