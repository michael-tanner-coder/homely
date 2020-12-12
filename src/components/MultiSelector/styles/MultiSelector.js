import styled from "styled-components/macro";
import { BaseAutocomplete } from "framework";
import Input from "util/input";
const MultiSelectWrapper = styled(BaseAutocomplete)`
  ${Input};
  .MuiAutocomplete-inputRoot {
    background: transparent;
    padding: 0;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  .MuiFilledInput-underline {
    &&:before,
    &&:after {
      border: none;
    }
  }
`;

export default MultiSelectWrapper;
