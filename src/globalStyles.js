import { createGlobalStyle } from "styled-components";
import Scrollbar from "util/scrollbar.js";

const GlobalStyle = createGlobalStyle`

    * {
        font-family: "lato";
        box-sizing: border-box;
    }

    body {
        background-color: #F0EFF4;
    }

    .scroll-area {
        width: 100%;
        max-width: 320px;
        ${Scrollbar};
        overflow-y: scroll;
        height: 200px;
        margin: 0 auto;
    }

    .bg-red {
        background-color: red;
    }

    .bg-blue {
        background-color: blue;
    }

`;

export default GlobalStyle;
