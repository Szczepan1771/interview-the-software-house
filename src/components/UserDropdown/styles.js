import styled, { css } from "styled-components";

export const UserDropdownContainer = styled.section`
  position: relative;
`
;

export const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: .2s;
  
  & > image {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    filter: brightness(1.1);
  }
  
`
;

export const DropdownList = styled.ul`
  ${({theme, isActive}) => css`
      padding: 0;
      position: absolute;
      list-style: none;
      top: 60px;
      right: 0;
      z-index: 1;
      border-radius: 4px;
      background-color: ${theme.colors.white};
      box-shadow: 0 8px 32px ${theme.colors.userDropdownShadow};
      transform-origin: 50% 0;
      transform: scaleY(${isActive ? 1 : 0});
      transition: all .2s;
  `}
`
;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 16px;
  width: 184px;
  height: 56px;
  font-size: 1.4em;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    filter: brightness(2);
  }
`
;


