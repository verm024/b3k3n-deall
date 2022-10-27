import React from "react";
import { Link, LinkProps } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CustomLink = ({ children, ...rest }: LinkProps) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default CustomLink;
