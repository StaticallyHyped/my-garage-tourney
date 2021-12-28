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

const NewTournament = ({ hidden, playersCount, playersCart }) => {
  console.log("hidden");
  console.log(hidden);
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  //get all players the user has stored
  const collection = useSelector(selectCollection("players"));
  const { items } = collection;
  const playerPool = items.map((item) => {
    return {
      name: item.name,
    };
  });

  updatePlayersCartCollections(playerPool);
  console.log("playersCart");
  console.log(playersCart);
  //initialize the tourney cart and add the appropriate number of rows
  let tourneyPool = playerPool
    .filter((item) => item.name == "Seth")
    .map((item) => {
      return { name: item.name };
    });

  if (!hidden) {
    let i = 0;
    do {
      i++;
      tourneyPool.push({ name: "" });
    } while (i < playersCount - 1);
  }
  console.log(playerPool);

  return (
    <div className="new-tournament-page">
      <TourneySizeSelector />
      <div>
        {hidden ? null : (
          <Items>
            <Styles>
              <PlayersSelector columns={columns} data={playerPool} />
            </Styles>
            <ButtonContainer>
              <ButtonAddRemove />
            </ButtonContainer>
            <Styles>
              <PlayersSelector columns={columns} data={tourneyPool} />
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

const mapStateToProps = createStructuredSelector(
  {
    hidden: selectNewTourneyCartsHidden,
    playersCount: selectTournamentQuantity,
    playersCart: selectPlayersCartItems,
  },
  console.log("map state")
);

export default connect(mapStateToProps)(NewTournament);
