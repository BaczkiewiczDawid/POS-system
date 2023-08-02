import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-weight: 500;
  margin: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  word-wrap: keep-all;
  border: none;
  height: 2.5rem;
  width: 40%;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 18%;
  }
`;
