import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    border-right: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const OrderSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 50%;
  border-radius: 5px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const ListWrapper = styled.div``;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
