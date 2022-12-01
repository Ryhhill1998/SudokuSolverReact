import { Fragment } from "react";

import GridCol from "../col/col.component";

const GridRow = ({ position, row }) => {
  return (
    <Fragment>
      <div className={`row row-${position}`}>
        {row.map((col, j) => (
          <GridCol key={j} position={j + 1} col={col} />
        ))}
      </div>
    </Fragment>
  );
};

export default GridRow;
