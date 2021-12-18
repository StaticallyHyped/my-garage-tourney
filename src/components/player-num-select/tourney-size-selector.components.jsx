import React from "react";
import { QuantityPicker } from "react-qty-picker";
import ContinueButton from "../continue-button/continue-button.components";
import "./tourney-size-selector.styles.scss";

const TourneySizeSelector = () => (
  <div className="size-selector">
    <h2 className="title">Select Tourney Size</h2>
    <QuantityPicker min={4} max={16} className="num-picker"></QuantityPicker>
    <ContinueButton className="continue-button"></ContinueButton>
  </div>
);

export default TourneySizeSelector;
