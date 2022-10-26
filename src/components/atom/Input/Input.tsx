import React from "react";

import styled from "styled-components";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  width?: string;
  display?: string;
}

const Root = styled.input<InputProps>`
  outline: none;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 1rem;
  letter-spacing: 0.5px;
  width: ${({ width }) => width || "100px"};
  display: ${({ display }) => display || "inline"};
  &:focus {
    border-color: #6c31f5;
  }
`;

const Input = ({ ...rest }: InputProps) => <Root {...rest} />;

export default Input;
