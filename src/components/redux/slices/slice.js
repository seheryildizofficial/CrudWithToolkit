import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    is_dark_theme: true,
  },
  reducers: {
    setTeheme: (state) => {
      state.is_dark_theme = !state.is_dark_theme;
    },
  },
});
export const { setTeheme } = themeSlice.actions;
export default themeSlice.reducer;
