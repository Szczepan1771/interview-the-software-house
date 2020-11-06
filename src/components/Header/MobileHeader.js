import React from "react";
import SearchComponent from "../SearchComponent";
import FilterComponent from "../FilterComponent";
import * as S from "./styles";

function MobileHeader({searchConfig, filterConfig}) {
    const {search, handleSearch} = searchConfig;
    const {filter, handleFilter, filterArray} = filterConfig;

    return (
        <S.MobileHeader>
            <S.MobileSection>
                <S.Logo>join.tsh.io</S.Logo>
            </S.MobileSection>
            {search &&
            <SearchComponent
                handleSearch={handleSearch}
            />}
            <S.MobileSection>
                {filter &&
                <FilterComponent
                    filterArray={filterArray}
                    callback={handleFilter}
                />}
            </S.MobileSection>
        </S.MobileHeader>
    )
}

export default MobileHeader
