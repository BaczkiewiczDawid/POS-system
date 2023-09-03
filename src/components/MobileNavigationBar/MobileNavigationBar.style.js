import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 50vw;
  height: 3rem;
  cursor: pointer;
  color: ${(props) => (props.isActive ? props.theme.colors.grey : props.theme.colors.white)};
  border: none;
  background-color: ${(props) => (props.isActive ? props.theme.colors.lightGrey : props.theme.colors.grey)};
`;