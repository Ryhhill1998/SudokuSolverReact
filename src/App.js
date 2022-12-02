import Grid from "./components/grid/grid.component";

import "./App.css";

import generateSolution from "./hooks/sudokuSolver";

import { useState } from "react";

const boardDefault = [
  [0, 6, 0, 0, 0, 0, 3, 0, 0],
  [1, 0, 0, 0, 0, 0, 4, 2, 9],
  [3, 0, 0, 9, 0, 8, 0, 0, 0],
  [7, 0, 0, 0, 0, 4, 0, 0, 6],
  [0, 0, 8, 0, 0, 0, 0, 0, 5],
  [4, 0, 0, 1, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 9, 0, 1, 0],
  [6, 4, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 7, 0, 9, 0, 0],
];

const board1 = [
  [3, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 5, 0, 0, 9, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 0, 9, 2, 6],
  [0, 0, 0, 1, 0, 2, 7, 3, 0],
  [0, 3, 0, 0, 7, 9, 0, 0, 0],
  [7, 0, 4, 0, 0, 0, 0, 1, 0],
  [4, 2, 0, 9, 0, 0, 5, 6, 0],
  [0, 0, 5, 0, 8, 7, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 0, 9, 0],
];

const boards = [boardDefault, board1];

const App = () => {
  const [board, setBoard] = useState(boardDefault);

  const printSolvedBoard = () => {
    const solution = generateSolution();
    setBoard(solution);
  };

  const generateNewBoard = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    setBoard(boards[randomIndex]);
  };

  return (
    <div className="app-container">
      <h1>SUDOKU SOLVER</h1>
      <Grid board={board} />
      <div>
        <button className="button generate-button" onClick={generateNewBoard}>
          Generate
        </button>
        <button className="button solve-button" onClick={printSolvedBoard}>
          Solve
        </button>
      </div>
    </div>
  );
};

export default App;
