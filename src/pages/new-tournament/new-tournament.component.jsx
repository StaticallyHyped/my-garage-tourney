import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";
import ContinueButton from "../../components/continue-button/continue-button.components";
import { connect } from "react-redux";
import { submitQuantity } from "../../redux/new-tournament/new-tournament.actions";
import {
  ButtonAddRemove,
  ButtonContainer,
  Items,
  Styles,
} from "./new-tournament.styles";
import "./new-tournament.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectTournamentQuantity } from "../../redux/new-tournament/new-tournament.selectors";
import { selectPlayersCartItems } from "../../redux/players-cart/players-cart.selectors";
import { selectTourneyCartItems } from "../../redux/tourney-cart/tourney-cart.selectors";

const NewTournament = ({ playersCount, playersCart, tourneyCart }) => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  //initialize the tourney cart and add the appropriate number of rows
  /* if (!hidden) {
    let i = 0;
    do {
      tourneyPool.push({ name: "" });
      i++;
    } while (i < playersCount - 1);
  } */

  return (
    <div className="new-tournament-page">
      <TourneySizeSelector maxValue={playersCart.length} />
      <div>
        <Items>
          <Styles>
            <PlayersSelector columns={columns} data={playersCart} />
          </Styles>
          <ButtonContainer>
            <div>
              <ButtonAddRemove>Add &#10095;&#10095;</ButtonAddRemove>
            </div>
            <div>
              <ButtonAddRemove>&#10094;&#10094; Remove</ButtonAddRemove>
            </div>
          </ButtonContainer>
          <Styles>
            <PlayersSelector columns={columns} data={tourneyCart} />
          </Styles>
        </Items>
      </div>
      <div className="continue-button">
        <ContinueButton />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  playersCount: selectTournamentQuantity,
  playersCart: selectPlayersCartItems,
  tourneyCart: selectTourneyCartItems,
});

export default connect(mapStateToProps)(NewTournament);
