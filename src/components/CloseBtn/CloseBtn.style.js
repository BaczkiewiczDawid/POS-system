import styled from 'styled-components';

export const Button = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
        display: none;
    }
`;