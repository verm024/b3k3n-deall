import React from "react";
import Modal, { Props as ReactModalProps } from "react-modal";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Container, Spacer } from "../../atom";
import { useResponsive } from "../../../hooks";

Modal.setAppElement("#root");

const StyledModal = styled(Modal)`
  outline: none;
  & .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.75) !important;
  }
`;

const StyledContainer = styled(Container)`
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.3);
`;

const HeaderContainer = styled(Container)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const IconContainer = styled(Container)`
  cursor: pointer;
`;

const ContentContainer = styled(Container)`
  overflow: auto;
`;

const ActionContainer = styled(Container)``;

interface CustomModalProps extends ReactModalProps {
  action?: React.ReactNode;
}

const CustomModal = ({
  children,
  onRequestClose,
  action,
  ...rest
}: CustomModalProps) => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <StyledModal onRequestClose={onRequestClose} {...rest}>
      <StyledContainer
        margin="10vh auto"
        width={isTablet || isMobile ? "90%" : "60%"}
        height="80vh"
        padding="20px"
      >
        <HeaderContainer
          display="flex"
          justifyContent="flex-end"
          width="100%"
          padding="0 0 12px 0"
        >
          <IconContainer
            onClick={(e) => {
              if (typeof onRequestClose !== "undefined") {
                onRequestClose(e);
              }
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </IconContainer>
        </HeaderContainer>
        <Spacer size={12} />
        <ContentContainer width="100%" height={action ? "85%" : "90%"}>
          {children}
        </ContentContainer>
        <Spacer size={24} />
        {action && <ActionContainer width="100%">{action}</ActionContainer>}
      </StyledContainer>
    </StyledModal>
  );
};

export default CustomModal;
