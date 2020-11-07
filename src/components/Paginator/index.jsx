import React from 'react';

import * as S from "./styles"
import PaginatorElement from "./PaginatorElement";

function Paginator({pageRange, currentPage, lastPage, setCurrentPage, firstIsActive, lastIsActive}) {
    const paginatorListMapper = () => {
        if (pageRange.length !== 6) {
            return pageRange.map(item => (
                <PaginatorElement
                    key={`element-${item}`}
                    value={item}
                    isActive={currentPage === item}
                    handleSelect={() => !(currentPage === item) && setCurrentPage(item)}
                />
            ))
        }

        return pageRange.map((item, i) => {
            if (i === 2 && pageRange[i] + 1 !== pageRange[i + 1]) {
                return (
                    <>
                        <PaginatorElement
                            key={`element-${item}`}
                            value={item}
                            isActive={currentPage === item}
                            handleSelect={() => !(currentPage === item) && setCurrentPage(item)}
                        />
                        <PaginatorElement
                            key={"..."}
                            value={"..."}
                            isActive={true}
                        />
                    </>
                )
            }

            return (
                <PaginatorElement
                    key={`element-${item}`}
                    value={item}
                    isActive={currentPage === item}
                    handleSelect={() => !(currentPage === item) && setCurrentPage(item)}
                />
            )
        })
    };

    return (
        <S.Container>
            <PaginatorElement
                value={"First"}
                handleSelect={() => !firstIsActive && setCurrentPage(1)}
                isDisabled={firstIsActive}
            />
            {paginatorListMapper()}
            <PaginatorElement
                value={"Last"}
                handleSelect={() => !lastIsActive && setCurrentPage(lastPage)}
                isDisabled={lastIsActive}
            />
        </S.Container>
    )
}

export default Paginator;
