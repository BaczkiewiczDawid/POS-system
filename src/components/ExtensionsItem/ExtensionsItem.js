import React, { useState, useEffect } from "react";
import { ListItem, Details, CountWrapper } from "./ExtensionsItem.style";

const ExtensionsItem = ({
  item,
  setSelectedExtensions,
  selectedExtensions,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const isExisting = (extension) => {
    return extension.name === item.name;
  };

  const addExtension = (item) => {
    setIsSelected(true);
    setQuantity(quantity + 1);
  };

  const updateSelectedExtensions = (name, price) => {
    const a = selectedExtensions.find(isExisting);

    if (a !== undefined) {
      setSelectedExtensions(() => [
        {
          name: name,
          price: price * quantity,
          quantity: quantity,
        },
      ]);
    } else {
      setSelectedExtensions((prevState) => [
        ...prevState,
        {
          name: name,
          price: price * quantity,
          quantity: quantity,
        },
      ]);
    }
  };

  useEffect(() => {
    updateSelectedExtensions(item.name, item.price);
  }, [quantity]);

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
