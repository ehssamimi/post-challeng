import React, {useEffect, useState} from 'react';

const Input = ({label,name,status,ChangeInput}) => {

    let InputClass={
        classInputNormal:`  bg-[url('/Img/Input/user-normal.svg')]  border-blackLight`,
        classInputFocus:`focus:outline-none focus:border-black caret-black focus:bg-[url('/Img/Input/user-black.svg')] bg-[url('/Img/Input/user-black.svg')]`,
        classInputError:`focus:outline-Persimmon border-Persimmon  caret-Persimmon  bg-[url('/Img/Input/user-error.svg')] focus:bg-[url('/Img/Input/user-error.svg')]`,
        classInputSuccess:`focus:outline-Malachite  border-Malachite  caret-Malachite bg-[url('/Img/Input/user-success.svg')]   focus:bg-[url('/Img/Input/user-success.svg')]`,

    }



    const [inputState,setInputState]=useState({focus:false,error:false,success:false})
    const [className,setClassName]=useState( InputClass.classInputNormal   )




    useEffect(()=>{
        const NewInputName=inputState.focus?InputClass.classInputFocus:inputState.error?InputClass.classInputError:inputState.success? InputClass.classInputSuccess:InputClass.classInputNormal

        setClassName( NewInputName  )
    },[inputState])

    useEffect(()=>{
         if (status==='error'){
            setInputState({focus:false,error:true,success:false})
        }else if (status==='success'){
            setInputState({focus:false,error:false,success:true})
        }else if (status==='normal'){
            setInputState({focus:false,error:false,success:false})
        }
    },[status])


    const blur=()=>{
        if (status!=="success" && status!=="error")
        setInputState(prevState => ({...prevState,focus: false }))
    }

    const focus=()=>{
        if (status!=="success" && status!=="error")
        setInputState(prevState => ({...prevState,focus: true }))
    }

    return (
        <div className="mt-6 ">
            <p className={["font-IRANYekan  text-base md:text-lg font-normal mb-2",inputState.focus?" text-black ":inputState.error?"text-Persimmon":inputState.success ?"text-Malachite":"text-black" ].join(" ")}>{label+":"}</p>
            <input className={[`placeholder-blackLight rounded-2xl  text-sm w-[300px] md:w-[394px]  h-14 bg-no-repeat  bg-right-center-16   pr-14 pl-4 border leading-[60px]  w-11/12    `,className].join(" ")}
                   onBlur={blur} name={name}  onFocus={focus} onChange={e=>ChangeInput(e.target.value,e.target.name)}
            placeholder={name==="user"?"نام کاربری خود را وارد کنید ":"رمز عبور خود را وارد کنید"}
            type={name==="user"?"text":"password"}
            />


        </div>
    );
};

export default Input;