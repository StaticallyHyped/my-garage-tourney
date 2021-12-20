import React from "react";
import List from "react-list-select";
import "./players-selector.styles.scss";

const PlayersSelector = () => {
  let items = ["bob", "joe", "pete"];
  let list = <List items={items} selected={[0]} multiple={true} />;
  return (
    <div className="players-selector">
      <div className="players">{list}</div>
    </div>
  );
};

/* const mapStateToProps = (state, ownProps) => ({
  players: selectPlayerCollection,
}); */

//export default connect(mapStateToProps)(PlayersSelector);
export default PlayersSelector;
