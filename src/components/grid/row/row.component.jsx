const GridRow = ({ row }) => {
  return (
    <div className="row">
      {row.map((element) => (
        <div className="square">{element}</div>
      ))}
    </div>
  );
};

export default GridRow;
