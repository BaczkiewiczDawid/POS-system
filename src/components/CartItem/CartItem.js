import React, { useState } from "react";
import { CartItemWrapper, Row, Details } from "./CartItem.style.js";
import extensionsListData from "../../data/categoryList.json";
import Extensions from "../Extensions/Extensions";
import { useExtensions } from "../../context/ExtensionsContext.js";

const CartItem = ({ cartItems }) => {
  const { selectedExtensions } = useExtensions();

  const [isExtensionsListOpen, setIsExtensionsListOpen] = useState(false);

  const openExtensionsList = () => {
    setIsExtensionsListOpen(true);
  };

  return (
    <>
      <CartItemWrapper>
        <Details>
          <Row header>
            <h3>Extensions</h3>
          </Row>
          {selectedExtensions.map((extension) => {
            return (
              <Row header>
                <div>
                  <p>{extension.quantity}</p>
                  <p>{extension.name}</p>
                </div>

                <p>{extension.price.toFixed(2)}</p>
              </Row>
            );
          })}
        </Details>
      </CartItemWrapper>
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
      {isExtensionsListOpen && (
        <Extensions setIsExtensionsListOpen={setIsExtensionsListOpen} />
      )}
    </>
  );
};

export default CartItem;
