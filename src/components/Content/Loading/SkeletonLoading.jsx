import React from "react";
import clsx from "clsx";

const SkeletonLoading = ({ laptop, tablet, mobile, num = 3, mt }) => {
  const custom = clsx("col", [laptop, tablet, mobile]);

  let list = [];
  const handleNumber = () => {
    for (let i = 0; i < num; i++) {
      list.push(num);
    }
    return list;
  };

  return (
    <div className={clsx("grid", { [mt]: mt })}>
      <div className="row">
        {handleNumber().map((item, i) => (
          <div className={custom} key={i}>
            <div className="skeleton"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoading;
