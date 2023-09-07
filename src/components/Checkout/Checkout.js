import React, { useState, useEffect } from "react";
import { CheckoutWrapper, Cart, Row, Details } from "./Checkout.style";
import { useLocation } from "react-router-dom";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";
import Summary from "../Summary/Summary";
import CloseBtn from "../CloseBtn/CloseBtn";
import CartItem from "../CartItem/CartItem";

const Checkout = ({ cartItems }) => {
  const location = useLocation();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  let orderNumber = 42;
  let cashierName = "Dawid B";

  const setCheckoutState = () => {
    if (location.pathname === '/checkout') {
      setIsCheckoutOpen(true)
    } else {
      setIsCheckoutOpen(false);
    }
  }

  useEffect(() => {
    setCheckoutState()
  }, [location])

  return (
    <>
      <CheckoutWrapper open={isCheckoutOpen}>
        <h2>Order #{orderNumber}</h2>
        <p>{cashierName}.</p>
        <Cart>
          <CartItem cartItems={cartItems} />
        </Cart>
        <Summary />
        <CloseBtn />
      </CheckoutWrapper>
      <MobileNavigationBar />
    </>
  );
};

export default Checkout;
