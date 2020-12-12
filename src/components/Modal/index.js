// Brief description (max 150 characters):
/*
    Generic Modal component. Based on the Material UI Modal component.
    Requires a title and description for accessibility.

    "hasConfirm" property allows the user to select whether or not the modal 
    has a default "Confirm" button

    This component serves as a base for all other modals components stemming 
    from it.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Styles
import ModalWrapper from "./styles/Modal";
import Button from "components/Button";

const Modal = ({
  children,
  title,
  description,
  controls,
  handleConfirm,
  hasConfirm,
  ...restProps
}) => {
  return (
    <ModalWrapper
      aria-labelledby={title}
      aria-describedby={description}
      {...restProps}
    >
      <h2>{title}</h2>
      <section className="modal-controls">
        {controls &&
          controls.map((control) => {
            return control;
          })}
      </section>
      {hasConfirm && <Button onClick={handleConfirm}>Confirm</Button>}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  controls: PropTypes.array,
  hasConfirm: PropTypes.bool,
  handleConfirm: PropTypes.func,
};

Modal.defaultProps = {
  controls: [],
  hasConfirm: true,
  handleConfirm: () => {
    console.log("Confirm");
  },
};

export default Modal;
