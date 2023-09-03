import styled from 'styled-components';

export const Button = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;