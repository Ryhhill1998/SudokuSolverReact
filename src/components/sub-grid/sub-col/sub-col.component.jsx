import { Fragment } from "react";

const SubCol = ({ col }) => {
  return (
    <Fragment>
      <div className="sub-col">
        {col.map((el, j) => (
          <div key={j} className="space">
            {el}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SubCol;
