import React, { useState, useEffect } from "react";
import {
  CheckoutWrapper,
  Cart,
  Row,
  Details,
} from "./Checkout.style";
import { useLocation } from "react-router-dom";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";
import Summary from "../Summary/Summary";
import CloseBtn from "../CloseBtn/CloseBtn";
import CartItem from '../CartItem/CartItem';

const Checkout = ({ cartItems }) => {
  const location = useLocation();

  let orderNumber = 42;
  let cashierName = "Dawid B";

  return (
    <>
      {location.pathname === "/checkout" || window.screen.width > 767 ? (
        <CheckoutWrapper>
          <h2>Order #{orderNumber}</h2>
          <p>{cashierName}.</p>
          <Cart>
            {/* {cartItems.map((item) => {
              return (
                <CartItem>
                  <Row header>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </Row>
                  <Details>
                    {item?.items?.map((el) => {
                      return (
                        <Row>
                          <p>{el.quantity}</p>
                          <p>{el.name}</p>
                        </Row>
                      );
                    })}
                  </Details>
                </CartItem>
              );
            })} */}
            <CartItem cartItems={cartItems} />
          </Cart>
          <Summary />
          <CloseBtn />
        </CheckoutWrapper>
      ) : null}
      <MobileNavigationBar />
    </>
  );
};

export default Checkout;
