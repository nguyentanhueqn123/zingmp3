import { createSlice } from "@reduxjs/toolkit";
const storageLiveStream = JSON.parse(localStorage.getItem("livestream"));
export const radioSlice = createSlice({
  name: "radio",
  initialState: {
    livestream: storageLiveStream || [],
    playlist: {},
  },
  reducers: {
    renderLiveStream: (state, action) => {
      state.livestream = action.payload;
      const jsonLiveStream = JSON.stringify(state.livestream);
      localStorage.setItem("livestream", jsonLiveStream);
    },
    renderPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});
export const { renderLiveStream, renderPlaylist } = radioSlice.actions;
export default radioSlice.reducer;
