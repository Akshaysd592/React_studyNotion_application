import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className='flex  md:flex-row  bg-richblack-900 justify-between w-full px-8  max-w-[1160px]  mx-auto gap-x-12 py-6 smallsize '>

        <div className='w-11/12 max-w-[450px] ' >
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] titlesize' 
            >
                {title}
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4 titlesize ' >
                <span className='text-richblack-100'>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] imagesize hidden sm:block  '>
            <img src={frameImage}
                className='py-4'
                alt="Pattern"
                width={508}
                height={404}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={508}
                height={404}
                loading="lazy"
                className='absolute -top-3 right-3'
                />    
        </div>

    </div>
  )
}

export default Template
