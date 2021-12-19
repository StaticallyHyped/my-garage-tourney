import React from "react";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import NewTournament from "./pages/new-tournament/new-tournament.component";
import PrivateRoutes from "./pages/private-routes/PrivateRoutes";
import SignInPage from "./pages/sign-in/sign-in-page.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  /* get/set current user data */
  componentDidMount() {
    //progrommaticcally add our shop data, add it once
    const { setCurrentUser } = this.props;

    /* onAuthStateChanged is a function which takes a function which returns a 
    user state param. auth is the Authorization library we get from Firebase */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        /* subscribe/observe userRef for changes. Whenever the snapshot changes,
        pass the snapshot to the listener */
        userRef.onSnapshot((snapShot) => {
          //the redux method to set the current user
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      /* if the user logs out, set user to null */
      setCurrentUser(userAuth);
    });
  }

  /* this will unsubscribe the user on unMount */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-tourney" element={<NewTournament />} />
          <Route
            path="/signin"
            element={
              <PrivateRoutes currentUser={this.props.currentUser}>
                <SignInPage />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    );
  }
}

/* return the currentUser prop */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

/* the prop that we want to pass in to dispatch whatever action we want to pass.
Whatever object is being passed is an action object passed to every reducer. */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

/* */
export default connect(mapStateToProps, mapDispatchToProps)(App);
