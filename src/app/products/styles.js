import styled, { css } from "styled-components";
import {isMobile, isMobileOnly} from "react-device-detect";

export const ProductsBoard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${isMobileOnly ? "center" : "space-between"};
`
;

export const ProductSection = styled.section`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 144px);
    background-color: ${theme.colors.backgroundBoard};
    padding: ${isMobile ? "24px" : "40px 96px" };
  `}
`
;

export const Header = styled.header`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 144px;
    background-color: ${theme.colors.backgroundHeader};
  `}
`
;
