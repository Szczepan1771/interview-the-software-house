import styled, {css} from "styled-components";
import {isMobileOnly} from "react-device-detect";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${isMobileOnly ? "space-between" : "space-around"};
  width: ${isMobileOnly ? "auto" : "100%"};
  ${!isMobileOnly && css`
    min-width: 100px;
    max-width: 200px;
  `}
`
;
