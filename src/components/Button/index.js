import React from 'react';
import * as S from "./styles"

function Button({text, handleClick, active = false}) {
    return (
        <S.Button
            active={active}
            onClick={handleClick}
        >
            {text}
        </S.Button>
    )
}

export default Button;
