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

class Directory extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections, updatePlayersCartCollections } = this.props;
    console.log("PROPS");
    console.log(this.props);
    const collectionRef = firestore.collection("collections");
    console.log("update colls");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
    console.log("update colls");
  }

  render() {
    console.log("STATE");
    console.log(this.state);
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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
  updatePlayersCartCollections: (collectionsMap) =>
    dispatch(updatePlayersCartCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Directory);
