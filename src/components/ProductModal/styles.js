import styled, { css } from "styled-components";
import { centerFlexRowBox, centerImage } from "../../utils/sharedStyles";
import { isMobileOnly } from "react-device-detect";

export const Container = styled.div`
  ${({theme}) => css`
      ${centerFlexRowBox};
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      overflow-y: auto;
      width: 100vw;
      background-color: ${theme.colors.modalBackground};
      z-index: 2;
  `}
`
;

export const PreviewContainer = styled.div`
  ${({theme, isLandscape}) => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background-color: ${theme.colors.backgroundCard};
      width: 95%;
      border-radius: 8px;
      max-width: ${isMobileOnly ? "360px" : "600px"};
      min-height: 530px;
      overflow: hidden;
      ${isLandscape && isMobileOnly && css`
        margin: 60vh 0 15px;
      `}
  `}
`
;

export const Close = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  z-index: 3;
`
;

export const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 355px;
  overflow: hidden;
  & > img {
    ${centerImage};
    width: 100%;
    height: 100%;
  }
`
;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 48px);
  padding: 24px;
`
;

export const Name = styled.h2`
  font-size: 2.4em;
  font-weight: 600;
`
;

export const Description = styled.p`
  ${({theme}) => css`
      font-size: 1.8em;
      line-height: 2.4em;
      font-weight: 600;
      color: ${theme.colors.textGray};
  `}
`
;


