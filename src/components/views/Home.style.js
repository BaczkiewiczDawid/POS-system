import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    display: flex;
  }
`;

export const SummaryWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 40%;
  }
`;

export const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    width: 60%;
  }
`;
