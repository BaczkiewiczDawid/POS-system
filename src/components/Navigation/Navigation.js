import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MobileNavigationBar from "../MobileNavigationBar/MobileNavigationBar";
import { NavigationWrapper, LinkWrapper, StyledLink } from './Navigation.style';
import navigationElements from '../../data/navigationElements.json';

const Navigation = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <NavigationWrapper isMenuOpen={isMenuOpen}>
        <ul>
          {navigationElements.navigationElements.map((el) => {
            return (
              <LinkWrapper
                key={el.name}
                isActive={location.pathname === `/${el.url}`}
              >
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
