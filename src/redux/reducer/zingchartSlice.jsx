import { createSlice } from "@reduxjs/toolkit";
const indexZingChart = JSON.parse(localStorage.getItem("indexZingChart"));
const topChartsStorage = JSON.parse(localStorage.getItem("topCharts"));
export const zingchartReducer = createSlice({
  name: "zingchart",
  initialState: {
    index: indexZingChart || 0,
    topCharts: topChartsStorage || [
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

      const jsonTopChart = JSON.stringify(action.payload);
      localStorage.setItem("topCharts", jsonTopChart);
    },
    setIndexZingChart: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const { showTopChart, setIndexZingChart } = zingchartReducer.actions;
export default zingchartReducer.reducer;
