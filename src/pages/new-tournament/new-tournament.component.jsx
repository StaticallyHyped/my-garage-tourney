import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";
import { connect } from "react-redux";
import { Items, PlayerSelectorContainer } from "./new-tournament.styles";
import "./new-tournament.styles.scss";
import { useParams } from "react-router-dom";

const NewTournament = ({ hidden }) => {
  console.log("hidden " + hidden);
  const { collectionId } = useParams();
  console.log("collection id " + collectionId);
  return (
    <div className="new-tournament-page">
      <TourneySizeSelector />
      <div>
        {hidden ? null : (
          <Items>
            <div>
              <PlayersSelector />
            </div>
            <div>
              <PlayersSelector />
            </div>
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
const mapStateToProps = ({ newTournament: { hidden } }) => ({
  hidden,
});

//export default connect(null, mapDispatchToProps)(NewTournament);
export default connect(mapStateToProps)(NewTournament);
