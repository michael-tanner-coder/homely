// Brief description (max 150 characters):
/*
 Generic table component based on the Material UI Table.
*/

// Main dependencies
import React from "react";
import PropTypes from "prop-types";

// Styles
import {
  TableWrapper,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "./styles/Table";

// To Do: fix scroll position

const Table = ({ columns, children, hasHead, caption, ...restProps }) => {
  return (
    <TableContainer>
      <TableWrapper {...restProps}>
        {caption && <caption>{caption}</caption>}
        {hasHead && (
          <TableHead>
            <TableRow>
              {columns.map((col) => {
                return <TableCell className="head-cell">{col}</TableCell>;
              })}
            </TableRow>
          </TableHead>
        )}

        <TableBody>{children}</TableBody>
      </TableWrapper>
    </TableContainer>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  caption: PropTypes.string.isRequired,
  hasHead: PropTypes.bool,
};

Table.defaultProps = {
  columns: ["Col 1", "Col 2", "Col 3", "Col 4"],
  hasHead: true,
};

export default Table;
