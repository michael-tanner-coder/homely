// Brief description (max 150 characters):
/*
 Layout for the room section of the SPA. Holds the room container and room heading.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import RoomContainer from "containers/RoomContainer";
import Section from "layouts/Section";

// Styles
import RoomSectionWrapper from "./styles/RoomSection";

const RoomSection = (props) => {
  return (
    <RoomSectionWrapper {...props}>
      <Section
        heading="Rooms"
        body={<RoomContainer className="room-grid" />}
      ></Section>
    </RoomSectionWrapper>
  );
};

RoomSection.propTypes = {};

RoomSection.defaultProps = {};

export default RoomSection;
