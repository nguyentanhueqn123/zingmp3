import React from "react";
import { useSelector } from "react-redux";
import Table from "../Table/Table";

const NhacMoiPage = () => {
  const newSongs = useSelector((state) => state.moiphathanh.newSongs);
  const loading = useSelector((state) => state.moiphathanh.loading);

  return (
    <>
      <Table tableTitle="Mới Phát Hành" playlist={newSongs} loading={loading} />
    </>
  );
};

export default NhacMoiPage;
