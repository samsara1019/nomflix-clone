import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const numberId = Number(id);
    if (isNaN(numberId)) {
      return push("/");
    }

    try {
      this.setState({
        loading: true,
      });
      
      let result = null;
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(numberId));
      } else {
        ({ data: result } = await tvApi.showDetail(numberId));
      }
      this.setState({
        result,
      });
    } catch (error) {
      this.setState({
        error: "can't find detail",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
