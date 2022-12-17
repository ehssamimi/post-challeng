import React from 'react';

const InputSearch = ({handleSearch} ) => {
    return (
        <input
            placeholder={"جستجو کنید ... "}
            className={`w-[300px] md:w-[760px]  h-14 outline-none placeholder-blackLight rounded-2xl  text-sm  bg-no-repeat focus:border-red border-transparent bg-right-center-16   pr-14  pl-14 mt-16  leading-[60px]  w-11/12 caret-Malachite shadow-search focus:pr-4 focus:bg-left-center-16 focus:shadow-search-focus active:shadow-search-active  bg-[url('/Img/Input/search-gray.svg')] focus:bg-[url('/Img/Input/search-green.svg')] transition-all `}
                onChange={e=>handleSearch(e)}/>
    );
};

export default InputSearch;