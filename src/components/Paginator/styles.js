import styled, { css } from "styled-components";
import { centerFlexRowBox, text } from "../../utils/sharedStyles";

export const Container = styled.div`
  display: flex;
  margin: 56px 0;
  & > div {
    &:first-of-type,
    &:last-of-type {
      margin: 0 24px;
    }
  }
`
;

export const PaginatorElement = styled.div`
  ${({theme, isActive, isDisabled}) => css`
    ${centerFlexRowBox};
    color: ${isActive ? theme.colors.paginatorActiveElement : !isDisabled ? theme.colors.textBlack : theme.colors.paginatorDisableElement};
    cursor: ${isActive ? 'context-menu' : "pointer"};
    ${text};
    margin: 0 8px;
  `}
`
;

