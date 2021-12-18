import React from "react";

import { HomepageButtonContainer } from "./homepage-button.styles";

const HomepageButton = ({ children, linkTo }) => {
  return (
    <HomepageButtonContainer to={linkTo}>{children}</HomepageButtonContainer>
  );
};

export default HomepageButton;
