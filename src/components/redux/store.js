import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/slice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    // diğer slicelar buraya eklenebilir
  },
});
