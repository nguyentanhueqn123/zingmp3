import { createSlice } from "@reduxjs/toolkit";

const storageSong = JSON.parse(localStorage.getItem("song"));
export const songReducer = createSlice({
  name: "song",
  initialState: {
    songId: storageSong.encodeId || "",
    songUrl: storageSong.songUrl || "",
    thumbnail: storageSong.thumbnail || "",
    thumbnailM: storageSong.thumbnailM || "",
    title: storageSong.title || "",
    artistsNames: storageSong.artistsNames || "",
    loading: false,
    duration: storageSong.duration || 0,
    album: storageSong.album || "",
    lyric: storageSong.lyric || [],

    isRandom: false,
    isRepeat: false,

    albumPlayList: [],
    preSong: [],
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

      const jsonSong = JSON.stringify(action.payload);
      localStorage.setItem("song", jsonSong);
    },
    renderSong: (state, action) => {
      state.songUrl = action.payload;
      state.loading = false;

      const jsonSongUrl = JSON.stringify(action.payload);
      localStorage.setItem("songUrl", jsonSongUrl);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    renderLyrics: (state, action) => {
      state.lyric = action.payload;
    },
    setRandom: (state, action) => {
      state.isRandom = action.payload;
      localStorage.setItem("isRandom", JSON.stringify(action.payload));
    },
    setRepeat: (state, action) => {
      state.isRepeat = action.payload;
      localStorage.setItem("isRepeat", JSON.stringify(action.payload));
    },
    renderAlbumPlayList: (state, action) => {
      state.albumPlayList = action.payload;

      const jsonAlbumPlayList = JSON.stringify(action.payload);
      localStorage.setItem("albumPlayList", jsonAlbumPlayList);
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
