import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/reducer/homeSlice";

const useFetchDataHook = (keyword) => {
  const dispatch = useDispatch();
  const handleSearch = async () => {
    const { data } = await axios.get(
      `https://music-player-pink.vercel.app/api/search?keyword=${keyword}`
    );
    dispatch(setSearch(data.data));
  };
  return [handleSearch];
};

export default useFetchDataHook;
