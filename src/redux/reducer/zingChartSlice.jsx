import { createSlice } from "@reduxjs/toolkit";
import { setConfig, config } from "../../localStorage/localStorage";

export const zingChartReducer = createSlice({
  name: "zingChart",
  initialState: {
    index: config.indexZingChart || 0,
    topCharts: config.topCharts || [
      {
        album: {
          title: "",
        },
        artistsNames: "",
        encodeId: "",
        thumbnail: "",
      },
    ],
    loading: true,
  },
  reducers: {
    showTopChart: (state, action) => {
      state.topCharts = action.payload;
      state.loading = false;

      setConfig("topCharts", action.payload);
    },
    setIndexZingChart: (state, action) => {
      state.index = action.payload;
      setConfig("indexZingChart", action.payload);
    },
  },
});
export const { showTopChart, setIndexZingChart } = zingChartReducer.actions;
export default zingChartReducer.reducer;
