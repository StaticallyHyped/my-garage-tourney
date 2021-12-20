import React from "react";
import { QuantityPicker } from "react-qty-picker";
import ContinueButton from "../continue-button/continue-button.components";
import { connect } from "react-redux";
import { toggleNewTourneyCartsHidden } from "../../redux/new-tournament/new-tournament.actions";
import "./tourney-size-selector.styles.scss";

const TourneySizeSelector = ({ toggleNewTourneyCartsHidden }) => {
  return (
    <div className="size-selector">
      <h2 className="title">Select Tourney Size</h2>
      <QuantityPicker min={4} max={16} className="num-picker"></QuantityPicker>
      <div className="continue-button" onClick={toggleNewTourneyCartsHidden}>
        <ContinueButton />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNewTourneyCartsHidden: () => dispatch(toggleNewTourneyCartsHidden()),
});

export default connect(null, mapDispatchToProps)(TourneySizeSelector);
