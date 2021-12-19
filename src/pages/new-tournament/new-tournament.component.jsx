import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";

class NewTournament extends React.Component {
  state = {
    players: [],
  };

  render() {
    return (
      <div>
        <TourneySizeSelector />
        <PlayersSelector />
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
}); */

//export default connect(null, mapDispatchToProps)(NewTournament);
export default NewTournament;
