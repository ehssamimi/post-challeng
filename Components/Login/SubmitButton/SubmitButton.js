import React from 'react';

const SubmitButton = ({onClick}) => {
    return (
      <button
          onClick={onClick}
          aria-status="loading"
          className={'w-11/12  w-[300px] md:w-[394px]  h-14 mt-12 flex items-center justify-center text-white bg-Malachite rounded-2xl hover:shadow-submitBtn active:border active:border-2 active:border-funGreen disabled:bg-gray aria-[status=loading]:opacity-70'}>
          ورود
      </button>
    );
};

export default SubmitButton;