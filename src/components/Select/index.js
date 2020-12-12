// Brief description (max 150 characters):
/*
 Generic dropdown selection component based on the Material UI Select component.
*/

// Main dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import SelectWrapper from "./styles/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
const Select = ({ label, options, ...restProps }) => {
  const [value, setValue] = useState(label);
  return (
    <FormControl>
      <SelectWrapper
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...restProps}
        labelId={label}
        renderValue={(selected) => {
          if (!selected) return <p>{label}</p>;
          return selected;
        }}
      >
        <option disabled value="">
          {label}
        </option>
        {options &&
          options.map((option) => (
            <option key={label + option} value={option}>
              {option}
            </option>
          ))}
      </SelectWrapper>
    </FormControl>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string.isRequired,
};

Select.defaultProps = {
  options: [],
};

export default Select;
