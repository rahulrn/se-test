import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class ArticlePagination extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "", articles: [], active: 1 };
  }
  paginateData(e, page) {
    this.setState({ active: page });
    this.props.onPagenate(page);
  }
  render() {
    let items = [];
    let totalPage = Math.round(this.props.totalResults / 20);
    for (let number = 1; number <= totalPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === this.state.active}
          onClick={(event) => this.paginateData(event, number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination size="sm">{items}</Pagination>;
  }
}

export default ArticlePagination;
