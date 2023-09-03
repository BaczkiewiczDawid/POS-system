import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 1rem;
  }
`;

export const Info = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;