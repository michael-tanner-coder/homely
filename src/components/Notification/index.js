// Brief description (max 150 characters):
/*
    Component for displaying text-only notifications to the user.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Dialog from "@material-ui/core/Dialog";
import IconButton from "components/IconButton";

// Styles
import NotificationWrapper from "./styles/Notification";

// Images
import CloseIcon from "img/CloseIcon.svg";

const Notification = ({
  style: StyleWrapper = NotificationWrapper,
  handleClose,
  title,
  body,
  ...restProps
}) => {
  return (
    <NotificationWrapper
      aria-describedby={body}
      aria-labelledby={title}
      {...restProps}
    >
      <div className="close-row">
        <IconButton icon={CloseIcon} onClick={handleClose} />
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  handleClose: () => {
    console.log("closed");
  },
};

export default Notification;
