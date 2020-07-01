import React, { Component } from "react";

import Main from "../Main/Main";
import DrawerToggle from "../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Categories from "../Categories/Categories";
class Layout extends Component {
  state = {
    showSideDrawer: false,
    chosenCategory: "",
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  chosenCategoryHandler = () => {};

  render() {
    return (
      <div className={classes.Content}>
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
      </div>
    );
  }
}

export default Layout;
