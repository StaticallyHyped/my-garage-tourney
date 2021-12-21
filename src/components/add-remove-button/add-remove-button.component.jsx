import React from "react";
import "./add-remove-button.styles.scss";

const AddRemoveButton = () => {
  return (
    <div className="add-remove-button">
      <button className="items">Add {">>"}</button>
      <button className="items">{"<<"}Remove</button>
    </div>
  );
};

export default AddRemoveButton;
