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
import { createStructuredSelector } from "reselect";

const NewTournament = ({ hidden }) => {
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
  ]);

  const INITIAL_DATA = React.useMemo(() => [{ name: "" }]);

  const collection = useSelector(selectCollection("players"));
  const { items } = collection;
  const playerPool = items.map((item) => {
    return {
      name: item.name,
    };
  });

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
              <PlayersSelector columns={columns} data={INITIAL_DATA} />
            </Styles>
          </Items>
        )}
      </div>
    </div>
  );
};

/* const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
}); */

/* const mapStateToProps = (
  { newTournament: { hidden } },
  { collection: { collection } }
) => ({
  hidden,
  collection,
}); */

const mapStateToProps = ({ newTournament: { hidden } }) => ({
  hidden,
});

/* const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForTournament,
}); */

export default connect(mapStateToProps)(NewTournament);
//export default NewTournament;
