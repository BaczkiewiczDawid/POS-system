import React from "react";
import Categories from "../Categories/Categories";
import { Wrapper } from './Home.style';
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";

const Home = () => {
  return (
    <>
      <Categories />
      <MobileNavigationBar />
    </>
  );
};

export default Home;
