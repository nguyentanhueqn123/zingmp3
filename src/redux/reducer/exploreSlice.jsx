import { createSlice } from "@reduxjs/toolkit";
export const exploreReducer = createSlice({
  name: "explore",
  initialState: {
    banner: [],
    titles: {
      title1: "",
      title2: "",
      title3: "",
    },
    sectionIds: {
      sectionIds1: "",
      sectionIds2: "",
      sectionIds3: "",
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
    showSectionId: (state, action) => {
      state.sectionIds = action.payload;
    },
    showPlaylist: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

export const { showBanner, showPlaylist, showTitle, showSectionId } =
  exploreReducer.actions;
export default exploreReducer.reducer;
