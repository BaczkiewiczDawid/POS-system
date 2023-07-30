import React from "react";
import Button from "../Button/Button";
import offer from "../../data/offer.json";
import { Title } from './ProductsList.style';

const ProductsList = () => {
  return (
    <div>
      <Title>B-Smart</Title>
      {offer.products.map((product) => {
        if (product.type === "bsmart") {
          return <Button text={product["display-name"]} />;
        }
      })}
    </div>
  );
};

export default ProductsList;
