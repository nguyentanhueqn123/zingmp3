import React from "react";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const ZingchartPage = () => {
  const topCharts = useSelector((state) => state.zingchart.topCharts);
  const loading = useSelector((state) => state.zingchart.loading);

  return (
    <>
      <Table
        tableTitle="#zingchart"
        playlist={topCharts}
        loading={loading}
        showTop
        chart
      />
    </>
  );
};

export default ZingchartPage;
