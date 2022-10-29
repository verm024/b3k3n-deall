import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Text, Spacer } from "../../components/atom";
import { BookList, BookModal } from "../../components/organism";
import { BookProps } from "../../utils/constants";
import { useResponsive } from "../../hooks";
import { selectBookmarks } from "../../store/selectors/bookmarkSelector";
import {
  addNewBookmark,
  removeBookmark,
} from "../../store/reducers/bookmarkReducer";

const Bookmark = () => {
  const { isMobile, isTablet, isLgScreen } = useResponsive();
  const data = useSelector(selectBookmarks);
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState<BookProps>();

  const handleBookClick = (book: BookProps) => {
    setModalData(book);
  };

  const handleCloseBookModal = () => {
    setModalData(undefined);
  };

  const handleClickBookmark = () => {
    dispatch(addNewBookmark(modalData));
  };

  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(modalData));
  };

  return (
    <Container padding="100px 0 80px 0" width="100%">
      <Text textType="h6" bold>
        Bookmarks
      </Text>
      <Spacer size={8} inline />
      <BookList
        col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
        onBookClick={handleBookClick}
        data={data}
      />
      <BookModal
        modalData={modalData}
        handleClose={() => handleCloseBookModal()}
        onBookmark={handleClickBookmark}
        onRemoveBookmark={handleRemoveBookmark}
      />
    </Container>
  );
};

export default Bookmark;
