import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: scroll;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CompanyLogo = styled.img`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  font-weight: bold;
  font-size: 19px;
  margin-top: 5px;
`;

const NoProductionCompanies = styled.p`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  font-size: 24px;
`;

const ProductionCompanies = ({ result }) => (
  <Container>
    <Helmet>
      <title>{result.original_name || result.original_title} | Production Companies | Nomflix</title>
    </Helmet>
    <Content>
      {result.production_companies &&
        result.production_companies?.length &&
        result.production_companies.map((company) => (
          <CompanyContainer key={company.id}>
            <CompanyLogo src={`https://www.themoviedb.org/t/p/w200/${company.logo_path}`} />
            <CompanyName>{company.name} {company.origin_country && `(${company.origin_country})`}</CompanyName>
          </CompanyContainer>
        ))}
        {
          !result.production_companies && (
            <NoProductionCompanies>
              Sorry! {result.original_name || result.original_title} has no production companies infomation! 😢
            </NoProductionCompanies>
          )
        }
    </Content>
  </Container>
);

ProductionCompanies.propTypes = {
  result: PropTypes.object.isRequired,
};

export default ProductionCompanies;
