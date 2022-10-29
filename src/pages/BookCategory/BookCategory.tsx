import React, { useState } from "react";
import { useQuery, useQueryClient, QueryKey } from "react-query";
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
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState<BookProps>();
  const { id: categoryId } = useParams();
  const [searchResult, setSearchResult] = useState<{
    isSearching: boolean;
    results: BookProps[];
  }>({ isSearching: false, results: [] });

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const categoryQueriesData = queryClient.getQueriesData(["category"]);
  const bookListQueriesData = queryClient.getQueriesData([
    "book-list",
    categoryId,
  ]);

  const { data = [] } = useQuery(["book-list", categoryId, page], async () => {
    const res = await fetch(
      `api/fee-assessment-books?categoryId=${categoryId}&page=${page}`
    );
    if (!res.ok) {
      throw new Error("Fetch Error");
    }
    return await res.json();
  });

  const handleKeywordChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setSearchKeyword(target.value);
  };

  const handleSearch = () => {
    if (searchKeyword.length === 0) {
      setSearchResult({ isSearching: false, results: [] });
    } else {
      const regexPattern = new RegExp(searchKeyword);
      if (bookListQueriesData.length > 0) {
        let allMatchedBooks: BookProps[] = [];
        for (const bookListQueryData of bookListQueriesData) {
          // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          const filtered = (bookListQueryData as [QueryKey, any])[1].filter(
            (e: BookProps) => regexPattern.test(e.title.toLowerCase())
          );
          allMatchedBooks = [...allMatchedBooks, ...filtered];
        }
        setSearchResult({ isSearching: true, results: allMatchedBooks });
      }
    }
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
          {categoryQueriesData.length > 0
            ? (categoryQueriesData[0][1] as { id: number; name: string }[])
                .filter((e) => e.id === parseInt(categoryId as string))
                .map((e, index) => (
                  <React.Fragment key={index}>{e.name}</React.Fragment>
                ))
            : `Category ${categoryId}`}
        </Text>
      </Container>
      <Spacer size={8} inline />
      <Input
        value={searchKeyword}
        onChange={handleKeywordChange}
        placeholder="Search..."
        width="100%"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {!searchResult.isSearching ? (
        <>
          <BookList
            col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
            onBookClick={handleBookClick}
            data={data}
          />
          <Spacer size={52} />
          <Pagination currentPage={page} onChangePage={handleChangePage} />{" "}
        </>
      ) : (
        <BookList
          col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
          onBookClick={handleBookClick}
          data={searchResult.results}
        />
      )}
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
