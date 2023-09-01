import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";

const NavigationWrapper = styled.nav`
  display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};

  ul {
    margin-top: 2rem;
    margin-left: 2rem;

    li {
    }
  }
`;

const LinkWrapper = styled.li`
  /* background-color: ${({ theme }) => theme.colors.grey}; */
  background-color: ${props => props.isActive ? props.theme.colors.grey : 'none'};
  width: 65vw;
  padding: 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;

  &:nth-child(n + 1) {
    margin-top: 0.5rem;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  opacity: 0.6;
  text-decoration: none;
  display: block;
  font-size: 1rem;

  &.active {
  }
`;

const Navigation = () => {
  const navigationElements = [
    {
      name: "orders",
      displayName: "Orders",
      url: "orders",
    },
    {
      name: "menu",
      displayName: "Menu",
      url: "menu",
    },
    {
      name: "gir-staff",
      displayName: "GIR Staff",
      url: "gir-staff",
    },
    {
      name: "manager",
      displayName: "Manager",
      url: "manager",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <NavigationWrapper isMenuOpen={isMenuOpen}>
        <ul>
          {navigationElements.map((el) => {
            return (
              <LinkWrapper key={el.name} isActive={location.pathname === `/${el.url}`}>
                <StyledLink to={`/${el.url}`}>{el.displayName}</StyledLink>
              </LinkWrapper>
            );
          })}
        </ul>
        <div></div>
      </NavigationWrapper>
      <MobileNavigationBar setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Navigation;
