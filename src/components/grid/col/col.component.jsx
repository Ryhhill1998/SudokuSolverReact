import { Fragment } from "react";

import SubGrid from "../../sub-grid/sub-grid.component";

const GridCol = ({ position, col }) => {
  return (
    <Fragment>
      <div className="col">
        <SubGrid grid={col} />
      </div>
    </Fragment>
  );
};

export default GridCol;
