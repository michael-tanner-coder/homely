import styled from "styled-components/macro";
import { BaseDialog } from "framework";
import Scrollbar from "util/scrollbar";
import Paper from "util/paper";
const ModalWrapper = styled(BaseDialog)`
  h2 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  section {
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }

  .MuiPaper-root {
    ${Paper};
    width: 100%;
    max-width: 280px;
    padding-top: 1.5rem;
    ${Scrollbar};
  }

  .modal-controls {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;

    height: fit-content;

    > div,
    > button {
      margin-bottom: 3rem;
    }
  }
`;

export default ModalWrapper;
