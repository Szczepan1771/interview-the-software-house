import styled, {css} from 'styled-components';
import {isMobileOnly} from "react-device-detect";
import {centerFlexColumnBox, leadingText, text} from "../../utils/sharedStyles";

export const Container = styled.div`
  ${({theme}) => css`
      ${centerFlexColumnBox};
      width: 100%;
      max-width: ${isMobileOnly ? "360px" : "600px"};
      height: 344px;
      background-color: ${theme.colors.backgroundCard};
      & > img {
        width: 36px;
        height: 45px;
        margin-bottom: 25px;
      }
  `}
`
;

export const PrimaryText = styled.h2`
  ${leadingText}
`
;

export const SecondaryText = styled.p`
  ${({theme}) => css`
    ${text};
    color: ${theme.colors.textGray};
  `}

`
;
