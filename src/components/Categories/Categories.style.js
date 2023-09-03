import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;


  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: auto;
    margin-top: 2rem;
    height: 40vh;
  }
`;