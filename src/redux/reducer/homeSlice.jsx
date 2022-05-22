import { createSlice } from "@reduxjs/toolkit";
import { setConfig, config } from "../../localStorage/localStorage";

export const homeReducer = createSlice({
  name: "home",
  initialState: {
    isPlay: false,
    isHeart: false,
    isToast: false,
    isSetting: false,
    active: "Khám phá",
    fullscreen: false,
    time: config.time || 0,
    timePercentage: config.timePercentage || 0,
    history: [],
    search: {},
    volume: config.volume || 1,
    volumePercentage: config.volumePercentage || "100%",
    mute: false,
    theme: {
      active: false,
      themeType: config.themeType || "",
      themeClass: config.themeClass || "",
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
      state.timePercentage = action.payload.timePercentage;

      setConfig("time", action.payload.time);
      setConfig("timePercentage", action.payload.timePercentage);
    },

    setVolume: (state, action) => {
      state.volume = action.payload.volume;
      state.volumePercentage = action.payload.volumePercentage;

      setConfig("volume", action.payload.volume);
      setConfig("volumePercentage", action.payload.volumePercentage);
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
      state.theme.themeType = action.payload.themeType;
      state.theme.themeClass = action.payload.themeClass;
      setConfig("themeType", action.payload.themeType);
      setConfig("themeClass", action.payload.themeClass);
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
  setVolume,
  setMute,
  setActive,
  setFullScreen,
  setThemeActive,
  setThemeType,
  setSeeMore,
} = homeReducer.actions;
export default homeReducer.reducer;
