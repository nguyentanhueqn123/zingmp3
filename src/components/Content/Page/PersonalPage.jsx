import React from "react";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const PersonalPage = () => {
  const topCharts = useSelector((state) => state.zingChart.topCharts);
  const loading = useSelector((state) => state.zingChart.loading);

  return (
    <>
      <Table tableTitle="Thư viện" playlist={topCharts} loading={loading} />
    </>
  );
};

export default PersonalPage;
