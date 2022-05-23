import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "./reducer/exploreSlice";
import zingChartSlice from "./reducer/zingChartSlice";
import songSlice from "./reducer/songSlice";
import homeSlice from "./reducer/homeSlice";
import radioSlice from "./reducer/radioSlice";
import newSongSlice from "./reducer/newSongSlice";
import mvSlice from "./reducer/mvSlice";
import followSlice from "./reducer/followSlice";

export const store = configureStore({
  reducer: {
    explore: exploreSlice,
    zingChart: zingChartSlice,
    song: songSlice,
    home: homeSlice,
    radio: radioSlice,
    newSong: newSongSlice,
    mv: mvSlice,
    follow: followSlice,
  },
});
