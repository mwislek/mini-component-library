import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === "small" ? "16" : "24";

  return (
    <Container>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconContainer className={size}>
        <Icon id={icon} size={iconSize} strokeWidth={2} />
      </IconContainer>
      <BaseInput
        className={size}
        style={{ "--width": width + "px" }}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.label`
  display: block;

  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;

  height: 24px;
  margin: auto;
  width: 24px;

  &.small {
    height: 16px;
    width: 16px;
  }
`;

const BaseInput = styled.input`
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  color: inherit;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  height: ${36 / 16}rem;
  outline-offset: 2px;
  padding-left: 36px;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &.small {
    border-bottom: 1px solid ${COLORS.black};
    font-size: ${14 / 16}rem;
    height: ${24 / 16}rem;
    padding-left: 24px;
  }
`;

export default IconInput;
