import React from 'react';
import {useRouter} from "next/router";
import {navigationList} from "../../Assets/Const";
import Image from 'next/image'
import Link from 'next/link'

const Breadcrumb = () => {
    const { pathname } = useRouter();
     let Navigate=navigationList.filter(item=>item.href===pathname)[0]?.name;
     return (
        <div className='w-full font-normal flex flex-row justify-start items-center mt-10 mb-20 text-MineShift'>
            <Link href="/home"  >خانه</Link>
            <span className='mx-1'>  <Image
                src="/Img/fe_arrow-down.svg"
                alt="Logo"
                width={20}
                height={18}
            />
            </span>
            <span className='text-Malachite  '>{Navigate}</span>
        </div>
    );
};

export default Breadcrumb;