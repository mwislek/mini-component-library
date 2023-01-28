import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <BaseSelect value={value} onChange={onChange}>
        {children}
      </BaseSelect>
      <DisplayedSelect>
        {displayedValue}
        <IocnContainer style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" size="24" />
        </IocnContainer>
      </DisplayedSelect>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: max-content;
`;

const BaseSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  opacity: 0;
  width: 100%;
`;

const DisplayedSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  padding: 12px 52px 12px 16px;

  ${BaseSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${BaseSelect}:hover + & {
    color: black;
  }
`;


const IocnContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;

  height: var(--size);
  margin: auto;
  pointer-events: none;
  width: var(--size);
`;
export default Select;
