import Grid from "./components/grid/grid.component";

import "./App.css";

import generateSolution from "./hooks/sudokuSolver";

import { useState } from "react";

const boardDefault = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const App = () => {
  const [board, setBoard] = useState(boardDefault);

  const showSolvedBoard = () => {
    const solution = generateSolution(board);
    if (!solution) console.log("No solution possible");
    setBoard([...solution]);
  };

  const updateBoard = ({ target }) => {
    let { value } = target;
    value = value === "" ? 0 : Number.parseInt(value);

    if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) return;

    const [row, col] = target.id.split("-");

    setBoard(() => {
      const updatedBoard = [...board];
      updatedBoard[row][col] = value;
      return updatedBoard;
    });
  };

  return (
    <div className="app-container">
      <h1>SUDOKU SOLVER</h1>
      <Grid board={board} inputHandler={updateBoard} />
      <div>
        <button className="button solve-button" onClick={showSolvedBoard}>
          Solve
        </button>
      </div>
    </div>
  );
};

export default App;
