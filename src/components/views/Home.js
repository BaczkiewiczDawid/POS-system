import React from "react";
import Categories from "../Categories/Categories";
import ProductsList from "../ProductsList/ProductsList";
import Summary from '../Summary/Summary';
import { Wrapper, SummaryWrapper, Main } from "./Home.style";

const Home = () => {
  return (
    <Wrapper>
      <SummaryWrapper>
        <Summary />
      </SummaryWrapper>
      <Main>
        <Categories />
        <ProductsList />
      </Main>
    </Wrapper>
  );
};

export default Home;
