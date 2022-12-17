import { useMemo } from "react";
export const DOTS = "...";
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({ pageCount, currentPage, siblingCount }) => {


    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 3;
        if (totalPageNumbers >= pageCount) {
            return range(1, pageCount);
        }

        const first2=[1,2]
        const last2=[pageCount-1,pageCount]
        const firstPageIndex = 1;
        const lastPageIndex = pageCount;




        if (currentPage<3){
            return [ ...first2,firstPageIndex+2, DOTS, ...last2];
        }
        if (currentPage>2 && currentPage<pageCount-2){
            return [ firstPageIndex, DOTS,currentPage-1,currentPage ,currentPage+1, DOTS,lastPageIndex];
        }
        if (currentPage>2 && !currentPage<pageCount-2){
            return [ ...first2, DOTS,lastPageIndex-3, lastPageIndex-2,...last2];
        }


    }, [siblingCount, currentPage]);

    return paginationRange;
};
