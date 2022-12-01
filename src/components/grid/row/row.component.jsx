import { Fragment } from "react";

import GridCol from "../col/col.component";

const GridRow = ({ position }) => {
  return (
    <Fragment>
      <div className={`row row-${position}`}>
        {[0, 0, 0].map((_, j) => (
          <GridCol key={j} position={j + 1} />
        ))}
      </div>
    </Fragment>
  );
};

export default GridRow;
