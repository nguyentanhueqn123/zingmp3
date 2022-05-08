import { createSlice } from "@reduxjs/toolkit";
const indexZingChart = JSON.parse(localStorage.getItem("indexZingChart"));
export const zingchartReducer = createSlice({
  name: "zingchart",
  initialState: {
    index: indexZingChart || 0,
    topCharts: [
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
    },
    setIndexZingChart: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const { showTopChart, setIndexZingChart } = zingchartReducer.actions;
export default zingchartReducer.reducer;
