import React from "react";

import styled from "styled-components";

interface ImageProps {
  src: string;
  width?: string;
  height?: string;
  alt?: string;
}

const Root = styled.img<ImageProps>`
  width: ${({ width }) => width || "100px"};
  height: ${({ height }) => height || "auto"};
`;

const Image = ({ src, ...rest }: ImageProps) => {
  return <Root src={src} {...rest} />;
};

export default Image;
