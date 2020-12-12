import styled from "styled-components/macro";
import { BaseDialog } from "framework";
import Paper from "util/paper";

const NotificationWrapper = styled(BaseDialog)`
  .MuiPaper-root {
    ${Paper};
    padding-bottom: 1.5rem;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
  }

  h2 {
    color: #832161;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 1rem;
  }

  p {
    font-style: normal;
    font-size: 24px;
    line-height: 29px;
    margin: 0;
  }

  .close-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      padding: 0;
    }
  }
`;

export default NotificationWrapper;
