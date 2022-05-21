import { createSlice } from "@reduxjs/toolkit";
import { setConfig, config } from "../../localStorage/localStorage";

export const songReducer = createSlice({
  name: "song",
  initialState: {
    songId: config.songId || "ZO98F9W6",
    songUrl: config.songUrl || "",
    thumbnail: config.thumbnail || "",
    thumbnailM: config.thumbnailM || "",
    title: config.title || "",
    artistsNames: config.artistsNames || "",
    loading: config.loading || false,
    duration: config.duration || 0,
    album: config.album || "",
    lyric: config.lyric || [],

    isRandom: config.isRandom || false,
    isRepeat: config.isRepeat || false,
    albumPlayList: config.albumPlayList || [],
  },
  reducers: {
    createSong: (state, action) => {
      state.songId = action.payload.encodeId;
      state.thumbnail = action.payload.thumbnail;
      state.thumbnailM = action.payload.thumbnailM;
      state.title = action.payload.title;
      state.artistsNames = action.payload.artistsNames;
      state.duration = action.payload.duration;
      state.album = action.payload.album;

      setConfig("songId", action.payload.encodeId);
      setConfig("thumbnail", action.payload.thumbnail);
      setConfig("thumbnailM", action.payload.thumbnailM);
      setConfig("title", action.payload.title);
      setConfig("artistsNames", action.payload.artistsNames);
      setConfig("duration", action.payload.duration);
      setConfig("album", action.payload.album);
    },
    renderSong: (state, action) => {
      state.songUrl = action.payload;
      state.loading = false;

      setConfig("songUrl", action.payload.songUrl);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    renderLyrics: (state, action) => {
      state.lyric = action.payload;
      setConfig("lyric", action.payload);
    },
    setRandom: (state, action) => {
      state.isRandom = action.payload;
      setConfig("isRandom", action.payload);
    },
    setRepeat: (state, action) => {
      state.isRepeat = action.payload;
      setConfig("isRepeat", action.payload);
    },
    renderAlbumPlayList: (state, action) => {
      state.albumPlayList = action.payload;
      setConfig("albumPlayList", action.payload);
    },
  },
});
export const {
  createSong,
  renderSong,
  setLoading,
  renderLyrics,
  renderAlbumPlayList,
  setRandom,
  setRepeat,
} = songReducer.actions;
export default songReducer.reducer;
