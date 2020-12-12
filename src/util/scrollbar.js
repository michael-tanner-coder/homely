import { css } from "styled-components";

const Scrollbar = css`
  /* Width */
  ::-webkit-scrollbar {
    width: 10px;
    background: none;
    border-radius: 16px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
    background-clip: padding-box;
    border: 6px solid rgba(0, 0, 0, 0);
    border-radius: 6px;
    margin: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #832161;
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 6px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #3d2645;
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
  }
`;

export default Scrollbar;
