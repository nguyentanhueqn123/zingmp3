import { createSlice } from "@reduxjs/toolkit";
const indexNewSong = JSON.parse(localStorage.getItem("indexNewSong"));
const newSongsStoreage = JSON.parse(localStorage.getItem("newSongs"));

export const moiphathanhSlice = createSlice({
  name: "moiphathanh",
  initialState: {
    index: indexNewSong || 0,

    newSongs: newSongsStoreage || [
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

      const jsonNewSongs = JSON.stringify(action.payload);
      localStorage.setItem("newSongs", jsonNewSongs);
    },
    setIndexNewSong: (state, action) => {
      state.index = action.payload;
    },
  },
});
export const { showNewSong, setIndexNewSong } = moiphathanhSlice.actions;
export default moiphathanhSlice.reducer;
