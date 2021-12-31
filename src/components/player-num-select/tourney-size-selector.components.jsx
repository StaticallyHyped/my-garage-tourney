import React from "react";
import { QuantityPicker } from "react-qty-picker";
import { connect } from "react-redux";
import { updateQuantity } from "../../redux/new-tournament/new-tournament.actions";
import "./tourney-size-selector.styles.scss";
import { selectTournamentQuantity } from "../../redux/new-tournament/new-tournament.selectors";
import { createStructuredSelector } from "reselect";

const TourneySizeSelector = ({ updateQuantity, value, maxValue }) => {
  return (
    <div className="size-selector">
      <h2 className="title">Select Tourney Size</h2>
      <QuantityPicker
        min={4}
        value={value}
        max={maxValue}
        className="num-picker"
        onChange={(value) => updateQuantity(value)}
      ></QuantityPicker>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  value: selectTournamentQuantity,
});
const mapDispatchToProps = (dispatch) => ({
  updateQuantity: (quantity) => dispatch(updateQuantity(quantity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourneySizeSelector);
