import { createSlice } from "@reduxjs/toolkit";
import { setConfig, config } from "../../localStorage/localStorage";

export const moiphathanhSlice = createSlice({
  name: "moiphathanh",
  initialState: {
    index: config.indexNewSong || 0,
    newSongs: config.newSongs || [
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

      setConfig("newSongs", action.payload);
    },
    setIndexNewSong: (state, action) => {
      state.index = action.payload;
      setConfig("indexNewSong", action.payload);
    },
  },
});
export const { showNewSong, setIndexNewSong } = moiphathanhSlice.actions;
export default moiphathanhSlice.reducer;
