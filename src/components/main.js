import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Search from "./search";
import Article from "./article";
import ArticlePagination from "./pagination";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      articles: [],
      page: 1,
      error: false,
      totalResults: 0,
      loader: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.onPagenate = this.onPagenate.bind(this);
  }
  onSearch(searchString) {
    this.setState({ searchString: searchString, totalResults: 0 });
    this.getArticles(1, searchString);
  }
  onPagenate(page) {
    this.getArticles(page);
    this.setState({ page: page });
  }
  componentDidMount() {
    this.getArticles();
  }
  getArticles = async (page = 1, query = null) => {
    try {
      this.setState({ loader: true });
      const pagnumber = page ? `&page=${page}` : "";
      const queryParam = query ? `&q=${query}` : "";
      const APIKEY = process.env.REACT_APP_API_KEY;
      const APISERVER = process.env.REACT_APP_API_SERVER;
      const COUNTRY_CODE = "gb";
      const response = await fetch(
        `${APISERVER}v2/top-headlines?country=${COUNTRY_CODE}&apiKey=${APIKEY}${pagnumber}${queryParam}`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loader: false,
          page: page,
        });
      } else {
        this.setState({ error: true, loader: false, totalResults: 0 });
      }
    } catch (e) {
      this.setState({ error: true, loader: false, totalResults: 0 });
    }
  };
  render() {
    return (
      <Container>
        <Search onSearch={this.onSearch} />
        <Article
          articles={this.state.articles}
          loader={this.state.loader}
          error={this.state.error}
        />
        <ArticlePagination
          onPagenate={this.onPagenate}
          totalResults={this.state.totalResults}
        />
      </Container>
    );
  }
}

export default Main;
