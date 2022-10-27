import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { Container, Input, Spacer } from "../../atom";

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const StyledContainer = styled(Container)`
  cursor: pointer;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.1);
  }
`;

const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
  const [componentPage, setComponentPage] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const newVal = parseInt(target.value);
    setComponentPage(newVal < 1 ? 1 : newVal);
  };

  useEffect(() => {
    setComponentPage(currentPage);
  }, [currentPage]);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <StyledContainer
        onClick={() => {
          const newVal = currentPage - 1;
          onChangePage(newVal < 1 ? 1 : newVal);
        }}
      >
        <StyledFontAwesomeIcon
          icon={faChevronCircleLeft}
          color="#6c31f5"
          size="2xl"
        />
      </StyledContainer>
      <Spacer size={24} />
      <Container>
        <Input
          value={componentPage}
          onChange={handleInputChange}
          placeholder="Page"
          width="60px"
          type="number"
          onBlur={() => onChangePage(componentPage)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChangePage(componentPage);
            }
          }}
          min={1}
        />
      </Container>
      <Spacer size={24} />
      <StyledContainer onClick={() => onChangePage(currentPage + 1)}>
        <StyledFontAwesomeIcon
          icon={faChevronCircleRight}
          color="#6c31f5"
          size="2xl"
        />
      </StyledContainer>
    </Container>
  );
};

export default Pagination;
