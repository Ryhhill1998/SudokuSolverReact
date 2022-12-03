import GridRow from "./row/row.component";

import "./grid.styles.css";

const Grid = ({ board, inputHandler }) => {
  return (
    <div className="grid-container">
      {board.map((row, i) => (
        <GridRow
          key={i}
          row={row}
          rowIndex={i}
          onChangeHandler={inputHandler}
        />
      ))}
    </div>
  );
};

export default Grid;
