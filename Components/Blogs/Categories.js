import React, {useEffect, useState} from 'react';

import { useQuery } from '@apollo/client'
import {allCategories} from "../../Assets/Const";



const Categories = ({getCategoriesChecks}) => {
    const[listCategories,setListCategories]=useState([])
    const { loading, error, data } = useQuery(allCategories, {
        notifyOnNetworkStatusChange: true,
    })
 useEffect(()=>{
    if (data ){
        let newCategories=data.getPostCategories.map(item=>({...item,checked:false}));
        setListCategories(newCategories)
    }

 },[data])
    const checkedInput=(e)=>{
        let CheckedCategories=listCategories.map(each=> {
            if(each._id===e.target.name){
                return {...each ,checked:!each.checked}
            }else{
                return {...each}
            }
        })
        getCategoriesChecks(CheckedCategories.filter(item=>item.checked).map(each => each._id))
        setListCategories(CheckedCategories)
    }


    return (
        <div className="flex-1 mb-6 max-w-[327px]">
            <div className={'bg-white rounded-l-2xl w-full md:w-11/12 pt-7 pb-7 pl-7 pr-2.5'}>
                <h3 className={'font-bold text-xl mb-7 '}>دسته بندی </h3>
                {
                    listCategories.map(category=><div className='flex justify-between items-center mt-5 ' key={category._id}>
                        <span className='text-Boulder text-lg md:text-lg  lg:text-base xl:text-lg	font-normal text-right '>{category.name}</span>
                        <label className="container-checkBox">
                            <input type="checkbox" checked={category.checked} name={category._id} onChange={checkedInput}/>
                                <span className="checkmark"></span>
                        </label>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default Categories;