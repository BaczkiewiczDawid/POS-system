import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.grey};
  z-index: 999;
`;

export const Heading = styled.div`
  display: flex;
  padding: 1.5rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  width: 90vw;
  margin-top: 2rem;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const SingleItem = styled.div`
  min-width: 40vw;
  max-width: 50vw;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
