import { Fragment } from "react";

import SubGrid from "../../sub-grid/sub-grid.component";

const GridCol = ({ position }) => {
  return (
    <Fragment>
      <div className={`col col-${position}`}>
        <SubGrid />
      </div>
    </Fragment>
  );
};

export default GridCol;
