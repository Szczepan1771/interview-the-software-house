import React from "react";
import SearchComponent from "../SearchComponent";
import FilterComponent from "../FilterComponent";
import * as S from "./styles";
import UserDropdown from "../UserDropdown";

function MobileHeader({searchConfig, filterConfig, handleClick}) {
    return (
        <S.MobileHeader>
            <S.MobileSection>
                <S.Logo onClick={handleClick}>join.tsh.io</S.Logo>
                <UserDropdown/>
            </S.MobileSection>
            {searchConfig && searchConfig.search &&
            <SearchComponent
                handleSearch={searchConfig.handleSearch}
            />}
            <S.MobileSection>
                {filterConfig && filterConfig.filter &&
                <FilterComponent
                    filterArray={filterConfig.filterArray}
                    callback={filterConfig.handleFilter}
                />}
            </S.MobileSection>
        </S.MobileHeader>
    )
}

export default MobileHeader
