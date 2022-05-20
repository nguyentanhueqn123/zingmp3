import { createSlice } from "@reduxjs/toolkit";
export const homeReducer = createSlice({
  name: "home",
  initialState: {
    banner: [],
    titles: {
      title1: "",
      title2: "",
      title3: "",
    },
    playlists: {
      playlist1: [],
      playlist2: [],
      playlist3: [],
    },
  },
  reducers: {
    showBanner: (state, action) => {
      state.banner = action.payload;
    },
    showTitle: (state, action) => {
      state.titles = action.payload;
    },
    showPlaylist: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

export const { showBanner, showPlaylist, showTitle } = homeReducer.actions;
export default homeReducer.reducer;
