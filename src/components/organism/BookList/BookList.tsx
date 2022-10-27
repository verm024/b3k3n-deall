import React, { useState, useEffect } from "react";

import { BookProps } from "../../../utils/constants";
import { formatAuthorsToString } from "../../../utils/helperFunctions";

import { Container, Spacer, Text } from "../../atom";
import { BookCard } from "../../molecules";

interface BookListProps {
  data: BookProps[];
  onBookClick?: (book: BookProps) => void;
  col?: number;
}

const BookList = ({ data = [], onBookClick, col = 4 }: BookListProps) => {
  const [mappedBook, setMappedBook] = useState<BookProps[][]>([]);

  useEffect(() => {
    const arr: BookProps[][] = [];
    let tempArr = [];
    for (let i = 0; i < data.length; i++) {
      tempArr.push(data[i]);
      if (tempArr.length === col || i === data.length - 1) {
        arr.push(tempArr);
        tempArr = [];
      }
    }
    setMappedBook(arr);
  }, [data, col]);

  return (
    <Container width="100%">
      {mappedBook.length > 0 &&
        mappedBook.map((row: BookProps[], index: number) => (
          <React.Fragment key={index}>
            <Spacer size={24} />
            <Container
              display="flex"
              justifyContent={col === 1 ? "center" : "space-between"}
              width="100%"
            >
              {row.map((col: BookProps) => (
                <BookCard
                  title={col.title}
                  author={formatAuthorsToString(col.authors)}
                  imageSrc={col.cover_url}
                  key={col.id}
                  onClick={() => {
                    if (typeof onBookClick !== "undefined") {
                      onBookClick(col);
                    }
                  }}
                />
              ))}
              {index === mappedBook.length - 1 &&
                Array(col - row.length < 0 ? 0 : col - row.length)
                  .fill(0)
                  .map((_, index: number) => (
                    <Container width="260px" height="466px" key={index} />
                  ))}
            </Container>
          </React.Fragment>
        ))}
      {mappedBook.length === 0 && (
        <>
          <Spacer size={24} />
          <Text textType="b1" textAlign="center">
            There is nothing here.
          </Text>
        </>
      )}
    </Container>
  );
};

export default BookList;
