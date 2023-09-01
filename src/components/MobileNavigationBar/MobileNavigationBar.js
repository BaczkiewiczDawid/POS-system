import React, { useState } from "react";
import { Nav, Button } from "./MobileNavigationBar.style";

const MobileNavigationBar = ({ setIsMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("Checkout");

  const handleClick = (e) => {
    setActiveLink(e.target.value);

    e.target.value === "Menu" ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  return (
    <Nav>
      <Button
        onClick={handleClick}
        isActive={activeLink === "Menu"}
        value="Menu"
      >
        Menu
      </Button>
      <Button
        onClick={handleClick}
        isActive={activeLink === "Checkout"}
        value="Checkout"
      >
        Checkout
      </Button>
    </Nav>
  );
};

export default MobileNavigationBar;
