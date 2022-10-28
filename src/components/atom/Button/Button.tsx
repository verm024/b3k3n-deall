import React from "react";

import styled, { css } from "styled-components";

import { Text } from "..";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  width?: string;
  display?: string;
}

const Root = styled.button<ButtonProps>`
  ${({ variant, disabled }) => getButtonStyles(variant, disabled)}
  width: ${({ width }) => width || "150px"};
  display: ${({ display }) => display || "inline"};
  cursor: pointer;
  border-radius: 8px;
  height: 35px;
  text-transform: uppercase;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);
  ${({ disabled }) => disabled && "opacity: 0.5;"}
`;

const getButtonStyles = (variant = "primary", disabled = false) => {
  let buttonStyles;
  switch (variant) {
    case "primary":
      buttonStyles = css`
        background: #6c31f5;
        border: 1px solid #6c31f5;
        span {
          color: white !important;
        }
        ${() =>
          !disabled &&
          `&:hover {
          background: white;
          span {
            color: #6c31f5 !important;
          }
        }`}
      `;
      break;
    case "secondary":
      buttonStyles = css`
        background: white;
        border: 1px solid #6c31f5;
        span {
          color: #6c31f5 !important;
        }
        ${() =>
          !disabled &&
          `&:hover {
          background: #6c31f5;
          span {
            color: white !important;
          }
        }`}
      `;
      break;
    default:
      break;
  }
  return buttonStyles;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Root {...rest}>
      <Text textType="btn" bold>
        {children}
      </Text>
    </Root>
  );
};

export default Button;
