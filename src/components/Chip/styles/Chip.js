import styled from "styled-components/macro";
import { BaseChip } from "framework";
import Paper from "util/paper";
import Float from "util/float";
const ChipWrapper = styled(BaseChip)`
  ${Paper};
  ${Float};
  color: rgba(0, 0, 0, 0.35);
  font-weight: bold;
  font-size: 20px;
  padding: 1.3rem;
`;

export default ChipWrapper;
