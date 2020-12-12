// Brief description (max 150 characters):
/*
    Proxy for the material UI Input component.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Styles
import InputWrapper from "./styles/Input";

const Input = ({ label, children, ...restProps }) => {
  return (
    <InputWrapper inputProps={{ "aria-label": label }} {...restProps}>
      {children}
    </InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
