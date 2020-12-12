// Brief description (max 150 characters):
/*
 Layout for a basic section of the SPA. Holds a heading and a data container for the body.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import { BaseGrid as Grid } from "framework";

// Styles
import SectionWrapper from "./styles/Section";

const Section = ({ heading, body, ...restProps }) => {
  return (
    <SectionWrapper {...restProps}>
      <Grid
        className="section-header"
        direction="row"
        justify-content="flex-start"
      >
        <h2>{heading}</h2>
      </Grid>
      <div className="section-body">{body}</div>
    </SectionWrapper>
  );
};

Section.propTypes = {};

Section.defaultProps = {};

export default Section;
