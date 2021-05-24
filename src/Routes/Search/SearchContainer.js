import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    eroor: null,
    loading: false,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { searchTerm } = this.state;
    if(!searchTerm) return;
    this.searchByTerm(searchTerm);
  }

  updateTerm = (evt) => {
    const {
      target: { value }
    } = evt;
    this.setState({
      searchTerm: value
    })
  }

  searchByTerm = async (term) => {
    try {
      this.setState({
        loading: true,
      })
      
      const { data: { results: tvResults } } = await tvApi.search(term);
      const { data : { results: movieResults } } = await moviesApi.search(term);

      this.setState({
        movieResults,
        tvResults,
      })
      
    } catch (error) {
      this.setState({
        error: "can't find results!",
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
