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

const SeasonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SeasonLogo = styled.img`
  display: flex;
  flex-direction: column;
`;

const SeasonName = styled.h3`
  font-weight: bold;
  font-size: 19px;
  margin-top: 5px;
`;

const NoSeason = styled.p`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  font-size: 24px;
`;

const Seasons = ({ result }) => (
  <Container>
    <Helmet>
      <title>{result.original_name || result.original_title} | Seasons | Nomflix</title>
    </Helmet>
    <Content>
      {result.seasons &&
        result.seasons?.length &&
        result.seasons.map((season) => (
          <SeasonContainer key={season.id}>
            <SeasonLogo src={`https://www.themoviedb.org/t/p/w200/${season.poster_path}`} />
            <SeasonName>{season.name}</SeasonName>
          </SeasonContainer>
        ))}
        {
          !result.seasons && (
            <NoSeason>
              Sorry! {result.original_name || result.original_title} has no seasons infomation! 😢
            </NoSeason>
          )
        }
    </Content>
  </Container>
);

Seasons.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Seasons;
