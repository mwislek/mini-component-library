/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Container
      className={size}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
    >
      <ProgressValueWrapper>
        <ProgressValue className={size} value={value} />
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressValueWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &.large {
    border-radius: 8px;
    padding: 4px;
  }
`;

const ProgressValueWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 12px;
  width: ${({ value }) => `${value}%`};

  &.small {
    height: 8px;
  }

  &.large {
    height: 24px;
  }
`;
export default ProgressBar;
