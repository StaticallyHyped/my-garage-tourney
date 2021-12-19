import React from "react";
import List from "react-list-select";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectPlayerCollection } from "../../redux/players/players.selector";
import "./players-selector.styles.scss";

const PlayersSelector = () => {
  let items = ["bob", "joe", "pete"];
  const { id } = useParams();
  console.log("aboveplayersplayers");
  //console.log(players);
  //const collection = useSelector(selectPlayerCollection(playerId));
  console.log("above player id");
  console.log(id);
  //let playerList = items.map((item) => )
  let list = <List items={items} selected={[0]} multiple={true} />;
  return (
    <div className="players-selector">
      <div className="player">{list}</div>
    </div>
  );
};

/* const mapStateToProps = (state, ownProps) => ({
  players: selectPlayerCollection,
}); */

//export default connect(mapStateToProps)(PlayersSelector);
export default PlayersSelector;
