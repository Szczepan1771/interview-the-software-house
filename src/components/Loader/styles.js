import styled, {keyframes, css} from "styled-components";
import {centerFlexColumnBox} from "../../utils/sharedStyles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
`
;

export const Container = styled.div`
  ${centerFlexColumnBox};
  background: rgba(255, 255, 255, 0.8);
  height: calc(100% - 5px);
  justify-content: center;
  z-index: 10;
  left: 0;
  position: absolute;
  top: 5px;
  width: 100%;
`
;

export const Loader = styled.div`
  ${({theme}) => css`
      animation: ${spin} 2s linear infinite;
      border: 4px solid ${theme.colors.inputBorder};
      border-radius: 50%;
      border-top: 4px solid ${theme.colors.activeButton};
      width: 56px;
      height: 56px;
  `}
`
;
