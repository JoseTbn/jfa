import React from 'react'
import {Link} from 'react-router-dom'
 import projects from '../utils/projetcsData'


import dashbordapp from '../assets/stacks/dashbordapp.png'


const Works = () => {
  return (
   <>    
   {/* <section class='  h-max w-full  bg-texture ' >
   {
            projects.map((projects) => (
//     <div class="box-border  flex w-full h-3/5 px-4  py-4 
// m-auto p-0">
      
               



<div className='flex lg:flex-row-reverse  justify-between  '>   
<div className=" flex flex-col ">
                          <h2 class=' pb-6 text-right uppercase    border-b-2' >
                            <span class='  font-bold'> N0{projects.id}:</span> -{projects.name}
                                              </h2>
                            <div data-aos="zoom-in-up" data-aos-duration="1500" class=' w-full  transition duration-500 ease-in-out transform  hover:scale-110 cursor-pointer'>
                                <img class=' ml-96 rounded-xl items-end  w-6/12 '
                                    src={dashbordapp}
                                    alt='anticip team staffing agency'
                                     />
                            </div>
                      </div>
                      
                      <div data-aos="fade-down-right" data-aos-duration="1500" >
                            <h2 class='2xl:text-5xl 2xl:mb-2  font-semibold'>
                            {projects.name}
                            </h2>
                            <h3 class=' py-6'>
                                Personal project · 2020 · Development
                            </h3>
                            <a class=' border-black border-2  p-3 hover:bg-black hover:text-white' href="">
                                View more
                            </a>
                        </div>
</div>





                  
      
    )
            
            )
        }
</section> */}

<section class='  h-max w-full  bg-texture ' >      
{
            projects.map((projects) => (
       
                <div className=" flex md:flex-row items-center justify-between ">
                    <div className="p-20" data-aos="fade-down-right" data-aos-duration="1500" >
                    <h2 class='2xl:text-5xl 2xl:mb-2  font-semibold'>
                    {projects.name}
                    </h2>
                    <h3 class=' py-6'>
                        Personal project · 2020 · Development
                    </h3>
                    <a class=' border-black border-2  p-3 hover:bg-black hover:text-white' href="">
                        View more
                    </a>
                                </div>
                          
                           <div className="  mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center  items-center">
                                <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0  ">
                    <div className="relative">
                        <img className="hidden  w-8/12 lg:block"src={dashbordapp} alt="table-chair" />
                        <img className="hidden w-6/12 sm:block lg:hidden" src={dashbordapp} alt="table-chair" />
                        <img className="sm:hidden" src={dashbordapp} alt="table-chair" />
                        <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6  bg-black flex flex-col justify-start items-start">
                            <div>
                                <p className="text-2xl font-semibold leading-6 text-gray-800">{projects.name}</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base leading-6 sm:leading-4 text-gray-600"> Personal project · 2020 · Development</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center space-x-2">
                                    <a className="text-base flex font-medium leading-none hover:underline text-gray-800 border-black border-2  p-3 hover:bg-black hover:text-white" href="/">
                                        Explore
                    
                                    <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33337 8H12.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 5.33333L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                                </div>
                            </div>
                </div>


)
            
)
}
        </section>
        
 
</>
  )
}

export default Works