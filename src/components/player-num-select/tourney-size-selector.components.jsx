import React from "react";
import { QuantityPicker } from "react-qty-picker";
import ContinueButton from "../continue-button/continue-button.components";
import { connect, useSelector } from "react-redux";
import {
  toggleNewTourneyCartsHidden,
  submitQuantity,
  updateQuantity,
} from "../../redux/new-tournament/new-tournament.actions";
import "./tourney-size-selector.styles.scss";
import { selectTournamentQuantity } from "../../redux/new-tournament/new-tournament.selectors";
import { createStructuredSelector } from "reselect";

const TourneySizeSelector = ({
  submitQuantity,
  updateQuantity,
  value,
  toggleNewTourneyCartsHidden,
}) => {
  return (
    <div className="size-selector">
      <h2 className="title">Select Tourney Size</h2>
      <QuantityPicker
        min={4}
        value={value}
        max={16}
        className="num-picker"
        onChange={(value) => updateQuantity(value)}
      ></QuantityPicker>
      <h3>{value}</h3>
      <div
        className="continue-button"
        onClick={() => {
          toggleNewTourneyCartsHidden();
          submitQuantity(value);
        }}
      >
        <ContinueButton />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  value: selectTournamentQuantity,
});
const mapDispatchToProps = (dispatch) => ({
  toggleNewTourneyCartsHidden: () => dispatch(toggleNewTourneyCartsHidden()),
  submitQuantity: (quantity) => dispatch(submitQuantity(quantity)),
  updateQuantity: (quantity) => dispatch(updateQuantity(quantity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourneySizeSelector);
