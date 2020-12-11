import React, { Component } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";

class Article extends Component {

  render() {
    let articles =
      this.props.articles.length > 0 ? (
        this.props.articles.map((value, index) => {
          return (
            <Col className="main-col" sm={6} xs={12} key={index}>
              {value.urlToImage ? <img src={value.urlToImage} style={{ width: "100%" }} alt={value.title}/> : ''}
              <h3>
                <a
                  href={value.url}
                  className="title"
                  target="_blank"
                  rel="noreferrer"
                >
                  {value.title}
                </a>
              </h3>
              <span className="author">
                {value.author ? `${value.author} |` : ""} {value.publishedAt}
              </span>
              <p className="author">
                {value.source.name ? `Source:${value.source.name}` : ""}
              </p>
              <p>{value.content}</p>
              <a href={value.url} target="_blank" rel="noreferrer">
                Read more
              </a>
            </Col>
          );
        })
      ) : (
        <Col sm={12} xs={12}>
          <h3>No Result Found!!!</h3>
        </Col>
      );
    let Loading = (
      <Col sm={12} xs={12}>
        <Spinner
          animation="border"
          variant="primary"
          className="center-aligned"
        />
      </Col>
    );
    let error = (
      <Col sm={12} xs={12}>
        {" "}
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        </Alert>
      </Col>
    );
    return (
      <Row>
        {this.props.error ? error : this.props.loader ? Loading : articles}
      </Row>
    );
  }
}

export default Article;
