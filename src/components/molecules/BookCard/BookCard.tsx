import React from "react";

import styled from "styled-components";

import { Container, Image, Text, Spacer } from "../../atom";

interface BookCardProps {
  title: string;
  author: string;
  imageSrc: string;
}

const StyledContainer = styled(Container)`
  border-radius: 25px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

const BookCard = ({ title, author, imageSrc }: BookCardProps) => {
  return (
    <StyledContainer
      display="flex"
      flexDirection="column"
      width="260px"
      height="466px"
      padding="24px 20px"
    >
      <StyledImage src={imageSrc} width="100%" />
      <Spacer size={12} />
      <Text textType="b1" bold color="#6c31f5" lineClamp={2}>
        {title}
      </Text>
      <Spacer size={4} />
      <Text textType="b2" lineClamp={2}>
        {author}
      </Text>
    </StyledContainer>
  );
};

export default BookCard;
