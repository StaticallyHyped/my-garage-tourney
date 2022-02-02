import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";
import ContinueButton from "../../components/continue-button/continue-button.components";
import { connect } from "react-redux";
import {
  resetNewTourneyReducer,
  submitQuantity,
  updatePlayerPoolCollection,
  updateTourneyPoolCollection,
} from "../../redux/new-tournament/new-tournament.actions";
import { updateTourneyCartCollections } from "../../redux/tourney-cart/tourney-cart.actions";
import { updatePlayersCartCollections } from "../../redux/players-cart/players-cart.actions";
import {
  ButtonAddRemove,
  ButtonContainer,
  Items,
  Styles,
} from "./new-tournament.styles";
import "./new-tournament.styles.scss";

import { createStructuredSelector } from "reselect";
import {
  selectPlayerPoolItems,
  selectTournamentQuantity,
} from "../../redux/new-tournament/new-tournament.selectors";
import { selectPlayersCartItems } from "../../redux/players-cart/players-cart.selectors";
import { selectTourneyCartItems } from "../../redux/tourney-cart/tourney-cart.selectors";
import { addItemsToTourneyCart } from "../../redux/tourney-cart/tourney-cart.utils";
import { removeItemsFromPlayerCart } from "../../redux/players-cart/players-cart.utils";
import { removePlayerItems } from "../../redux/players-cart/players-cart.actions";

const NewTournament = ({
  playersCount,
  playersCart,
  tourneyCart,
  playerPool,
  dispatch,
}) => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  //initialize the tourney cart and add the appropriate number of rows
  const tourneyPool = tourneyCart.map((item) => {
    return {
      name: item.name,
    };
  });

  let i = 0;
  do {
    tourneyPool.push({ name: "" });
    i++;
  } while (i < playersCount - tourneyCart.length);

  console.log("playerPool");
  console.log(playerPool);
  console.log("playersCart");
  console.log(playersCart);
  return (
    <div className="new-tournament-page">
      <TourneySizeSelector maxValue={playersCart.length} />
      <div>
        <Items>
          <Styles>
            <PlayersSelector
              columns={columns}
              data={playersCart}
              tableId={"player"}
            />
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
            <PlayersSelector
              columns={columns}
              data={tourneyPool}
              tableId={"tourney"}
            />
          </Styles>
        </Items>
      </div>
      <div className="continue-button">
        <button onClick={() => dispatch(resetNewTourneyReducer())}>
          CLEAR
        </button>
        <ContinueButton onClick={() => contButtonSelected(playersCart)} />
      </div>
    </div>
  );
};

const contButtonSelected = (playersCart) => {
  console.log("playersCart");
  console.log(playersCart);
};

const mapStateToProps = createStructuredSelector({
  playersCount: selectTournamentQuantity,
  playersCart: selectPlayersCartItems,
  tourneyCart: selectTourneyCartItems,
  playerPool: selectPlayerPoolItems,
});

export default connect(mapStateToProps)(NewTournament);
