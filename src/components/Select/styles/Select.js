import styled from "styled-components/macro";
import { BaseSelect } from "framework";
import Input from "util/input";

const SelectWrapper = styled(BaseSelect)`
  .MuiInputBase-root,
  .MuiSelect-root {
    ${Input};

    margin: 0;
    text-align: center;
    padding: 0.6rem 1.3rem;
  }

  /* Remove underline */
  &&:before,
  &&:after {
    border: none;
  }

  /* Selection shadow */
  &&:hover,
  &&:focus,
  &&:active {
    &&:before,
    &&:after {
      border: none;
    }
  }
`;

export default SelectWrapper;
