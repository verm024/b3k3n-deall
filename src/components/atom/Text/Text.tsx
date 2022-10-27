import React from "react";

import styled, { css } from "styled-components";

type HeadingTextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type BodyTextType = "b1" | "b2";
type ButtonTextType = "btn";
type Tag = HeadingTextType | "span" | "p";

interface TextProps {
  children: React.ReactNode;
  textType?: HeadingTextType | BodyTextType | ButtonTextType;
  bold?: boolean;
  color?: string;
  italic?: boolean;
  textAlign?: string;
  lineClamp?: number;
}

function getMainStyles() {
  return css<TextProps>`
    ${({ textType }) => getTextStyle(textType || "b1")}
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    ${({ color }) => `color: ${color};`}
    ${({ italic }) => italic && "font-style: italic;"}
    ${({ textAlign }) => `text-align: ${textAlign};`}
    ${({ lineClamp }) =>
      lineClamp
        ? `
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: ${lineClamp};
            -webkit-box-orient: vertical;
          `
        : ""}
  `;
}

const textElements = {
  H1: styled.h1`
    ${() => getMainStyles()}
  `,
  H2: styled.h2`
    ${() => getMainStyles()}
  `,
  H3: styled.h3`
    ${() => getMainStyles()}
  `,
  H4: styled.h4`
    ${() => getMainStyles()}
  `,
  H5: styled.h5`
    ${() => getMainStyles()}
  `,
  H6: styled.h6`
    ${() => getMainStyles()}
  `,
  P: styled.p`
    ${() => getMainStyles()}
  `,
  Span: styled.span`
    ${() => getMainStyles()}
  `,
};

function getTextStyle(
  textType: HeadingTextType | BodyTextType | ButtonTextType
) {
  let fontStyle;
  switch (textType) {
    case "h1":
      fontStyle = css`
        font-size: 6rem;
        letter-spacing: -1.5px;
      `;
      break;
    case "h2":
      fontStyle = css`
        font-size: 3.75rem;
        letter-spacing: -0.5px;
      `;
      break;
    case "h3":
      fontStyle = css`
        font-size: 3rem;
        letter-spacing: 0;
      `;
      break;
    case "h4":
      fontStyle = css`
        font-size: 2.125rem;
        letter-spacing: 0.25px;
      `;
      break;
    case "h5":
      fontStyle = css`
        font-size: 1.5rem;
        letter-spacing: 0;
      `;
      break;
    case "h6":
      fontStyle = css`
        font-size: 1.25rem;
        letter-spacing: 0.15px;
      `;
      break;
    case "b1":
      fontStyle = css`
        font-size: 1rem;
        letter-spacing: 0.5px;
      `;
      break;
    case "b2":
      fontStyle = css`
        font-size: 0.875rem;
        letter-spacing: 0.25px;
      `;
      break;
    case "btn":
      fontStyle = css`
        font-size: 0.875rem;
        letter-spacing: 1.25px;
      `;
      break;
    default:
      fontStyle = css`
        font-size: 1rem;
        letter-spacing: 0.5px;
      `;
      break;
  }
  return fontStyle;
}

function getElementTag(
  textType: HeadingTextType | BodyTextType | ButtonTextType
) {
  if (textType[0] === "h") {
    return textType.toUpperCase();
  } else if (textType === "btn") {
    return "Span";
  } else {
    return "P";
  }
}

const Text = ({
  children,
  textType = "b1",
  bold = false,
  color = "black",
  italic = false,
  textAlign = "left",
  lineClamp,
}: TextProps) => {
  const tag = getElementTag(textType);
  const ChosenTextElement = textElements[tag as Capitalize<Tag>];

  return (
    <ChosenTextElement
      bold={bold}
      color={color}
      textType={textType}
      italic={italic}
      textAlign={textAlign}
      lineClamp={lineClamp}
    >
      {children}
    </ChosenTextElement>
  );
};

export default Text;
