import styled from "styled-components/macro";
import { BaseTable } from "framework";
import { BaseTableCell } from "framework";
import { BaseTableRow } from "framework";
import { BaseTableHead } from "framework";
import { BaseTableBody } from "framework";
import { BaseTableContainer } from "framework";
import Paper from "util/paper";
import Scrollbar from "util/scrollbar";

export const TableWrapper = styled(BaseTable)``;

export const TableCell = styled(BaseTableCell)``;

export const TableRow = styled(BaseTableRow)``;

export const TableHead = styled(BaseTableHead)`
  .head-cell {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const TableBody = styled(BaseTableBody)``;

export const TableContainer = styled(BaseTableContainer)`
  ${Paper};
  box-shadow: 20px 20px 60px rgba(204, 203, 207, 0.62);
  ${Scrollbar};
  max-height: 405px;
`;
