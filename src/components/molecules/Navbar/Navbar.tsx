import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { Container, Text, CustomLink } from "../../atom";

const StyledContainer = styled(Container)`
  background: #6c31f5;
  position: fixed;
`;

const Navbar = () => {
  return (
    <StyledContainer
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      margin="auto"
      padding="10px 40px"
    >
      <CustomLink to="/">
        <Text bold textType="h5" color="white">
          B3k3n
        </Text>
      </CustomLink>
      <CustomLink to="/bookmark">
        <FontAwesomeIcon icon={faBookmark} color="white" size="lg" />
      </CustomLink>
    </StyledContainer>
  );
};

export default Navbar;
