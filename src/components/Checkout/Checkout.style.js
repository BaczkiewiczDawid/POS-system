import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-weight: 500;
    font-size: 1.3rem;
  }

  p {
    font-weight: 300;
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    position: sticky;
    width: 30%;
    right: 0;
    top: 0;
  }
`;

export const Cart = styled.div`
  max-height: 50vh;
  margin-top: 2rem;
`;

export const CartItem = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  height: auto;
  display: column;
  padding: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;

  &:nth-child(n + 2) {
    margin-top: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.header ? "space-between" : "flex-start"};
  margin-top: ${(props) => (props.header ? "0" : ".3rem")};
`;

export const Details = styled.div`
  padding: 0 1rem;
  margin-top: 0.5rem;

  p:nth-child(n + 2) {
    margin-left: 1rem;
  }
`;

