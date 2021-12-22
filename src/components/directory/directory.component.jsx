import React from "react";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/players/players.actions";
import HomepageButton from "../../components/homepage-button/homepage-button.component";
import NewTournament from "../../pages/new-tournament/new-tournament.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import "./directory.styles.scss";

const NewTournamentWithSpinner = WithSpinner(NewTournament);

class Directory extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    console.log(this.state);
    const { loading } = this.state;
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
});

export default connect(null, mapDispatchToProps)(Directory);
