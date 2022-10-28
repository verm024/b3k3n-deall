import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

import { Button, Image, Container, Spacer, Text } from "../../atom";
import { CustomModal, Accordion } from "../../molecules";
import { BookProps } from "../../../utils/constants";
import { formatAuthorsToString } from "../../../utils/helperFunctions";

interface BookModalProps {
  modalData?: BookProps | undefined;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  handleClose?: () => any;
  onBookmark?: () => void;
}

const ChapterAudioContainer = styled(Container)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const BookModal = ({ modalData, handleClose, onBookmark }: BookModalProps) => {
  const [accordionState, setAccordionState] = useState<boolean[]>([]);

  const handleAccordionClick = (index: number) => {
    setAccordionState((prevState) => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    });
  };

  useEffect(() => {
    setAccordionState(Array(modalData?.sections?.length || 0).fill(false));
  }, [modalData?.sections]);

  return (
    <CustomModal
      isOpen={modalData !== undefined}
      onRequestClose={handleClose}
      action={
        <Container display="flex" justifyContent="center" width="100%">
          <Button
            variant="primary"
            width="200px"
            onClick={() => {
              if (typeof onBookmark !== "undefined") {
                onBookmark();
              }
            }}
          >
            Add to bookmark
          </Button>
        </Container>
      }
    >
      <Container margin="auto">
        <Image width="200px" src={modalData?.cover_url || ""} />
      </Container>
      <Spacer size={8} />
      <Text textAlign="center" bold>
        {modalData?.title}
      </Text>
      <Spacer size={4} />
      <Text textAlign="center">
        {formatAuthorsToString(modalData?.authors || [])}
      </Text>
      <Spacer size={16} />
      <ChapterAudioContainer
        padding="12px 0"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <FontAwesomeIcon icon={faBook} />
        <Spacer size={8} />
        <Text textType="b2">{modalData?.sections.length} chapters</Text>
        <Spacer size={16} />
        <Spacer size={16} />
        <Spacer size={16} />
        <Spacer size={16} />
        <FontAwesomeIcon icon={faHeadphonesSimple} />
        <Spacer size={8} />
        <Text textType="b2">{modalData?.audio_length} mins</Text>
      </ChapterAudioContainer>
      <Spacer size={32} />
      <Text textType="h6" bold>
        What’s it about?
      </Text>
      <Spacer size={8} />
      <Text textType="b1">{modalData?.description}</Text>
      <Spacer size={32} />
      <Text textType="h6" bold>
        What’s inside?
      </Text>
      {modalData?.sections.map((section, index) => (
        <>
          <Spacer size={8} />
          <Accordion
            title={index + 1 + ". " + section.title}
            content={section.content}
            key={index}
            onAccordionClick={() => handleAccordionClick(index)}
            isOpen={accordionState[index]}
          />
        </>
      ))}
    </CustomModal>
  );
};

export default BookModal;
