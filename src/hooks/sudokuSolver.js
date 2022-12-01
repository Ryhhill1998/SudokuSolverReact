const gameBoard = [
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

const gameBoardIsFull = () => {
  let gameBoardFull = true;

  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].includes(0)) {
      gameBoardFull = false;
      break;
    }
  }

  return gameBoardFull;
};

const canPlaceNumber = (row, col, number) => {
  if (gameBoard[row].includes(number)) return false;

  if (getColumn(col).includes(number)) return false;

  return !getGrid(row, col).includes(number);
};

const getGrid = (row, col) => {
  const grid = [];

  const startRow = 3 * Math.floor(row / 3);
  const startCol = 3 * Math.floor(col / 3);

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      grid.push(gameBoard[i][j]);
    }
  }

  return grid;
};

const getColumn = (col) => {
  return gameBoard.map((row) => row[col]);
};

const solvePuzzle = (row, col) => {
  if (gameBoardIsFull()) return true;

  while (gameBoard[row][col] !== 0) {
    if (col == 8) {
      col = 0;
      row++;
    } else {
      col++;
    }
  }

  for (let i = 1; i <= 9; i++) {
    if (canPlaceNumber(row, col, i)) {
      gameBoard[row][col] = i;

      if (solvePuzzle(row, col)) {
        return true;
      } else {
        gameBoard[row][col] = 0;
      }
    }
  }

  return false;
};

const generateSolution = () => {
  if (!solvePuzzle(0, 0)) return false;

  return gameBoard;
};

export default generateSolution;
