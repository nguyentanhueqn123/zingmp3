import { createSlice } from "@reduxjs/toolkit";
const indexNewSong = JSON.parse(localStorage.getItem("indexNewSong"));

export const moiphathanhSlice = createSlice({
  name: "moiphathanh",
  initialState: {
    index: indexNewSong || 0,

    newSongs: [
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
    showNewSong: (state, action) => {
      state.newSongs = action.payload;
      state.loading = false;
    },
    setIndexNewSong: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const { showNewSong, setIndexNewSong } = moiphathanhSlice.actions;
export default moiphathanhSlice.reducer;
