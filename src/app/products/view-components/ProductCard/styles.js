import styled, { css } from 'styled-components';
import { isMobileOnly } from "react-device-detect";
import {text, leadingText} from "../../../../utils/sharedStyles";

export const Container = styled.div`
  ${({theme}) => css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      margin: 16px 10px;
      width: 100%;
      max-width: ${isMobileOnly ? "360px" : "288px"}; 
      min-height: 400px;
      background-color: ${theme.colors.backgroundCard};
      border-radius: 8px;
      overflow: hidden;
  `}
`
;

export const ImageSection = styled.section`
  ${({active}) => css`
      width: 100%;
      overflow: hidden;
      height: 180px;
      position: relative;
      & > img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ${!active && css`filter: grayscale(100%)`}
      }
  `}

`
;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 16px;
  
  & button {
    width: 100%;
  }
`
;

export const PromoIcon = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 25px;   
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 1;
    color: ${theme.colors.textWhite};
    font-size: 1.4em;
    background-color: ${theme.colors.backgroundPromo};
  `}
`
;

export const ProductName = styled.h2`
  ${leadingText};
`
;

export const ProductDescription = styled.p`
  ${({theme}) => css`
    ${text};
    color: ${theme.colors.textGray};
  `}
`
;
