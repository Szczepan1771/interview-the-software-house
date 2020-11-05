import React from 'react';

import * as S from "./styles"
import PaginatorElement from "./PaginatorElement";

function Paginator({pageRange, currentPage, lastPage, setCurrentPage, firstIsActive, lastIsActive}) {
    return (
        <S.Container>
            <PaginatorElement
                value={"First"}
                handleSelect={() => !firstIsActive && setCurrentPage(1)}
                isDisabled={firstIsActive}
            />
            {pageRange.map(item => (
                <PaginatorElement
                    key={`element-${item}`}
                    value={item}
                    isActive={currentPage === item}
                    handleSelect={() => !(currentPage === item) && setCurrentPage(item)}
                />
            ))}
            <PaginatorElement
                value={"Last"}
                handleSelect={() => !lastIsActive && setCurrentPage(lastPage)}
                isDisabled={lastIsActive}
            />
        </S.Container>
    )
}

export default Paginator;
