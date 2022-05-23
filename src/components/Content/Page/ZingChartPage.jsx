import React from "react";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const ZingChartPage = () => {
  const topCharts = useSelector((state) => state.zingChart.topCharts);
  const loading = useSelector((state) => state.zingChart.loading);

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

export default ZingChartPage;
