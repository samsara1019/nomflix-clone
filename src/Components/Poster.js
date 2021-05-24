import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
 font-size: 12px;
`;


const Image = styled.div`
 background-image: url(${props=>props.bgUrl});
 height: 180px;
 background-size: cover;
 border-radius: 4px;
 background-position: center center;
 transition: opacity .2s ease-in-out;
 margin-bottom: 5px;
`;

const Rating = styled.span`
  top: 163px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity .2s ease-in-out;
`;

const ImageContainer = styled.div`
 margin-bottom: 5px;
 position: relative;
 &:hover {
  ${Image}{
    opacity: .4;
  }  
  ${Rating} {
    opacity: 1;
  }
 }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Year = styled.span`
 font-size: 10px;
 color: rgba(255, 255, 255, .5);
`;



const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : require("../assets/noImageSmall.png").default}></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
        <Title title={title}>{title}</Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Container>
  </Link>
)

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
}

export default Poster;