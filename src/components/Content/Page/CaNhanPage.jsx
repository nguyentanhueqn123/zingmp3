import React from "react";
import clsx from "clsx";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const CaNhanPage = () => {
  const topCharts = useSelector((state) => state.zingchart.topCharts);
  const loading = useSelector((state) => state.zingchart.loading);

  return (
    <>
      <Table tableTitle="Thư viện" playlist={topCharts} loading={loading} />
    </>
  );
};

export default CaNhanPage;
