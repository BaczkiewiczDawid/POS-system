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

export const Summary = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const Title = styled.h3`
  font-weight: ${(props) => (props.primary ? "500" : "300")};
  font-size: 1rem;
  margin-top: ${(props) => (props.secondary ? "1rem" : "0")};
`;

export const DashedLine = styled.div`
  width: 100%;
  height: 0;
  margin: 1rem 0;
  border-top: 1px dashed ${({ theme }) => theme.colors.white};
  opacity: 0.6;
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const SingleMethod = styled.div`
  text-align: center;
`;

export const Icon = styled.div`
  width: 5rem;
  height: 2rem;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.lightGrey : "none"};
  border: 1px solid
    ${(props) => (props.selected ? "none" : props.theme.colors.lightGrey)};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem;
  text-align: center;
  border-radius: 100px;
  letter-spacing: 0.12rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;
