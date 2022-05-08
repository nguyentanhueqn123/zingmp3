import { createSlice } from "@reduxjs/toolkit";
export const homeReducer = createSlice({
  name: "home",
  initialState: {
    isPlay: false,
    // active: 1,
    active: "",
    fullscreen: false,
    mute: false,
  },
  reducers: {
    setPlay: (state, action) => {
      state.isPlay = action.payload;
    },
    setMute: (state, action) => {
      state.mute = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setFullScreen: (state, action) => {
      state.fullscreen = action.payload;
    },
  },
});
export const { setPlay, setActive, setFullScreen, setMute } =
  homeReducer.actions;
export default homeReducer.reducer;
