import React from "react";
import {
  Wrapper,
  Title,
  DashedLine,
  PaymentMethods,
  SingleMethod,
  Icon,
  Button,
  Row
} from "./Summary.style.js";

const Summary = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Summary;
