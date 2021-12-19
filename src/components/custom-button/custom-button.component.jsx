import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  /* conditionally render the className of the button based on the prop value.
    if google signin is true, use className 'google-sign-in', else nothing  */
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
