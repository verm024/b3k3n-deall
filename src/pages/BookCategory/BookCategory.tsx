import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { BookProps } from "../../utils/constants";
import { Button } from "../../components/atom";

import {
  Input,
  Container,
  Text,
  Spacer,
  CustomLink,
} from "../../components/atom";
import { BookList } from "../../components/organism";
import { Pagination, CustomModal } from "../../components/molecules";
import { useResponsive } from "../../hooks";

const BookCategory = () => {
  const { isMobile, isTablet, isLgScreen } = useResponsive();
  const [inputState, setInputState] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState<BookProps>();
  const { id: categoryId } = useParams();

  const { data = [] } = useQuery(["book-list", page], async () => {
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
      <CustomModal
        isOpen={modalData !== undefined}
        onRequestClose={handleCloseBookModal}
      >
        <Button variant="primary" onClick={() => alert("hahahaha")}>
          Test
        </Button>
      </CustomModal>
    </Container>
  );
};

export default BookCategory;
