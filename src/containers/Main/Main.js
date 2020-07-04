import React, { Component } from "react";

import Quote from "../Quote/Quote";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import CategoryContext from "../../context/CategoryContext";
import classes from "./Main.module.css";

class Main extends Component {
  state = {
    quote: {
      quoteText: "",
      author: "",
    },
    loading: false,
    error: false,
  };

  onClickHandler = async (category) => {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await fetch(
        `https://api.quotable.io/random?tags=${category}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data);
      console.log(data);
      const newQuote = {
        ...this.state.quote,
        quoteText: data.content,
        author: data.author,
      };
      console.log(newQuote);
      const newState = { ...this.state, quote: newQuote, loading: false };
      this.setState({ ...newState });
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      this.setState({ error: true });
    }
  };
  render() {
    let content = <Quote quote={this.state.quote} />;
    if (this.state.loading) {
      content = <Spinner />;
    }

    return (
      <CategoryContext.Consumer>
        {(context) => (
          <div className={classes.Main}>
            {context.chosenCategory ? (
              <h2 className={classes.capitalize}>{context.chosenCategory}</h2>
            ) : (
              <h2>Random</h2>
            )}
            {content}
            <Button
              clicked={() => this.onClickHandler(context.chosenCategory)}
              btnType="Success"
            >
              Random Quote
            </Button>
          </div>
        )}
      </CategoryContext.Consumer>
    );
  }
}

export default Main;
