import React from "react";
import TourneySizeSelector from "../../components/player-num-select/tourney-size-selector.components";
import PlayersSelector from "../../components/players-selector/players-selector.component";

class NewTournament extends React.Component {
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
