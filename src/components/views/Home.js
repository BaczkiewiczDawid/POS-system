import React from "react";
import Categories from "../Categories/Categories";
import { HomeWrapper } from "./Home.style";
import Navigation from "../Navigation/Navigation";
import Checkout from '../Checkout/Checkout';

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Navigation />
        <Categories />
        <Checkout />
      </HomeWrapper>

    </>
  );
};

export default Home;
