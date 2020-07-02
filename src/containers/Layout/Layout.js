import React, { Component } from "react";

import Main from "../Main/Main";
import DrawerToggle from "../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Categories from "../Categories/Categories";
import CategoryContext from "../../context/CategoryContext";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    chosenCategory: "",
  };
  sideDrawerClosedHandler = () => {
    this.setState({ ...this.state, showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  chosenCategoryHandler = (newCategory) => {
    this.setState({ ...this.state, chosenCategory: newCategory });
  };

  render() {
    return (
      <div className={classes.Content}>
        <CategoryContext.Provider
          value={{
            chosenCategory: this.state.chosenCategory,
            changeCategory: this.chosenCategoryHandler,
          }}
        >
          <DrawerToggle clicked={this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDrawer} />
          <Categories />
          <Main />
          {/* <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        /> */}
          <main className={classes.Content}>{this.props.children}</main>
        </CategoryContext.Provider>
      </div>
    );
  }
}

export default Layout;
