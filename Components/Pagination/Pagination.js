import React from "react";
import PaginationItem from "./PaginationItem";
 import {DOTS, usePagination} from "./usePagination";
import Image from "next/image";

const ArrowBtn=({img,page,click})=>{
    return(
        <button
            className={'w-8 h-8  md:w-12 md:h-12 text-Malachite rounded-t-2xl shadow-narrowBtn flex justify-center items-center text-Malachite hover:border-Malachite hover:shadow-arrowHover hover:rounded-t-2xl  '}
            onClick={click}
            disabled={page === 1}
        >
            <Image
                src={img}
                alt="arrow"
                width={10}
                height={19}

            />
        </button>
    )
}


 const Pagination = ({  onPageChange,list ,perPage,page,pagesCount=~~(list?.length / perPage)  }) => {


     const generateKey = (pre) => {
        const randomNum = () => {
            return Math.random() * 100000;
        };
        return `${pre}_${randomNum()}_${new Date().getTime()}`;
    };
    const paginationRange = usePagination({
        currentPage: page,
         pageCount: pagesCount,
         siblingCount:  1,
    });

    const goNext = async () => {
      if (page!==pagesCount){
          onPageChange(page+1)
      }
    };

    const goPrevious = async () => {
        if (page!==1){
            onPageChange(page-1)
        }
    };


    if (pagesCount === 0  ) {
        return null;
    }




    return (
        <div className={'flex mb-5'} dir={"ltr"}>
            <ArrowBtn page={page} click={goPrevious} img={"/Img/leftArrow.svg"}/>
            <div className="flex items-center  ">
                {
                    paginationRange?.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (
                            <div
                                key={generateKey(index)}
                                className={'text-Malachite'}
                            >
                                ...
                            </div>
                        );
                    }

                    return <PaginationItem     key={pageNumber} pageNumber={pageNumber} page={page}
                                            onPageChange={onPageChange}
                                            active={pageNumber === page} />

                    ;
                })}
            </div>
            <ArrowBtn page={page} click={goNext} img={"/Img/rightArrow.svg"}/>

        </div>
    );
};

export default Pagination;

// const Pagination = ({ page, list, perPage, onChange }) => {
//     const pages = ~~(list?.length / perPage)
//     const handleClick = (id) => () => onChange(id)
//     const classes =
//         'flex h-12 w-12 items-center justify-center rounded-2xl transition-all'
//
//     return (
//         <div className="my-8 flex justify-center gap-1">
//             {Array(pages)
//                 ?.fill(null)
//                 ?.map((_, index) => PaginationItem({ index, page, classes, handleClick }))}
//         </div>
//     )
// }
//
// export default Pagination