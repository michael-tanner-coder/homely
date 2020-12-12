import styled from "styled-components/macro";
import { BaseToolbar } from "framework";
import { BaseAppbar } from "framework";

export const Toolbar = styled(BaseToolbar)`
  justify-content: space-around;

  .brand {
    font-size: 32px;
    font-style: italic;
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: 568px) {
    p {
      display: none;
    }
  }
`;

export const Appbar = styled(BaseAppbar)``;
