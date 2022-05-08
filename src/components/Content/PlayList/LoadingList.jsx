import React from "react";

const LoadingList = () => {
  return (
    <div className="grid mt-4">
      <div className="row ">
        <div className="col l-2 skeleton"></div>
        <div className="col l-2 skeleton"></div>
        <div className="col l-2 skeleton"></div>
        <div className="col l-2 skeleton"></div>
        <div className="col l-2 skeleton"></div>
      </div>
    </div>
  );
};

export default LoadingList;
