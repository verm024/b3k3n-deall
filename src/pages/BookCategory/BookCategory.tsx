import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  addNewBookmark,
  removeBookmark,
} from "../../store/reducers/bookmarkReducer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { BookProps } from "../../utils/constants";

import {
  Input,
  Container,
  Text,
  Spacer,
  CustomLink,
} from "../../components/atom";
import { BookList, BookModal } from "../../components/organism";
import { Pagination } from "../../components/molecules";
import { useResponsive } from "../../hooks";

const BookCategory = () => {
  const { isMobile, isTablet, isLgScreen } = useResponsive();
  const [inputState, setInputState] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState<BookProps>();
  const { id: categoryId } = useParams();

  const dispatch = useDispatch();

  const { data = [] } = useQuery(["book-list", categoryId, page], async () => {
    const res = await fetch(
      `/fee-assessment-books?categoryId=${categoryId}&page=${page}`
    );
    if (!res.ok) {
      throw new Error("Fetch Error");
    }
    return await res.json();
  });

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputState(target.value);
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

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
      <Container width="100%" display="flex" alignItems="center">
        {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
        <CustomLink to={-1 as any}>
          <FontAwesomeIcon icon={faChevronLeft} color="black" size="sm" />
        </CustomLink>
        <Spacer size={8} inline />
        <Text textType="h6" bold>
          Test
        </Text>
      </Container>
      <Spacer size={8} inline />
      <Input
        value={inputState}
        onChange={handleInputChange}
        placeholder="Search..."
        width="100%"
      />
      <BookList
        col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
        onBookClick={handleBookClick}
        data={data}
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

export default BookCategory;
