import React, { Component } from "react";
import { Pagination, InputGroup, FormControl, Button } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
    this.searchChange = this.searchChange.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
  }
  searchChange(e) {
    this.setState({ searchInput: e.target.value });
  }
  searchArticle() {
    this.props.onSearch(this.state.searchInput);
  }
  render() {
    return (
      <div>
        <h2>
          Search through millions of articles from over 50,000 large and small
          news sources and blogs
        </h2>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Article"
            aria-label="Search Article"
            aria-describedby="basic-addon2"
            onChange={this.searchChange}
          />
          <InputGroup.Append>
            <Button variant="outline-primary" onClick={this.searchArticle}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Search;
