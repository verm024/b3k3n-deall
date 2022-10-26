import React from "react";

import styled from "styled-components";

interface SpacerProps {
  size?: number;
  inline?: boolean;
}

const SpacerDiv = styled.div<SpacerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
`;

const Spacer = ({ size = 4, inline = false }: SpacerProps) => {
  return <SpacerDiv size={size} inline={inline} />;
};

export default Spacer;
