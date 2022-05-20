import { createSlice } from "@reduxjs/toolkit";

const themeStorages = JSON.parse(localStorage.getItem("theme"));
const durationStorage = JSON.parse(localStorage.getItem("duration"));
export const homeReducer = createSlice({
  name: "home",
  initialState: {
    isPlay: false,
    isHeart: false,
    isToast: false,
    isSetting: false,
    active: "Khám phá",
    fullscreen: false,
    time: durationStorage.time || 0,
    percentage: durationStorage.percentage || 0,
    history: [],
    search: {},
    mute: false,
    theme: themeStorages || {
      active: false,
      type: "",
      className: "",
    },
    songInfo: {
      title: "",
      encodeId: "",
      artistsNames: "",
      alias: "",
      duration: 0,
      thumbnail: "",
      thumbnailM: "",
    },
    // tablet
    seeMore: true,
  },
  reducers: {
    setPlay: (state, action) => {
      state.isPlay = action.payload;
    },
    setDuration: (state, action) => {
      state.time = action.payload.time;
      state.percentage = action.payload.percentage;

      const jsonDuration = JSON.stringify(action.payload);
      localStorage.setItem("duration", jsonDuration);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSongInfo: (state, action) => {
      state.songInfo.title = action.payload.title;
      state.songInfo.encodeId = action.payload.encodeId;
      state.songInfo.artistsNames = action.payload.artistsNames;
      state.songInfo.alias = action.payload.alias;
      state.songInfo.duration = action.payload.duration;
      state.songInfo.thumbnail = action.payload.thumbnail;
      state.songInfo.thumbnailM = action.payload.thumbnailM;
    },
    setHeart: (state, action) => {
      state.isHeart = action.payload;
    },
    setToast: (state, action) => {
      state.isToast = action.payload;
    },
    setSetting: (state, action) => {
      state.isSetting = action.payload;
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
    setThemeActive: (state, action) => {
      state.theme.active = action.payload;
    },
    setThemeType: (state, action) => {
      state.theme.type = action.payload.type;
      state.theme.className = action.payload.className;

      const jsonTheme = JSON.stringify(action.payload);
      localStorage.setItem("theme", jsonTheme);
    },
    setSeeMore: (state, action) => {
      state.seeMore = action.payload;
    },
  },
});
export const {
  setPlay,
  setToast,
  setDuration,
  setSetting,
  setSearch,
  setSongInfo,
  setHeart,
  setMute,
  setActive,
  setFullScreen,
  setThemeActive,
  setThemeType,
  setSeeMore,
} = homeReducer.actions;
export default homeReducer.reducer;
