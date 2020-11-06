import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
      display: flex;
      align-items: center;
      
      & > label {
            margin-left: 8px;
            font-size: 1.4em;
            font-weight: 500;
            position: relative;
            cursor: pointer;

            &:before,
            &:after {
                content: "";
                display: inline-block;
                position: absolute;
                top: 40%;
                transform: translateY(-50%);
                transition: .2s;
                cursor: pointer;
            }
                    
            &:before {
                width: 24px;
                height: 24px;
                left: -33px;
                top: 7px;
                border: 1px solid ${theme.colors.inactiveCheckboxBorder};
                border-radius: 4px;
            }
                    
            &:after {
                    width: 4px;
                    height: 11px;
                    border: solid ${theme.colors.checkedCheckboxContent};
                    border-width: 0 2px 2px 0;
                    left: -22px;
                    top: -1px;
                    background-color: ${theme.colors.checkboxBackground};
                    transform: rotate(45deg)
                }
            }
                
            & > input {
                opacity: 0;
                width: 24px;
                height: 24px;
                & + label:after {
                    opacity: 0 ;
                }
                &:checked {
                    & + label:after {
                        opacity: 1;
                    }
                    
                    & + label:before {
                      border-color: ${theme.colors.checkboxBackground};
                      background-color: ${theme.colors.checkboxBackground};
                    }
                }
            }   
        }
      
  `}
  
`
;
