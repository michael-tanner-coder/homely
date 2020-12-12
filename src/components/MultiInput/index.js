// Brief description (max 150 characters):
/*
  Component for storing multiple string inputs into an array.
  The component will render each string as a Chip component.
  Each chip can be deleted manually or all chips can be removed with the Clear All button.
*/

// Main dependencies
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import Input from "components/Input";
import Chip from "components/Chip";
import IconButton from "components/IconButton";

// Images
import CloseIcon from "img/CloseIcon.svg";

// Styles
import MultiInputWrapper from "./styles/MultiInput";

// Util
import toTitleCase from "util/toTitleCase";

const MultiInput = ({ placeholder, onUpdate, ...restProps }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const deleteItem = (item) => {
    console.log("Deleting");
    var temp_items = [...items];
    var index = temp_items.indexOf(item);
    if (index > -1) {
      temp_items.splice(index, 1);
      setItems(temp_items);
      console.log("Deleted");
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    console.log(items);
    onUpdate(items);
  }, [items]);

  return (
    <MultiInputWrapper {...restProps}>
      {items &&
        items.map((item) => (
          <Chip
            className="chip"
            label={item}
            key={"chip-" + item}
            onDelete={() => deleteItem(item)}
          />
        ))}
      <br />
      <Input
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={({ target }) => setValue(toTitleCase(target.value))}
        value={value}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (!items.includes(value)) {
              setItems([...items, value]);
            }
            setValue("");
          }
        }}
      ></Input>
      <IconButton
        className="clear-all"
        icon={CloseIcon}
        alt="Clear all"
        onClick={() => setItems([])}
      />
    </MultiInputWrapper>
  );
};

MultiInput.propTypes = {
  placeholder: PropTypes.string,
  onUpdate: PropTypes.func,
};

MultiInput.defaultProps = {
  placeholder: "",
  onUpdate: () => {
    console.log("updated");
  },
};

export default MultiInput;
