import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Container, Text } from "../../atom";

interface AccordionProps {
  title?: string;
  content?: string;
  isOpen?: boolean;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onAccordionClick?: () => any;
}

const TitleContainer = styled(Container)`
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled(Container)`
  overflow: hidden;
`;

const Accordion = ({
  title = "",
  content = "",
  isOpen = false,
  onAccordionClick,
}: AccordionProps) => {
  return (
    <Container width="100%^">
      <TitleContainer
        width="100%"
        padding="12px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={onAccordionClick}
      >
        <Text bold textType="b1" lineClamp={1}>
          {title}
        </Text>
        <Container>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            color="black"
            size="lg"
          />
        </Container>
      </TitleContainer>
      <ContentContainer
        width="100%"
        padding="12px 24px 0"
        height={isOpen ? "fit-content" : "0px"}
      >
        <Text textType="b2">{content}</Text>
      </ContentContainer>
    </Container>
  );
};

export default Accordion;
