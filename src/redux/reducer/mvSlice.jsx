import { createSlice } from "@reduxjs/toolkit";
export const mvSlice = createSlice({
  name: "mv",
  initialState: {
    activeLink: "Viet-Nam",
    mvListVietNam: [],
    mvId: "",
  },
  reducers: {
    setMvListVietNam: (state, action) => {
      state.mvListVietNam = action.payload;
    },
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    setMvId: (state, action) => {
      state.mvId = action.payload;
    },
  },
});
export const { setMvListVietNam, setActiveLink, mvId } = mvSlice.actions;
export default mvSlice.reducer;
