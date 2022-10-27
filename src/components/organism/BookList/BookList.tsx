import React, { useState, useEffect } from "react";

import { BookProps } from "../../../utils/constants";

import { Container, Spacer } from "../../atom";
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
      {data.length > 0 &&
        mappedBook.map((row: BookProps[], index: number) => (
          <>
            <Spacer size={24} />
            <Container
              key={index}
              display="flex"
              justifyContent={col === 1 ? "center" : "space-between"}
              width="100%"
            >
              {row.map((col: BookProps) => (
                <BookCard
                  title={col.title}
                  author={col.authors[0]}
                  imageSrc={col.cover_url}
                  key={col.id}
                  onClick={() => {
                    if (typeof onBookClick !== "undefined") {
                      onBookClick(col);
                    }
                  }}
                />
              ))}
            </Container>
          </>
        ))}
    </Container>
  );
};

export default BookList;
