import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: .8;
  z-index: 5;
`;

export const Modal = styled.div`
  width: 90%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border-radius: .25rem;
  opacity: 1;
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 6;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 80%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    width: 70%;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 4rem;
  border-radius: .25rem;
  color: ${({ theme }) => theme.colors.white};
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    font-size: .95rem;
  }

  p {
    font-size: .8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    height: 5rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: .95rem;
    }
  }
`;