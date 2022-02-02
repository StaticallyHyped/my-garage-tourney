import React from "react";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/players/players.actions";
import HomepageButton from "../../components/homepage-button/homepage-button.component";
import "./directory.styles.scss";
import { updatePlayersCartCollections } from "../../redux/players-cart/players-cart.actions";
import { updateTourneyCartCollections } from "../../redux/tourney-cart/tourney-cart.actions";

class Directory extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {
      updateCollections,
      updatePlayersCartCollections,
      updateTourneyCartCollections,
    } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        //Player Collections
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);

        //New Tournament 'Carts'
        const { players } = collectionsMap;
        const { items } = players;
        const playerPool = items
          .filter((item) => item.name !== "Seth")
          .map((item) => {
            return {
              name: item.name,
            };
          });
        updatePlayersCartCollections(playerPool);
        const tourneyPool = items
          .filter((item) => item.name === "Seth")
          .map((item) => {
            return {
              name: item.name,
            };
          });
        updateTourneyCartCollections(tourneyPool);

        this.setState({ loading: false });
      }
    );
  }

  render() {
    return (
      <div className="directory-menu">
        <h1 className="title">Home Page</h1>
        <div className="items">
          <HomepageButton linkTo={"/newtourney"}>New Tournament</HomepageButton>
          <HomepageButton linkTo={"/"}>Continue Tournament</HomepageButton>
          <HomepageButton linkTo={"/"}>
            View Prior Tournament History
          </HomepageButton>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
    updatePlayersCartCollections: (collectionsMap) =>
      dispatch(updatePlayersCartCollections(collectionsMap)),
    updateTourneyCartCollections: (collectionsMap) =>
      dispatch(updateTourneyCartCollections(collectionsMap)),
  };
};

export default connect(null, mapDispatchToProps)(Directory);
