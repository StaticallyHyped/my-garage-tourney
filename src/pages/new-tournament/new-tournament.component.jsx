import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";
import { connect, useSelector } from "react-redux";
import {
  ButtonAddRemove,
  ButtonContainer,
  Items,
  Styles,
} from "./new-tournament.styles";
import "./new-tournament.styles.scss";

import {
  selectCollection,
  selectCollectionsForTournament,
} from "../../redux/players/players.selector";
import { updatePlayersCartCollections } from "../../redux/players-cart/players-cart.actions";
import { createStructuredSelector } from "reselect";
import {
  selectNewTourneyCartsHidden,
  selectTournamentQuantity,
} from "../../redux/new-tournament/new-tournament.selectors";
import { selectPlayersCartItems } from "../../redux/players-cart/players-cart.selectors";
import { selectTourneyCartItems } from "../../redux/tourney-cart/tourney-cart.selectors";

const NewTournament = ({ hidden, playersCount, playersCart, tourneyCart }) => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  //initialize the tourney cart and add the appropriate number of rows
  if (!hidden) {
    let i = 0;
    do {
      i++;
      tourneyCart.push({ name: "" });
    } while (i < playersCount - 1);
  }

  return (
    <div className="new-tournament-page">
      <TourneySizeSelector />
      <div>
        {hidden ? null : (
          <Items>
            <Styles>
              <PlayersSelector columns={columns} data={playersCart} />
            </Styles>
            <ButtonContainer>
              <ButtonAddRemove />
            </ButtonContainer>
            <Styles>
              <PlayersSelector columns={columns} data={tourneyCart} />
            </Styles>
          </Items>
        )}
      </div>
    </div>
  );
};

/* const mapDispatchToProps = (dispatch) => ({
  updatePlayersCartCollections: (playersCartCollectionsMap) =>
    dispatch(updatePlayersCartCollections(playersCartCollectionsMap)),
}); */

const mapStateToProps = createStructuredSelector({
  hidden: selectNewTourneyCartsHidden,
  playersCount: selectTournamentQuantity,
  playersCart: selectPlayersCartItems,
  tourneyCart: selectTourneyCartItems,
});

export default connect(mapStateToProps)(NewTournament);
