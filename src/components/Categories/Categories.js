import React, { useState } from "react";
import icon from "../../assets/images/bookmark.svg";
import { Wrapper, ItemsWrapper } from "./Categories.style";
import Category from "../Category/Category";
import categoryList from "../../data/categoryList.json";

const Categories = ({ setIncludedItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const allCategories = categoryList.categories.map((el) => el);

  const findCategoryDetails = (category) => {
    return category.name === selectedCategory;
  };

  const itemsList = allCategories.find(findCategoryDetails);

  return (
    <Wrapper>
      <ItemsWrapper>
        {allCategories.map((item) => {
          return (
            <Category
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              id={item.id}
              icon={icon}
              primary={true}
              setSelectedCategory={setSelectedCategory}
            />
          );
        })}
      </ItemsWrapper>
      <h1>Items</h1>
      <ItemsWrapper>
        {itemsList?.items?.map((item) => {
          return <Category key={item.name} name={item.name} icon={icon} price={item.price} extendable={item.extendable} include={item.include} setIncludedItems={setIncludedItems} />;
        })}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Categories;
