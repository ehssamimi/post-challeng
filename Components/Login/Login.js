import React, {useMemo, useState} from 'react';
import Button from "../Button/Button";
import { Modal } from '@mantine/core';
import Input from "./Input/Input";
import SubmitButton from "./SubmitButton/SubmitButton";

import { useMutation } from '@apollo/client';
import InputPass from "./Input/InputPass";
import {loginQuery} from "../../Assets/Const";


const Login = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [status,setStatus]=useState({user:"normal",lock:"normal"});
    const [dataForm,setdataForm]=useState({user:"",lock:""});
    const [Login, { data, loading, error }] = useMutation(loginQuery);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    const ChangeInput=(value,name)=>{
         setdataForm(prevState => ({...prevState,[name]:value}))
        setStatus(prevState => ({...prevState,[name]:"normal"}))
    }
    const Mutate=async ()=>{
        try {
            await Login({
                variables: {
                    userName: dataForm.user,
                    password: dataForm.lock,
                }});
        } catch (e) {
            console.error(e);
        }

    }
     useMemo(()=>{
         if (error){
             console.log(error.ApolloError)
             setStatus({user:"error",lock:"error"})
         }else if(data){
             console.log(data)
             setStatus({user:"success",lock:"success"})
         }
     },[error,data])


    return (
        < >
            <div className="  md:flex-1 justify-end md:flex" >
                <Button  initialClass="border-2 bg-white border-green-500 text-green-500 " onClick={toggle} >
                    ورود
                </Button>
            </div>
             <Modal opened={isOpen} onClose={toggle} size="auto" centered  withCloseButton={false}  >
             <div className=" w-[77vw]  h-[80vh] max-w-[1500px] max-h-[1000px] bg-white flex  items-center justify-center">
                 <div className='flex flex-col'>
                     <h3 className='font-medium	text-center text-xl md:text-[45px] '>ورود به حساب کاربری </h3>
                     <div className='mt-8' >

                         <Input name={'user'} label={"نام کاربری"} status={status.user} ChangeInput={ChangeInput}  />
                         <InputPass name={'lock'} label={"رمز عبور"} status={status.lock}  ChangeInput={ChangeInput}/>


                         <SubmitButton onClick={Mutate}/>
                     </div>

                 </div>

             </div>
            </Modal>

        </ >
    );
};

export default Login;