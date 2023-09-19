import styled from "styled-components";

export const ListItem = styled.div`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.grey : props.theme.colors.black};
  width: 100%;
  height: 4rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 0.95rem;
  }

  p {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.medium}) {
    height: 5rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const CountWrapper = styled.div`
  margin-right: 1rem;
  
  p {
    margin-top: 0;
  }
`;
