import styled from "styled-components/macro";
import { BaseDialog } from "framework";
import { BaseDialogTitle } from "framework";
import { BaseDialogContent } from "framework";
import { BaseDialogActions } from "framework";
import Paper from "util/paper";

export const GuideWrapper = styled(BaseDialog)`
  && {
    .MuiPaper-root {
      ${Paper};
      border-radius: 0px 16px 16px 16px;
      width: 100%;
      max-width: 430px;
    }
  }
`;

export const GuideTitle = styled(BaseDialogTitle)`
  && {
    text-transform: capitalize;
    padding: 0;

    h2 {
      font-size: 36px;
      line-height: 43px;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }
  }
`;

export const GuideContent = styled(BaseDialogContent)`
  && {
    line-height: 22px;
    padding: 0;

    p {
      font-size: 18px;
      margin-top: 0;
    }
  }
`;

export const GuideActions = styled(BaseDialogActions)`
  && {
    margin-top: 0.3rem;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
