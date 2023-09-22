import React, { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import { HomeWrapper } from "./Home.style";
import Navigation from "../Navigation/Navigation";
import Checkout from "../Checkout/Checkout";
import { ExtensionsProvider } from "../../context/ExtensionsContext";

const Home = () => {
  const [includedItems, setIncludedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartItems((prev) => [...prev, includedItems]);
    } else {
      setCartItems([includedItems]);
    }
  }, [includedItems]);

  return (
    <>
      <HomeWrapper>
        <Navigation />
        <Categories setIncludedItems={setIncludedItems} />
        <ExtensionsProvider>
          <Checkout cartItems={cartItems} />
        </ExtensionsProvider>
      </HomeWrapper>
    </>
  );
};

export default Home;
