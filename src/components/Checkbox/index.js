// Brief description (max 150 characters):
/*
 Custom checkbox component. 
 Holds its own checked/unchecked state. 
 Accepts external values through the "precheck" property

 NOTE: the property named "precheck" may need a name change. It is not immediately clear what it does.
*/

// Main dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import HiddenCheckbox from "./styles/HiddenCheckbox";

// Images
import CheckedBtn from "img/Checkbox--Checked.svg";
import UncheckedBtn from "img/Checkbox--unchecked.svg";

// INCLUDE TRANSITION ANIMATION

const Checkbox = ({ check, label, tabindex, ...restProps }) => {
  const [checked, setChecked] = useState(check || false);

  return (
    <div {...restProps}>
      <img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer" }}
        src={checked ? CheckedBtn : UncheckedBtn}
        onClick={() => setChecked((checked) => !checked)}
        alt={label}
      />
      <HiddenCheckbox
        defaultChecked={checked}
        role="checkbox"
        aria-checked={check}
        tabindex={tabindex}
        aria-labelledby={label}
        {...restProps}
      />
    </div>
  );
};

Checkbox.propTypes = {
  check: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  tabindex: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  check: false,
};

export default Checkbox;
