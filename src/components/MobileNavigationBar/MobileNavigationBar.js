import React, { useState } from "react";
import { Nav, Button } from "./MobileNavigationBar.style";
import { NavLink } from "react-router-dom";

const MobileNavigationBar = () => {
  const [activeLink, setActiveLink] = useState("Checkout");

  return (
    <Nav>
      <NavLink to="/menu">
        <Button isActive={activeLink === "Menu"} value="Menu">
          Menu
        </Button>
      </NavLink>
      <NavLink to="/checkout">
        <Button isActive={activeLink === "Checkout"} value="Checkout">
          Checkout
        </Button>
      </NavLink>
    </Nav>
  );
};

export default MobileNavigationBar;
