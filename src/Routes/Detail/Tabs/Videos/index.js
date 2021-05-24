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

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoLink = styled.a`
  margin-bottom: 10px;
`;

const Video = styled.iframe``;

const NoVideo = styled.p`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  font-size: 24px;
`;

const Videos = ({ result }) => (
  <Container>
    <Helmet>
      <title>{result.original_name || result.original_title} | Videos | Nomflix</title>
    </Helmet>
    <Content>
      {result.videos?.results &&
        result.videos?.results?.length &&
        result.videos.results.map((video) => (
          <VideoContainer key={video.id}>
            <VideoLink href={`https://www.youtube.com/watch?v=${video.key}`}>
              {video.name}
            </VideoLink>

            <Video
              width="420"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
            ></Video>
          </VideoContainer>
        ))}
        {
          !result.videos?.results && (
            <NoVideo>
              Sorry! {result.original_name || result.original_title} has no videos! 😢
            </NoVideo>
          )
        }
    </Content>
  </Container>
);

Videos.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Videos;
