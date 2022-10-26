import React from "react";

import styled from "styled-components";

import { Text } from "../../atom";

interface TagProps {
  children: string;
}

interface WrapperProps {
  display?: string;
  onClick?: () => void;
  margin?: string;
  cursor?: "default" | "pointer";
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  background: white;
  padding: 5px 10px;
  border: 2px solid #6c31f5;
  border-radius: 20px;
  width: fit-content;
  cursor: ${({ cursor }) => cursor};
  &:hover {
    background: #6c31f5;
    p {
      color: white;
    }
  }
`;

const Tag = ({
  onClick,
  children,
  display = "inline-block",
  margin = "0",
  cursor = "default",
}: WrapperProps & TagProps) => {
  return (
    <Wrapper
      onClick={onClick}
      display={display}
      margin={margin}
      cursor={cursor}
    >
      <Text textType="b1" color="#6c31f5" bold>
        {children}
      </Text>
    </Wrapper>
  );
};

export default Tag;
