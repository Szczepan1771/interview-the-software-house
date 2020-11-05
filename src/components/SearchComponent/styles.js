import styled, {css} from "styled-components";

export const SearchComponentWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 400px;
`
;

export const SearchInput = styled.input`
  ${({theme}) => css`
      padding: 15px 33px 15px 15px;
      width: 100%;
      font-size: 1.4em;
      border: 1px solid ${theme.colors.inputBorder};
      border-radius: 8px;
  `}
`
;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`
;
