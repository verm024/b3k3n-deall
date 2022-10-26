import React from "react";

import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactElement | React.ReactElement[];
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const ContainerDiv = styled.div<ContainerProps>`
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
`;

const Container = ({ children, ...rest }: ContainerProps) => {
  return <ContainerDiv {...rest}>{children}</ContainerDiv>;
};

export default Container;
