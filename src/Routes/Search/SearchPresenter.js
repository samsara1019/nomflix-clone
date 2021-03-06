import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    {
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Search Movies or TV Shows..."
            value={searchTerm}
            onChange={updateTerm}
          ></Input>
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResults && movieResults.length > 0 && (
              <Section title="Movie Result">
                {movieResults.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="TV Result">
                {tvResults.map((tv) => (
                  <Poster
                    key={tv.id}
                    id={tv.id}
                    imageUrl={tv.poster_path}
                    title={tv.original_name}
                    rating={tv.vote_average}
                    year={
                      tv.first_air_date && tv.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
            )}
            {error && <Message color="#e74c3c" text={error}></Message>}
            {tvResults &&
              movieResults &&
              tvResults.length === 0 &&
              movieResults.length === 0 && (
                <Message color="#95a5a6" text="Noting Found"></Message>
              )}
          </>
        )}
      </Container>
    }
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
