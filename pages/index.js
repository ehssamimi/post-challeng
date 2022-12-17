import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from "../Components/Header/Header";
import ActiveLink from "../Components/Header/ActiveLink/ActiveLink";
import React from "react";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import InputSearch from "../Components/Blogs/InputSearch";
import BlogList from "../Components/Blogs/BlogList";
import Categories from "../Components/Blogs/Categories";
import Pagination from "../Components/Pagination/Pagination";




export default function Home() {
    const oldValueRef = React.useRef(0)
    const [list, setList] = React.useState ([])
    const [search, setSearch] = React.useState('')
    const [page, setPage] = React.useState(1)

    const PER_PAGE = 4


    const handleSearch = (e ) => {
        setSearch(e.target.value)
        setPage(1)
    }
    const handleChangePage = (id ) => {
        setPage(id)
    }

    const filterCategories=(categories)=>{
        if (categories.length===0){
            setList(oldValueRef.current)
        }else {
            let newList= oldValueRef.current.filter(item=>categories.includes(item.category._id));
            setList(newList)
        }

    }



  return (
    <>

            <Header/>
        <main className='w-full h-full bg-Mercury'>
            <div className='lg:container px-4 lg:px-0 flex flex-col items-center mx-auto'>
                <Breadcrumb/>
                <h2 className={'font-extrabold text-center text-3xl'}>وبلاگ</h2>
                <InputSearch handleSearch={handleSearch}/>
                <div className="container mt-6 py-4">
                    <div className="flex flex-col lg:flex-row">
                        <Categories getCategoriesChecks={filterCategories}/>

                        <BlogList
                            ref={oldValueRef}
                            search={search}
                            page={page}
                            perPage={PER_PAGE}
                            list={list}
                            setList={setList}
                        />
                    </div>

                </div>
                {
                    list?.length>0&&  <Pagination
                        page={page}
                        onPageChange={handleChangePage}
                        list={list}
                        perPage={PER_PAGE}
                    />
                }


            </div>
        </main>




    </>
  )
}
