import React, { Component } from "react";

import Category from "../../components/Category/Category";

import classes from "./Categories.module.css";
export default class Categories extends Component {
  state = {
    categories: [],
    chosenCategory: "",
  };

  async componentDidMount() {
    const fetchedCategories = await this.getCategories();
    console.log(fetchedCategories);
    this.setState({ ...this.state, categories: fetchedCategories });
  }

  getCategories = async () => {
    const response = await fetch("https://api.quotable.io/tags");
    const data = await response.json();
    const categoriesArray = [];
    data.forEach((element) => {
      categoriesArray.push(element.name);
    });
    return categoriesArray;
  };

  onCategoryClickHandler = (categoryName) => {
    this.setState({ ...this.state, chosenCategory: categoryName });
    console.log(categoryName);
  };
  render() {
    let categoriesList = this.state.categories;

    return (
      <div className={classes.Categories}>
        {categoriesList.map((name) => (
          <Category
            key={name}
            name={name}
            clicked={() => this.onCategoryClickHandler(name)}
          />
        ))}
      </div>
    );
  }
}
