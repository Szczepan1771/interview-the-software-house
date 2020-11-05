import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Paginator from "../../components/Paginator";
import SearchComponent from "../../components/SearchComponent";

import { AppRoute } from '../../routing/AppRoute.enum';
import { fetchApi } from "../../utils/fetchApi";
import { usePaginator } from "../../utils/hooks/usePaginator";

import * as S from './styles';
import ProductCard from "./view-components/ProductCard";
import NoResultsContent from "../../components/NoResultContent";
import FilterComponent from "../../components/FilterComponent";

const filterArray = [
    {
        id: 1,
        name: "Active",
        defaultValue: false
    },
    {
        id: 2,
        name: "Promo",
        defaultValue: false
    }
];

const filterQuery = () => {
    let object = {};
    filterArray.map(item => object[item.name.toLowerCase()] = item.defaultValue);
    return object;
};

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState(filterQuery());
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemCount] = useState(8);
    const [totalPages, setTotalPages] = useState(null);

    const handleSearch = useCallback((e) => {
        setCurrentPage(1);
        setSearchValue(e)
    }, []);

    const handleFilter = (name, value) => {
        setFilter({
            ...filter,
            [name]: value
        })
    };

    const {pageRange, firstIsActive, lastIsActive} = usePaginator(currentPage, itemCount, totalPages);

    useEffect(() => {
        async function fetchProduct() {
            setIsLoading(true);
            try {
                const data = await fetchApi({
                    url: "/product",
                    query: {
                        search: searchValue,
                        page: currentPage,
                        limit: itemCount,
                        filter
                    }
                });
                setData(data.items);
                setCurrentPage(Number(data.meta.currentPage));
                setTotalPages(data.meta.totalPages);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [currentPage, itemCount, searchValue, filter]);

    return (
        <>
            <S.Header>
                <div>
                    <SearchComponent
                        handleSearch={handleSearch}
                    />
                </div>
                <div>
                    <FilterComponent
                        filterArray={filterArray}
                        callback={handleFilter}
                    />
                    <Link to={AppRoute.login}> Login </Link>
                </div>
            </S.Header>
            <S.ProductSection items={data.length > 0}>
                {data.length > 0 ?
                    <>
                        <S.ProductsBoard>
                            {data.map((item, i) => (
                                <ProductCard
                                    key={i}
                                    data={item}
                                />
                            ))}
                        </S.ProductsBoard>
                        <Paginator
                            pageRange={pageRange}
                            currentPage={currentPage}
                            lastPage={totalPages}
                            setCurrentPage={setCurrentPage}
                            firstIsActive={firstIsActive}
                            lastIsActive={lastIsActive}
                        />
                    </>
                    :
                    <NoResultsContent
                        text={"product"}
                    />
                }
            </S.ProductSection>
        </>
    );
};
