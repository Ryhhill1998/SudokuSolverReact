const GridRow = ({ row, rowIndex, onChangeHandler }) => {
  return (
    <div
      className={`row ${
        rowIndex !== 0 && rowIndex % 3 === 0 ? "top-border" : ""
      }`}
    >
      {row.map((element, i) => (
        <input
          key={i}
          id={`${rowIndex}-${i}`}
          className={`square${i % 3 === 0 ? " left-border" : ""}`}
          type="text"
          maxLength="1"
          value={element ? element : ""}
          onChange={onChangeHandler}
        />
      ))}
    </div>
  );
};

export default GridRow;
