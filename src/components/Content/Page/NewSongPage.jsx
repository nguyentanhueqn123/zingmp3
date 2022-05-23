import React from "react";
import { useSelector } from "react-redux";
import Table from "../Table/Table";

const NewSongPage = () => {
  const newSongs = useSelector((state) => state.newSong.newSongs);
  const loading = useSelector((state) => state.newSong.loading);

  return (
    <>
      <Table tableTitle="Mới Phát Hành" playlist={newSongs} loading={loading} />
    </>
  );
};

export default NewSongPage;
