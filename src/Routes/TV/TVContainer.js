import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    eroor: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: { results: topRated } } = await tvApi.topRated();
      const { data: { results: airingToday } } = await tvApi.airingToday();
      const { data: { results: popular } } = await tvApi.popular();
    
      this.setState({
        topRated,
        airingToday,
        popular
      })
    } catch (error) {
      this.setState({
        error: "Can't find Movie's infomation"
      })
    } finally {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    
    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
