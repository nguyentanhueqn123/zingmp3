import React, { useEffect } from "react";
import axios from "axios";
import TableMoiPhatHanh from "../Table/TableMoiPhatHanh";
import { useDispatch } from "react-redux";
import { showNewSong } from "../../../redux/reducer/moiphathanhSlice";

const NhacMoiPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getApiNhacMoiPage = async () => {
      const res = await axios
        .get("https://music-player-pink.vercel.app/api/home?page=4")
        .then((res) => {
          dispatch(showNewSong(res.data.data.items[0].items));
        })
        .catch((err) => console.log(err));
    };
    getApiNhacMoiPage();
  }, []);
  return (
    <>
      <TableMoiPhatHanh tableTitle="Mới Phát Hành" />
    </>
  );
};

export default NhacMoiPage;
