import { css } from "styled-components/macro";
import Paper from "util/paper";
const Input = css`
  /* Material */
  ${Paper}

  /* Neu Shadow */
  transition: box-shadow 0.3s;
  box-shadow: 20px 20px 60px rgba(204, 203, 207, 0.62);

  /* Typography */
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: rgba(0, 0, 0, 0.35);
  input {
    text-align: center;
  }

  /* Spacing/Size */
  padding: 0.2rem 1.3rem;
  width: 100%;
  max-width: 400px;

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

    box-shadow: 10px 10px 120px #6f1c5240;
  }
`;

export default Input;
