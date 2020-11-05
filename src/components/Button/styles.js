import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({theme, active}) => css`
    font-size: 1.4em;
    background-color: ${active ? theme.colors.activeProductButton : theme.colors.inactiveProductButton};
    color: ${theme.colors.textWhite};
    padding: 10px 20px;
    border-radius: 4px;
    ${active && css`cursor: pointer`};
    transition: .2s;
    
    ${active && css`
      &:hover {
        background-color: ${theme.colors.hoverProductButton};
      }
    `}
  `}
`
;
