import React from "react";
import Categories from "../Categories/Categories";
import ProductsList from "../ProductsList/ProductsList";
import { Wrapper } from './Home.style';

const Home = () => {
  return (
    <Wrapper>
      <Categories />
      <ProductsList />
    </Wrapper>
  );
};

export default Home;
