import React from "react";
import Button from "../Button/Button";
import offer from "../../data/offer.json";
import { Title, ProductsWrapper } from "./ProductsList.style";

const ProductsList = () => {
  return (
    <div>
      <Title>B-Smart</Title>
      <ProductsWrapper>
        {offer.products.map((product) => {
          if (product.type === "bsmart") {
            return <Button text={product["display-name"]} />;
          }
        })}
      </ProductsWrapper>
    </div>
  );
};

export default ProductsList;
