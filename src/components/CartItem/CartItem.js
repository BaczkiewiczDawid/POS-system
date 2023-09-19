import React, { useState } from "react";
import { CartItemWrapper, Row, Details } from "./CartItem.style.js";
import extensionsListData from "../../data/categoryList.json";
import Extensions from '../Extensions/Extensions';

const CartItem = ({ cartItems }) => {
  const extensionsList = extensionsListData.extensions;
    const [isExtensionsListOpen, setIsExtensionsListOpen] = useState(true);

  const openExtensionsList = () => {
    setIsExtensionsListOpen(true);
  };

  return (
    <>
      {cartItems.map((item) => {
        return (
          <CartItemWrapper onClick={openExtensionsList}>
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
          </CartItemWrapper>
        );
      })}
      {isExtensionsListOpen && <Extensions setIsExtensionsListOpen={setIsExtensionsListOpen} />}
    </>
  );
};

export default CartItem;
