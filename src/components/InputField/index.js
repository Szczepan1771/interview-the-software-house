import React from "react";

import * as S from "./styles";

function InputField({type = "text", name, title, placeholder = ""}) {
    return (
        <S.Container>
            <S.Label htmlFor={name}>{title}</S.Label>
            <S.Input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </S.Container>
    )
}

export default InputField;
