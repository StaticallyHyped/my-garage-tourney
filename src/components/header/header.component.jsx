import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/bracket.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  console.log("currentUser");
  console.log(currentUser);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/">Home</OptionLink>
        <OptionLink to="/new-tourney">New Tournament</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

/* Get the state object. This state is the Root Reducer. Destructure the nested value*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

/* use connect(mapStateToProps) wherever we need properties from our reducers */
export default connect(mapStateToProps)(Header);
//export default Header;
