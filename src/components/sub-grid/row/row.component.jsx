import { Fragment } from "react";

import SubCol from "../col/col.component";

const SubRow = ({ position }) => {
  return (
    <Fragment>
      <div className={`sub-row sub-row-${position}`}>
        {[0, 0, 0].map((_, j) => (
          <SubCol key={j} position={j + 1} />
        ))}
      </div>
    </Fragment>
  );
};

export default SubRow;
