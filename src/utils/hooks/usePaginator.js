import { useState, useEffect } from "react";

export const usePaginator = (selectedPage, itemCount, totalPages, maxSize = 6) => {
    const [pageRange, setPagesRange] = useState([]);
    const [firstIsActive, setFirstIsActive] = useState(false);
    const [lastIsActive, setLastIsActive] = useState(false);

    useEffect(() => {
        document.body.scrollIntoView();
        const lastThreeItems = selectedPage  <= totalPages ? [totalPages - 2, totalPages - 1, totalPages] : [totalPages - 5, totalPages - 4, totalPages - 3];
        setFirstIsActive(!(selectedPage > 1));
        setLastIsActive(!(selectedPage < totalPages));
        setPagesRange(pageMapper(selectedPage, totalPages, maxSize, lastThreeItems))
    }, [selectedPage, totalPages, maxSize]);

    return {pageRange, firstIsActive, lastIsActive}
};

const pageMapper = (selectedPage, totalPages, maxSize, lastThreeItems) => {
    let arr = [...lastThreeItems];
    if(selectedPage === 1 && totalPages >= (maxSize/2)) {
        for (let i = selectedPage; i < selectedPage + (maxSize/2); i++) {
            arr.push(i)
        }
    } else {
        for(let i = selectedPage - 1; i < selectedPage + (maxSize/2) - 1; i++) {
            if(i <= totalPages) {
                arr.push(i)
            }
        }
    }
    const newArr = [...new Set(arr)];

    checkPaginatorLength(newArr, totalPages, maxSize);

    return newArr.sort((a, b) => a < b ? -1 : 1);
};

const checkPaginatorLength = (arr, totalPages, maxSize) => {
    const length = arr.length;

    if(totalPages >= maxSize) {
        for (let i = 1; i <= maxSize - length; i++) {
            arr.push((totalPages - maxSize) + i)
        }
    }
};


