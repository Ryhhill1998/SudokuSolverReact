import { Fragment } from "react";

const SubCol = ({ position }) => {
  return (
    <Fragment>
      <div className={`sub-col sub-col-${position}`}></div>
    </Fragment>
  );
};

export default SubCol;
