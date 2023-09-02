import React, { useState } from "react";
import {
  CheckoutWrapper,
  Cart,
  CartItem,
  Row,
  Details,
  Summary,
  Title,
  DashedLine,
  PaymentMethods,
  SingleMethod,
  Icon,
  Button
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
          <Summary>
            <div>
              <Row header>
                <Title>Subtotal</Title>
                <p>23.08</p>
              </Row>
              <Row header>
                <Title>Vat 23%</Title>
                <p>6.89</p>
              </Row>
              <DashedLine></DashedLine>
              <Row header>
                <Title primary>Subtotal</Title>
                <p>29.97</p>
              </Row>
            </div>
            <Title secondary>Payment Method</Title>
            <PaymentMethods>
              <SingleMethod>
                <Icon selected></Icon>
                <p>Debit Card</p>
              </SingleMethod>
              <SingleMethod>
                <Icon></Icon>
                <p>Cash</p>
              </SingleMethod>
              <SingleMethod>
                <Icon></Icon>
                <p>BLIK</p>
              </SingleMethod>
            </PaymentMethods>
            <Button>Checkout</Button>
          </Summary>
        </CheckoutWrapper>
      ) : null}
      <MobileNavigationBar />
    </>
  );
};

export default Checkout;
