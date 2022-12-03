const gameBoardIsFull = (gameBoard) => {
  let gameBoardFull = true;

  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].includes(0)) {
      gameBoardFull = false;
      break;
    }
  }

  return gameBoardFull;
};

const canPlaceNumber = (gameBoard, row, col, number) => {
  if (gameBoard[row].includes(number)) return false;

  if (getColumn(gameBoard, col).includes(number)) return false;

  return !getGrid(gameBoard, row, col).includes(number);
};

const getGrid = (gameBoard, row, col) => {
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

const getColumn = (gameBoard, col) => {
  return gameBoard.map((row) => row[col]);
};

const solvePuzzle = (gameBoard, row, col) => {
  if (gameBoardIsFull(gameBoard)) return true;

  while (gameBoard[row][col] !== 0) {
    if (col == 8) {
      col = 0;
      row++;
    } else {
      col++;
    }
  }

  for (let i = 1; i <= 9; i++) {
    if (canPlaceNumber(gameBoard, row, col, i)) {
      gameBoard[row][col] = i;

      if (solvePuzzle(gameBoard, row, col)) {
        return true;
      } else {
        gameBoard[row][col] = 0;
      }
    }
  }

  return false;
};

const generateSolution = (gameBoard) => {
  console.log(gameBoard);
  if (!solvePuzzle(gameBoard, 0, 0)) return false;

  return gameBoard;
};

export default generateSolution;
