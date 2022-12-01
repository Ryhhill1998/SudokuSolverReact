import { Fragment } from "react";

import SubRow from "./row/row.component";

import "./sub-grid.styles.css";

const SubGrid = () => {
  return (
    <Fragment>
      {[0, 0, 0].map((_, i) => (
        <SubRow key={i} />
      ))}
    </Fragment>
  );
};

export default SubGrid;
