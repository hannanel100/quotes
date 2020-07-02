import React from "react";

const CategoryContext = React.createContext({
  chosenCategory: "",
  changeCategory: () => {},
});

export default CategoryContext;
