import styled from 'styled-components';

export const CartItemWrapper = styled.div`
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

