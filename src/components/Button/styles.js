import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({active, colors}) => css`
    font-size: 1.4em;
    background-color: ${colors.backgroundColor};
    color: ${colors.textColor};
    ${colors.borderColor && css`border: 1px solid ${colors.borderColor};`};
    padding: 10px 20px;
    border-radius: 4px;
    ${active && css `cursor: pointer`};
    transition: .2s;
    
    ${active && css`
      &:hover {
        ${colors.hoverBorderColor && css`border: 1px solid ${colors.hoverBorderColor};`};
        ${colors.hoverTextColor && css`color: ${colors.hoverTextColor};`};
        ${colors.hoverBackgroundColor && css`background-color: ${colors.hoverBackgroundColor};`};
      }
    `}
  `}
`
;
