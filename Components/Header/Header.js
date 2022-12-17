import React from 'react';
import Image from 'next/image'
 import { FiX, FiMenu } from 'react-icons/fi'
 import ActiveLink from "./ActiveLink/ActiveLink";
import {navigationList} from "../../Assets/Const";
 import Login from "../Login/Login";
 const navList = (

    <ul className=' mt-4  md:mt-0   flex     mr-8    lg:mr-40 h-full flex-1 gap-12 md:h-32'>
        {
            navigationList.map(route =><li key={route.id}  ><ActiveLink  exact  className={"my-auto flex h-full items-center  px-2 lg:px-4   pt-3 pb-4 md:pb-0  "} {...route} /></li>)
        }
    </ul>

)
const Header = () => {
    const [openNav, setOpenNav] = React.useState(false)

    React.useEffect(() => {
        const toggleMenuIcon = () => window.innerWidth >= 780 && setOpenNav(false)

        window.addEventListener('resize', toggleMenuIcon)
        return () => window.removeEventListener('resize', toggleMenuIcon)
    }, [])
    return (
        <>

            <div>


                <header className='bg-white shadow-sm lg:min-h-[8rem]'>
                    <nav className="container mx-auto flex items-center justify-between">
                        <div  className={"w-[50px] md:w-[82px] h-[50px] md:h-[82px] relative"} >
                            <Image
                                src="/Img/Logo.svg"
                                alt="Logo"
                                layout='fill'
                                priority
                                sizes="(max-width: 768px) 62px,
                                        (max-width: 1200px) 82px,
                                        62px"
                            />
                        </div>




                        <div className="hidden h-full md:block">
                            {navList}
                        </div>
                        <Login/>
                        <button
                            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? <FiX fontSize={20} /> : <FiMenu fontSize={20} />}
                        </button>
                    </nav>
                    {openNav && (
                        <div  className='md:hidden' >
                            {navList}

                        </div>
                    )}
                </header>
            </div>
        </>

    );
};

export default Header;