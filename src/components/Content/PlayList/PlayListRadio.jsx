import React from "react";
import { useSelector } from "react-redux";

const PlayListRadio = () => {
  const playlistRadio = useSelector((state) => state.radio.playlist);
  return <>somthing</>;
};

export default PlayListRadio;
