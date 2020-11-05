import { useState, useEffect } from "react";

export const usePaginator = (selectedPage, itemCount, totalPages, maxSize = 6) => {
    const [pageRange, setPagesRange] = useState([]);
    const [firstIsActive, setFirstIsActive] = useState(false);
    const [lastIsActive, setLastIsActive] = useState(false);

    useEffect(() => {
        const lastPaginatorNumber = selectedPage + maxSize < totalPages ? selectedPage + (maxSize - 1) : totalPages;
        setFirstIsActive(!(selectedPage > 1));
        setLastIsActive(!(selectedPage < totalPages));
        setPagesRange(pageRangeMapper(selectedPage, lastPaginatorNumber, totalPages, maxSize))
    }, [selectedPage, totalPages, maxSize]);

    return {pageRange, firstIsActive, lastIsActive}
};

const pageRangeMapper = (selectedPage, lastPageNumber, totalPages, maxSize) => {
    let arr = [];
    for (let i = selectedPage; i <= lastPageNumber; i++) {
        arr.push(i);
        if (totalPages > maxSize && selectedPage > totalPages - maxSize) {
            arr = pageMapper(lastPageNumber, totalPages).splice(totalPages - maxSize, maxSize);
        }
        if (totalPages <= maxSize) {
            arr = pageMapper(lastPageNumber, totalPages);
        }
    }
    return arr
};

const pageMapper = (lastPageNumber) => {
    let pagesNumber = [];
    for (let i = 1; i <= lastPageNumber; i++) {
        pagesNumber.push(i);
    }
    return pagesNumber;
};

