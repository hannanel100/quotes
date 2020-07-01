import React, { Component } from "react";

import QuoteComponent from "../../components/QuoteComponent/QuoteComponent";
import Author from "../../components/Author/Author";

import classes from "./Quote.module.css";

class Quote extends Component {
  render() {
    return (
      <div className={classes.Quote}>
        <QuoteComponent text={this.props.quote.quoteText} />
        <Author name={this.props.quote.author} />
      </div>
    );
  }
}

export default Quote;
