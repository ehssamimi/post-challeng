import React from 'react';
import button from "../Button/Button";

const PaginationItem = ({ pageNumber, active, onPageChange } ) => {

    const classes = ' flex h-8 w-8 md:w-12 md:h-12  m-1 items-center justify-center  rounded md:rounded-2xl transition-all  font-IRANYekan'
    const btnClass = active ? 'bg-Malachite text-white' : 'text-Malachite border-Malachite border-2 bg-white   ';
    return (
        <button
             className={btnClass+classes}
            onClick={()=>onPageChange(pageNumber)}
            key={pageNumber}

        >
            <span>{pageNumber}</span>
        </button>
    )

}
export default PaginationItem;