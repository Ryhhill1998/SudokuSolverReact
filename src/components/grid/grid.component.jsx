import { Fragment } from "react";

import GridRow from "./row/row.component";

import "./grid.styles.css";

const Grid = ({ board }) => {
  return (
    <div className="grid-container">
      {board.map((row, i) => (
        <GridRow key={i} row={row} rowIndex={i} />
      ))}
    </div>
  );
};

export default Grid;
