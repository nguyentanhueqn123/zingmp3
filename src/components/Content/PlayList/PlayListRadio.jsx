import React from "react";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";
import LoadingList from "./LoadingList";

const PlayListRadio = () => {
  const playlistRadio = useSelector((state) => state.radio.playlist);

  console.log(playlistRadio);

  return <>somthing</>;
};

export default PlayListRadio;
