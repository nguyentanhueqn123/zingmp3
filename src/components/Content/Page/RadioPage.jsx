import React, { useEffect } from "react";
import axios from "axios";
import Slide from "../Slide/Slide";
import { useDispatch } from "react-redux";
import {
  renderLiveStream,
  renderPlaylist,
} from "../../../redux/reducer/radioSlice";

const RadioPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getApiRadio = async () => {
      await axios
        .get("https://music-player-pink.vercel.app/api/home?page=2")
        .then((res) => {
          dispatch(renderLiveStream(res.data.data.items[0].items));
          dispatch(renderPlaylist(res.data.data.items[1].items));
        })

        .catch((err) => console.log(err));
    };
    getApiRadio();
  }, [dispatch]);

  return (
    <>
      <Slide circle />
    </>
  );
};

export default RadioPage;
