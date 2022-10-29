import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Text, Spacer } from "../../components/atom";
import { Pagination } from "../../components/molecules";
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
  const dispatch = useDispatch();
  const data = useSelector(selectBookmarks);

  const [modalData, setModalData] = useState<BookProps>();
  const [mappedData, setMappedData] = useState<BookProps[][]>([]);
  const [page, setPage] = useState<number>(1);

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

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const arr: BookProps[][] = [];
    const itemsPerPage = 10;
    let tempArr = [];
    for (let i = 0; i < data.length; i++) {
      tempArr.push(data[i]);
      if (tempArr.length === itemsPerPage || i === data.length - 1) {
        arr.push(tempArr);
        tempArr = [];
      }
    }
    setMappedData(arr);
  }, [data]);

  return (
    <Container padding="100px 0 80px 0" width="100%">
      <Text textType="h6" bold>
        Bookmarks
      </Text>
      <Spacer size={8} inline />
      <BookList
        col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
        onBookClick={handleBookClick}
        data={mappedData[page - 1] || []}
      />
      <Spacer size={52} />
      <Pagination currentPage={page} onChangePage={handleChangePage} />
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
