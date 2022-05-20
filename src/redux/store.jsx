import { configureStore } from "@reduxjs/toolkit";
import khamphaSlice from "./reducer/khamphaSlice";
import zingchartSlice from "./reducer/zingchartSlice";
import songSlice from "./reducer/songSlice";
import homeSlice from "./reducer/homeSlice";
import radioSlice from "./reducer/radioSlice";
import moiphathanhSlice from "./reducer/moiphathanhSlice";
import mvSlice from "./reducer/mvSlice";
import theoDoiSlice from "./reducer/theoDoiSlice";

export const store = configureStore({
  reducer: {
    khampha: khamphaSlice,
    zingchart: zingchartSlice,
    song: songSlice,
    home: homeSlice,
    radio: radioSlice,
    moiphathanh: moiphathanhSlice,
    mv: mvSlice,
    theodoi: theoDoiSlice,
  },
});
