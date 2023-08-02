import styled from "styled-components";

export const CategoriesWrapper = styled.nav`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem auto;

    @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
        width: auto;
    }
`;
