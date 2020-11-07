import React from "react";
import * as S from "./styles";
import SearchComponent from "../SearchComponent";
import FilterComponent from "../FilterComponent";
import UserDropdown from "../UserDropdown";

function DesktopHeader({searchConfig, filterConfig, handleClick}) {
    return (
        <S.DesktopHeader>
            <S.DesktopSection maxWidth={true}>
                <S.Logo onClick={handleClick}>join.tsh.io</S.Logo>
                {searchConfig && searchConfig.search && <SearchComponent
                    handleSearch={searchConfig.handleSearch}
                />}
                {filterConfig && filterConfig.filter && <FilterComponent
                    filterArray={filterConfig.filterArray}
                    callback={filterConfig.handleFilter}
                />}
            </S.DesktopSection>
            <S.DesktopSection>
                <UserDropdown/>
            </S.DesktopSection>
        </S.DesktopHeader>
    )
}

export default DesktopHeader
