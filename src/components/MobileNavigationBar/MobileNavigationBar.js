import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
`;

const Button = styled.button`
  width: 50vw;
  height: 3rem;
  cursor: pointer;
  color: ${(props) => (props.active ? props.theme.colors.grey : props.theme.colors.white)};
  border: none;
  background-color: ${(props) => (props.active ? props.theme.colors.lightGrey : props.theme.colors.grey)};
`;

const MobileNavigationBar = () => {
  const [activeLink, setActiveLink] = useState("Checkout");

  const handleClick = (e) => {
    setActiveLink(e.target.value);
  };

  return (
    <Nav>
      <Button onClick={handleClick} active={activeLink === "Menu"} value="Menu">
        Menu
      </Button>
      <Button onClick={handleClick} active={activeLink === "Checkout"} value="Checkout">
        Checkout
      </Button>
    </Nav>
  );
};

export default MobileNavigationBar;
