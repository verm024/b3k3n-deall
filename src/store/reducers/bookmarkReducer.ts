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
      if (state.bookmarks.find((e) => e.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload as BookProps],
      };
    },
    removeBookmark: (state, action) => {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (e) => e.id !== (action.payload as BookProps).id
        ),
      };
    },
  },
});

export const { addNewBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
