import React from "react";
import styled from "styled-components";
import icon from "../../assets/images/bookmark.svg";

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  padding: 1rem;

  img {
    width: 1rem;
  }
`;

const Info = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const CategoryList = [
  {
    id: 1,
    name: "Buckets",
    quantity: 12,
  },
  {
    id: 2,
    name: "Addons",
    quantity: 24,
  },
  {
    id: 3,
    name: "Burgers",
    quantity: 18,
  },
  {
    id: 4,
    name: "Chicken",
    quantity: 4,
  },
];

const Categories = () => {
  return (
    <Wrapper>
      {CategoryList.map((item) => {
        return (
          <Category key={item.id}>
            <img src={icon} alt="Icon" />
            <Info>
              <h2>{item.name}</h2>
              <p>{item.quantity} Items</p>
            </Info>
          </Category>
        );
      })}
    </Wrapper>
  );
};

export default Categories;
