import React from 'react';
import * as S from "./styles"
import theme from "../../utils/theme";

function Button({text, handleClick, active = true, propsColors = theme.buttonColors.normalColorButton}) {
    return (
        <S.Button
            colors={propsColors}
            active={active}
            onClick={handleClick}
        >
            {text}
        </S.Button>
    )
}

export default Button;
