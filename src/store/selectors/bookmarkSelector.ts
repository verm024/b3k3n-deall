import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

export const selectBookmark = (state: RootState) => state.bookmark;

export const selectBookmarks = createSelector(
  [selectBookmark],
  (bookmark) => bookmark.bookmarks
);

export const selectBookInBookmarkById = createSelector(
  [selectBookmarks, (_, id: number) => id],
  (bookmarks, id) => {
    return bookmarks.find((e) => e.id === id);
  }
);
