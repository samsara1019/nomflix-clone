import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Route } from "react-router-dom";
import Loader from "Components/Loader";
import Message from "Components/Message";
import TabHeader from "./Tabs/TabHeader";
import Video from "./Tabs/Videos";
import ProductionCompanies from "./Tabs/ProductionCompanies";
import Seasons from "./Tabs/Seasons";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span``;

const ImdbLink = styled.a`
    position: absolute;
    width: 30px;
    height: 15px;
`;

const ImdbLogo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading... | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e74c3c" text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>{result.original_name || result.original_title} | Nomflix</title>
      </Helmet>
      <Backdrop
        bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noImageSmall.png").default
          }
        />
        <Data>
          <Title>{result.original_name || result.original_title}</Title>
          <ItemContainer>
            <Item>
              {(result.release_date || result.first_air_date).substring(0, 4)}
            </Item>
            <Divider>·</Divider>
            <Item>{result.runtime || result.episode_run_time[0]} min</Item>
            <Divider>·</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) => {
                  return index !== 0 ? ` / ${genre.name}` : genre.name;
                })}
            </Item>
            {result.imdb_id && (
              <>
                <Divider>·</Divider>
                <Item>
                  <ImdbLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
                    <ImdbLogo src={require("../../assets/imdb.png").default} />
                  </ImdbLink>
                </Item>
              </>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabHeader details={result} isMovie={isMovie} />
          <Route
            path='/movie/:id/videos'
            render={() => <Video result={result} />}/>
          <Route
            path='/tv/:id/videos'
            render={() => <Video result={result} />}/>
          <Route
            path='/movie/:id/production_companies'
            render={() => <ProductionCompanies result={result} />}/>
          <Route
            path='/tv/:id/production_companies'
            render={() => <ProductionCompanies result={result} />}/>
          <Route
            path='/tv/:id/seasons'
            render={() => <Seasons result={result} />}/>
        </Data>
      </Content>
    </Container>
  );
DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
