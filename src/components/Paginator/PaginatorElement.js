import React from 'react';

import * as S from "./styles";

function PaginatorElement({value, handleSelect, isActive, isDisabled}) {
    return (
        <S.PaginatorElement
            isDisabled={isDisabled}
            isActive={isActive}
            onClick={handleSelect}
        >
            {value}
        </S.PaginatorElement>
    )
}

export default PaginatorElement
