import { createSlice } from "@reduxjs/toolkit";
export const radioSlice = createSlice({
  name: "radio",
  initialState: {
    liveStream: [],
    playlist: {},
  },
  reducers: {
    renderLiveStream: (state, action) => {
      state.liveStream = action.payload;
    },
    renderPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});
export const { renderLiveStream, renderPlaylist } = radioSlice.actions;
export default radioSlice.reducer;
