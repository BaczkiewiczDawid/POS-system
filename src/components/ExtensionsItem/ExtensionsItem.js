import React, { useState, useEffect } from "react";
import { ListItem, Details, CountWrapper } from "./ExtensionsItem.style";
import { useExtensions } from "../../context/ExtensionsContext";

const ExtensionsItem = ({ item }) => {
  const { selectedExtensions, setSelectedExtensions } = useExtensions();

  const a = selectedExtensions.quantity >= 1 ? true : false;

  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addExtension = (item) => {
    setIsSelected(true);
    setQuantity(quantity + 1);

    const existingExtensionIndex = selectedExtensions.findIndex(
      (obj) => obj.name === item.name
    );

    if (existingExtensionIndex !== -1) {
      const updatedExtensions = [...selectedExtensions];

      updatedExtensions[existingExtensionIndex] = {
        ...updatedExtensions[existingExtensionIndex],
        quantity: updatedExtensions[existingExtensionIndex].quantity + 1,
        price: updatedExtensions[existingExtensionIndex].price + item.price,
      };

      setSelectedExtensions(updatedExtensions);
    } else {
      setSelectedExtensions((prevState) => [
        ...prevState,
        {
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ]);
    }
  };

  console.log(item.name);

  const handleValues = () => {
    selectedExtensions.forEach((el) => {
      if (el.name === item.name && el.quantity > 0) {
        setQuantity(el.quantity);
        setIsSelected(true)
      }
    });
  };

  useEffect(() => {
    handleValues();
  }, []);

  return (
    <ListItem
      key={item.name}
      isSelected={isSelected}
      onClick={() => addExtension(item)}
    >
      <Details>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </Details>
      <CountWrapper>
        <p>{quantity > 0 ? quantity : ""}</p>
      </CountWrapper>
    </ListItem>
  );
};

export default ExtensionsItem;
