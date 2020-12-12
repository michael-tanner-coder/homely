// Brief description (max 150 characters):
/*
 Component for displaying tutorial dialogs in the user onboarding sequence
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Button from "components/Button";

// Styles
import {
  GuideWrapper,
  GuideTitle,
  GuideContent,
  GuideActions,
} from "./styles/Guide";

const Guide = ({
  title,
  content,
  confirmText,
  handleConfirm,
  ...restProps
}) => {
  return (
    <GuideWrapper {...restProps}>
      <GuideTitle>{title}</GuideTitle>
      <GuideContent>
        <p>{content}</p>
      </GuideContent>
      <GuideActions>
        <Button onClick={handleConfirm}>{confirmText}</Button>
      </GuideActions>
    </GuideWrapper>
  );
};

Guide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  confirmText: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

Guide.defaultProps = {
  title: "Guide Title",
  content: "Guide content",
  confirmText: "confirm",
  handleConfirm: () => {
    console.log("Confirm");
  },
};

export default Guide;
