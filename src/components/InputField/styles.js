import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
`
;

export const Label = styled.label`
  font-size: 1.4em;
  line-height: 1.14;
  font-weight: 600;
  margin-bottom: 8px;
`
;

export const Input = styled.input`
  ${({theme}) => css`
      font-size: 1.4em;
      font-weight: 600;
      padding: 16px;
      border: 1px solid ${theme.colors.inputBorder};
      border-radius: 8px;
  `}
`
;
