import React, { useState } from "react";
import {
  CheckoutWrapper,
  Cart,
  CartItem,
  Row,
  Details,
} from "./Checkout.style";
import { useLocation } from "react-router-dom";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";

const Checkout = () => {
  const location = useLocation();

  let orderNumber = 42;
  let cashierName = "Dawid B";

  return (
    <>
      {location.pathname === "/checkout" ? (
        <CheckoutWrapper>
          <h2>Order #{orderNumber}</h2>
          <p>{cashierName}.</p>
          <Cart>
            <CartItem>
              <Row header>
                <h3>B-Smart Longer</h3>
                <p>8.99</p>
              </Row>
              <Details>
                <Row>
                  <p>1</p>
                  <p>Longer</p>
                </Row>
                <Row>
                  <p>1</p>
                  <p>Frytki</p>
                </Row>
              </Details>
            </CartItem>
            <CartItem>
              <Row header>
                <h3>B-Smart Longer</h3>
                <p>8.99</p>
              </Row>
              <Details>
                <Row>
                  <p>1</p>
                  <p>Longer</p>
                </Row>
                <Row>
                  <p>1</p>
                  <p>Frytki</p>
                </Row>
              </Details>
            </CartItem>
          </Cart>
        </CheckoutWrapper>
      ) : null}
      <MobileNavigationBar />
    </>
  );
};

export default Checkout;
