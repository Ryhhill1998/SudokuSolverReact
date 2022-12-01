import { Fragment } from "react";

import SubCol from "./sub-col/sub-col.component";

import "./sub-grid.styles.css";

const SubGrid = ({ grid }) => {
  return (
    <Fragment>
      {grid.map((col, i) => (
        <SubCol key={i} rowIndex={i} col={col} />
      ))}
    </Fragment>
  );
};

export default SubGrid;
