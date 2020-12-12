// Brief description (max 150 characters):
/*
 Generic button component. Based on the Material UI button. 
 See MUI documentation for details about styling, properties, etc.
*/

// Main dependencies
import React from "react";

// Styles
import ButtonWrapper from "./styles/Button";

const Button = ({ children, ...restProps }) => {
  return (
    <ButtonWrapper variant="contained" color="primary" {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
