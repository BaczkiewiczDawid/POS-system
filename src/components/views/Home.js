import React from "react";
import Categories from "../Categories/Categories";
import { Wrapper } from "./Home.style";
import Navigation from "../Navigation/Navigation";
import Checkout from '../Checkout/Checkout';

const Home = () => {
  return (
    <>
      <>
        <Navigation />
        <Categories />
        <Checkout />
      </>

    </>
  );
};

export default Home;
