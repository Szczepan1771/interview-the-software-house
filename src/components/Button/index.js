import React from 'react';
import * as S from "./styles"
import theme from "../../utils/theme";

const buttonColors = (active, colors) => {
    const defaultColors = {
        backgroundColor: theme.colors.activeButton,
        textColor: theme.colors.textWhite,
        hoverBackgroundColor: theme.colors.hoverButton
    };

    if (!colors) {
        if (active) {
            return ({
                backgroundColor: theme.colors.activeButton,
                textColor: theme.colors.textWhite,
                hoverBackgroundColor: theme.colors.hoverButton
            })
        }
        return ({
            backgroundColor: theme.colors.inactiveButton,
            textColor: theme.colors.textWhite,
        })
    }
    return colors || defaultColors;
};

function Button({text, handleClick, active = true, propsColors}) {
    const colors = buttonColors(active, propsColors);
    return (
        <S.Button
            colors={colors}
            active={active}
            onClick={handleClick}
        >
            {text}
        </S.Button>
    )
}

export default Button;
