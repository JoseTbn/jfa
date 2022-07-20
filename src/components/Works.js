import React, {useState} from 'react'
import {Link} from 'react-router-dom'
 import project from '../utils/projetcsData'
import dashbordapp from '../assets/stacks/dashbordapp.png'
import ShowcaseWork from './ShowcaseWork'
import ShowcaseWork2 from './ShowcaseWork copy'



const Works = () => {
  
 const [activeFilter, setActiveFilter] = useState('All')
    
const handleWorkfilter = () => {

}

  
    return (
   <>    
   {/* <section class='  h-max w-full  bg-texture ' >
   {
            project.map((project) => (
//     <div class="box-border  flex w-full h-3/5 px-4  py-4 
// m-auto p-0">
      
               



<div className='flex lg:flex-row-reverse  justify-between  '>   
<div className=" flex flex-col ">
                          <h2 class=' pb-6 text-right uppercase    border-b-2' >
                            <span class='  font-bold'> N0{project.id}:</span> -{project.name}
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
                            {project.name}
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

<section class='  h-full  lgx:mx-auto w-full  bg-texture container max-w-screen-sm overflow-hidden px-4 py-24 lg:px-7 lg:pb-14 lg:pt-36 xl:max-w-full ' >      

<div className="flex container mx-auto w-full justify-center space-x-4 py-20
">
    {['Web App', 'Web3.0', 'Mobile' , 'DevOps', 'All'].map((item,index)=>(
        <div className="" key={index} className={` px-8 bg-white rounded  hover:cursor-pointer hover:bg-orange-600 ${activeFilter === item ? 'active:to-blue-700' : '' } `} onClick={()=> handleWorkfilter(item)}>{item}</div>
    ))}
</div>

<div className="grid   grid-cols-1 gap-5 md:grid-cols-12 md:gap-12  container mx-auto ">
    {
                project.map((project) => (
    
    
                    <ShowcaseWork2
                    key={project.id}
                    name={project.name}
                    src={project.src}
                    url={project.url}
                    id={project.id}
                    className={project.className}
                    side={project.side}
                    />
    
                    ))}
</div>

        </section>
        </>
  )
}

export default Works