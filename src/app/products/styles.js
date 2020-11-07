import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

export const ProductSection = styled.section`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 144px);
    background-color: ${theme.colors.backgroundBoard};
    padding: ${isMobile ? "24px" : "40px 96px"};
  `}
`
;


export const ProductsBoard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
;

