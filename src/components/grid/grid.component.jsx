import { Fragment } from "react";

import GridRow from "./row/row.component";

import "./grid.styles.css";

const board = [
  [
    [
      [0, 6, 0],
      [1, 0, 0],
      [3, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [9, 0, 8],
    ],
    [
      [3, 0, 0],
      [4, 2, 9],
      [0, 0, 0],
    ],
  ],
  [
    [
      [7, 0, 0],
      [0, 0, 8],
      [4, 0, 0],
    ],
    [
      [0, 0, 4],
      [0, 0, 0],
      [1, 5, 0],
    ],
    [
      [0, 0, 6],
      [0, 0, 5],
      [0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0],
      [6, 4, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 9],
      [0, 0, 0],
      [0, 7, 0],
    ],
    [
      [0, 1, 0],
      [2, 5, 0],
      [9, 0, 0],
    ],
  ],
];

const Grid = () => {
  return (
    <Fragment>
      {board.map((row, i) => (
        <GridRow key={i} position={i + 1} row={row} />
      ))}
    </Fragment>
  );
};

export default Grid;
