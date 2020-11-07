import styled, { css } from "styled-components";
import { isMobileOnly, isMobile } from "react-device-detect";
import { centerImage } from "../../utils/sharedStyles";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
;

export const ImageWrapper = styled.section`
  position: relative;
  ${!isMobileOnly && css`
      width: 41%;
      overflow: hidden;
  `}
  ${isMobileOnly && css`
    display: none;
  `}
  & > img {
    ${centerImage};
  }
`
;

export const FormContainer = styled.section`
  ${({theme}) => css`
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: ${theme.colors.white};
  `}
`
;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  ${!isMobileOnly && css`
    margin: 185px 0 0 ${isMobile ? "40px" : "108px"};
  `}
`
;

export const Login = styled.h2`
  font-size: 3em;
  line-height: 1.33;
  font-weight: 600;
  margin-bottom: 30px;
`
;

export const Form = styled.form`
  padding: 0 ${isMobileOnly ? "25px" : "2px"};
  
  ${!isMobileOnly && css`
    width: ${isMobile ? "350px" : "500px"};
  `}
  
  & button {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 16px;
  }
`
;

export const StyledLink = styled(Link)`
  ${({theme}) => css`
    display: flex;
    font-size: 1.4em;
    line-height: 1.14;
    font-weight: 600;
    color: ${theme.colors.textGray};
    text-decoration-line: underline;
    margin-bottom: 30px;
  `}
`
;
