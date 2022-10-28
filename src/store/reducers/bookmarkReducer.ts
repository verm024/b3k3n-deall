import { createSlice } from "@reduxjs/toolkit";

import { BookProps } from "../../utils/constants";

interface BookmarkSliceState {
  bookmarks: BookProps[];
}

const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: {
    bookmarks: [],
  } as BookmarkSliceState,
  reducers: {
    addNewBookmark: (state, action) => {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload as BookProps],
      };
    },
  },
});

export const { addNewBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
