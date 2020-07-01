import React, { Component } from "react";

import  Quote  from "../Quote/Quote";
import Button  from "../../components/UI/Button/Button";

class Main extends Component {
  state = {
    category: null,
    quote: {
      quoteText: "",
      author: "",
    },
    loading: false,
  };

  onClickHandler = async (category) => {
    try {
      const response = await fetch(
        `https://api.quotable.io/random?tags=${category}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data);
      console.log(data);
      const newQuote = {...this.state.quote, quoteText: data.content,author:data.author }
      console.log(newQuote)
      const newState = {...this.state, quote:newQuote};
      this.setState({...newState})
    //   this.setState({ ... });
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      this.setState({ data: { content: "Opps... Something went wrong" } });
    }
  };
  render() {
    return (
      <div>
        <Quote quote={this.state.quote}/>
        <Button clicked={()=>this.onClickHandler("inspirational")} btnType="Success">
          Random Quote
        </Button>
      </div>
    );
  }
}

export default Main