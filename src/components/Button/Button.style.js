import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: .7rem .5rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    font-weight: 500;
    margin: .5rem 1rem;
    cursor: pointer;
    width: 7rem;
    font-size: .8rem;
    word-wrap: keep-all;
    border: none;
`;