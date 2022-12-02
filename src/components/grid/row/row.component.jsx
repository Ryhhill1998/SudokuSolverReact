const GridRow = ({ row, rowIndex }) => {
  return (
    <div
      className={`row ${
        rowIndex !== 0 && rowIndex % 3 === 0 ? "top-border" : ""
      }`}
    >
      {row.map((element, i) => (
        <div key={i} className={`square ${i % 3 === 0 ? "left-border" : ""}`}>
          {element ? element : ""}
        </div>
      ))}
    </div>
  );
};

export default GridRow;
