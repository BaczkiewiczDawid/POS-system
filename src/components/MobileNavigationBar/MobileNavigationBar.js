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
  color: ${(props) => (props.isActive ? props.theme.colors.grey : props.theme.colors.white)};
  border: none;
  background-color: ${(props) => (props.isActive ? props.theme.colors.lightGrey : props.theme.colors.grey)};
`;

const MobileNavigationBar = ({ setIsMenuOpen }) => {
  const [activeLink, setActiveLink] = useState("Checkout");

  const handleClick = (e) => {
    setActiveLink(e.target.value);

    e.target.value === "Menu" ? setIsMenuOpen(true) : setIsMenuOpen(false)
  };


  return (
    <Nav>
      <Button onClick={handleClick} isActive={activeLink === "Menu"} value="Menu">
        Menu
      </Button>
      <Button onClick={handleClick} isActive={activeLink === "Checkout"} value="Checkout">
        Checkout
      </Button>
    </Nav>
  );
};

export default MobileNavigationBar;
