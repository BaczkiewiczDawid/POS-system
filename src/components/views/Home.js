import React, { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import { HomeWrapper } from "./Home.style";
import Navigation from "../Navigation/Navigation";
import Checkout from "../Checkout/Checkout";

const Home = () => {
  const [includedItems, setIncludedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartItems((prev) => [...prev, includedItems]);
    } else {
      setCartItems([includedItems])
    }
  }, [includedItems]);

  return (
    <>
      <HomeWrapper>
        <Navigation />
        <Categories setIncludedItems={setIncludedItems} />
        <Checkout cartItems={cartItems} />
      </HomeWrapper>
    </>
  );
};

export default Home;
