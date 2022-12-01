const board = [
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

const boardIsFull = () => {
  board.forEach((row) => {
    row.forEach((quadrant) => {
      quadrant.forEach((subRow) => {
        subRow.forEach((square) => {
          if (square == 0) return false;
        });
      });
    });
  });

  return true;
};

const canPlaceNumber = (row, quadrant, subRow, subCol, number) => {};

const solvePuzzle = () => {
  if (boardIsFull()) return true;
};
