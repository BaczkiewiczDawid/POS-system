import React, { useState } from "react";
import { ListItem, Details, CountWrapper } from "./ExtensionsItem.style";

const ExtensionsItem = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [count, setCount] = useState(0);

  const addExtension = (item) => {
    setIsSelected(true);
    setCount(count + 1);
  };

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
        <p>{count}</p>
      </CountWrapper>
    </ListItem>
  );
};

export default ExtensionsItem;
