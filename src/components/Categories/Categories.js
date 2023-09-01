import React from "react";
import icon from "../../assets/images/bookmark.svg";
import { Wrapper } from "./Categories.style";
import Category from "../Category/Category";

const CategoryList = [
  {
    id: 1,
    name: "Buckets",
    quantity: 12,
  },
  {
    id: 2,
    name: "Addons",
    quantity: 24,
  },
  {
    id: 3,
    name: "Burgers",
    quantity: 18,
  },
  {
    id: 4,
    name: "Chicken",
    quantity: 4,
  },
];

const Categories = () => {
  return (
    <Wrapper>
      {CategoryList.map((item) => {
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
