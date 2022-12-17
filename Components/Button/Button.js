import React from 'react';

const Button = ({ children,  initialClass,...props }) => {
    const className =initialClass || ''
    return <button
    className={["min-w-[100px]  md:min-w-[157px] rounded-2xl md:pt-2.5 md:pb-3  pt-1 pb-2   text-lg font-normal   transition-all hover:shadow-md active:drop-shadow-button active:opacity-50 disabled:bg-[#817F7F] ",className].join(" ")} { ...props}>{children}</button>
}
export default Button;