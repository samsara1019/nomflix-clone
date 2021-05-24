import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-top: 30px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 3px solid #6B66FF;
  border-radius: 5px;
  padding: 5px;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#6B66FF" : "white")};
`;

const CoinDetailMenu = withRouter(({ location: { pathname }, details, isMovie }) => (
  <Header>
    <List>
      <Item selected={pathname === `/${isMovie?'movie':'tv'}/${details.id}/videos`}>
        <Link to={`/${isMovie?'movie':'tv'}/${details.id}/videos`}>videos</Link>
      </Item>
      <Item selected={pathname === `/${isMovie?'movie':'tv'}/${details.id}/production_companies`}>
        <Link to={`/${isMovie?'movie':'tv'}/${details.id}/production_companies`}>production companies</Link>
      </Item>
      {!isMovie && (
        <Item selected={pathname === `/${isMovie?'movie':'tv'}/${details.id}/seasons`}>
          <Link to={`/${isMovie?'movie':'tv'}/${details.id}/seasons`}>seasons</Link>
        </Item>
      )}
    </List>
  </Header>
));

CoinDetailMenu.propTypes = {
  details: PropTypes.object,
  isMovie: PropTypes.bool.isRequired
};

export default CoinDetailMenu;
