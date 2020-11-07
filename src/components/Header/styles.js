import styled, { css } from "styled-components";
import { centerFlexRow } from "../../utils/sharedStyles";
import {isMobile, isMobileOnly} from "react-device-detect";


export const DesktopHeader = styled.header`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${isMobile ? "40px" : "108px"};
    height: 144px;
    background-color: ${theme.colors.backgroundHeader};
  `}
`
;

export const DesktopSection = styled.section`
  ${({maxWidth}) => css`
    ${centerFlexRow};
    justify-content: flex-start;
    ${maxWidth && css`
      flex: 1;
    `};
  `}
`
;

export const MobileHeader = styled.header`
  ${({theme}) => css`
      display: flex;
      flex-direction: column;
      padding: 0 25px;
      background-color: ${theme.colors.backgroundHeader};
  `}
`
;

export const MobileSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  
`
;

export const Logo = styled.h1`
  cursor: pointer;
  font-size: 2.4em;
  font-weight: 600;
  line-height: 4em;
  ${!isMobileOnly && css`margin-right: ${isMobile ? "55px" : "105px"}`}
`
;

