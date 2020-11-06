import React from "react";
import * as S from "./styles";
import SearchComponent from "../SearchComponent";
import FilterComponent from "../FilterComponent";

function DesktopHeader({searchConfig, filterConfig}) {
    const {search, handleSearch} = searchConfig;
    const {filter, handleFilter, filterArray} = filterConfig;
    return (
        <S.DesktopHeader>
            <S.DesktopSection maxWidth={true}>
                <S.Logo>join.tsh.io</S.Logo>
                {search && <SearchComponent
                    handleSearch={handleSearch}
                />}
                {filter && <FilterComponent
                    filterArray={filterArray}
                    callback={handleFilter}
                />}
            </S.DesktopSection>
            <S.DesktopSection>

            </S.DesktopSection>
        </S.DesktopHeader>
    )
}

export default DesktopHeader
