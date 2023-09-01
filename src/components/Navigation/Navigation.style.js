import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
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

export const LinkWrapper = styled.li`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.grey : "none"};
  width: 65vw;
  padding: 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;

  &:nth-child(n + 1) {
    margin-top: 0.5rem;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  opacity: 0.6;
  text-decoration: none;
  display: block;
  font-size: 1rem;
`;
