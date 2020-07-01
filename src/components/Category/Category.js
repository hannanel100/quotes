import React from "react";

import classes from "./Category.module.css";
const Category = (props) => {
  return (
    <div className={classes.Category}>
      <p onClick={props.clicked} className={classes.capitalize}>
        {props.name}
      </p>
    </div>
  );
};

export default Category;
