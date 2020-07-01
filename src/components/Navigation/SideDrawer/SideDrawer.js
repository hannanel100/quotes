import React from "react";

// import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";
const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  if (props.open) {
    console.log("open");
  }
  return (
    <div>
      {/* <Backdrop show={props.open} clicked={props.closed} /> */}
      <div className={attachedClasses.join(" ")}>categories...</div>
    </div>
  );
};

export default SideDrawer;
