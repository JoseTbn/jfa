import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button';


const ShowcaseWork = (props) => {
  
    let navigate = useNavigate();
    function explore() {
      navigate('/Work/Work:id');
    }
  
    return (
    <div className=" bg-texture">

    
       
    <hr className=" container mx-auto border border-black z-40" />
<div className="flex flex-col lg:flex-row-reverse items-stretch gap-y-40 justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container " >
        <div className="z-30 relative lg:w-1/2 ">
            <div className="hidden dark:bg-gray-800 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center ">
                <div className="w-full lg:w-auto lg:-mr-32" >
                    <img src={props.src} alt="image with decent chairs" className="w-full rounded-lg relative z-30 lg:pl-20 px-6 py-14" />
                </div>
            </div>
            <div className="absolute top-0 dark:bg-gray-800 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full  lg:hidden">
                <img src={props.src} alt=''className='rounded-md' />
            </div>
        </div>
       
        <div className="dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
                <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">{props.name}</h1>
                <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
           <Button
          
           />

            </div>
        </div>
    </div>
</div>
  )
}

export default ShowcaseWork