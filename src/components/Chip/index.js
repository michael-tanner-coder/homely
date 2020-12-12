// Brief description (max 150 characters):
/*
    Basic chip component to hold simple selectable data
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Styles
import ChipWrapper from "./styles/Chip";

const Chip = ({ ...restProps }) => {
  return <ChipWrapper {...restProps}></ChipWrapper>;
};

Chip.propTypes = {};

Chip.defaultProps = {};

export default Chip;
