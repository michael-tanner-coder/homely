/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "components/Chip";
import TextField from "@material-ui/core/TextField";
import MultiSelectorWrapper from "./styles/MultiSelector";
export default function MultiSelector({ options, placeholder }) {
  return (
    <div>
      <MultiSelectorWrapper
        multiple
        id="tags-filled"
        options={options.map((option) => option.title)}
        defaultValue={[options[0].title]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label=""
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
}
