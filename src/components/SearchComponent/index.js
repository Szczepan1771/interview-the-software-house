import React, { useState, useEffect } from 'react';
import * as S from "./styles"
import magnifier from "../../assets/images/magnifier.png"
import { useDebounce } from "../../utils/hooks/useDebounce";

function SearchComponent({value, handleSearch}) {
    const [searchValue, setSearchValue] = useState("");
    const debounceValue = useDebounce(searchValue, 500);

    const handleChange = e => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        handleSearch(debounceValue);
    }, [debounceValue, handleSearch]);

    return (
        <S.SearchComponentWrapper>
            <S.SearchInput
                aria-label={'search-input'}
                value={searchValue}
                onChange={handleChange}
                type="text"
                placeholder="Search"
            />
            <S.Icon src={magnifier} alt="magnifier"/>
        </S.SearchComponentWrapper>
    )
}

export default SearchComponent;
