// Brief description (max 150 characters):
/*
 Proxy component for the material UI IconButton.
 See the MUI documentation for more details about the original component.

//  NOTE: This component needs a webpack configuration to accept all SVG files.
          The img tag currently used is only a temporary solution to this problem
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Typography from "@material-ui/core/Typography";

// Styles
import IconButtonWrapper from "./styles/IconButton";

const IconButton = ({ icon, alt, text, ...restProps }) => {
  return (
    <IconButtonWrapper>
      <button {...restProps}>
        {text && (
          <Typography color="inherit" display="inline">
            {text}
          </Typography>
        )}
        <img alt={alt} src={icon} />
      </button>
    </IconButtonWrapper>
  );
};

IconButton.propTypes = {
  alt: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default IconButton;
