import React from "react";
import { Wrapper, OrderSummary, ListWrapper, ListItem } from "./Summary.style";

const Summary = () => {
  return (
    <Wrapper>
      <OrderSummary>
        <ListWrapper>
          <ListItem>
            <h2>B-Smart Longer</h2>
            <p>8.99</p>
          </ListItem>
          <div>
            <ListItem>
              <p>1</p>
              <p>Longer</p>
            </ListItem>
            <ListItem>
              <p>1</p>
              <p>Frytki</p>
            </ListItem>
          </div>
        </ListWrapper>
      </OrderSummary>
      <div></div>
    </Wrapper>
  );
};

export default Summary;
