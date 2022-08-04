import React, {useState} from 'react'
import {Link} from 'react-router-dom'
 import project from '../utils/projetcsData'
import dashbordapp from '../assets/stacks/dashbordapp.png'
import ShowcaseWork from './ShowcaseWork'
import ShowcaseWork2 from './ShowcaseWork copy'
import ant from '../assets/Design sans titre (2).png'



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

<section class='  h-full mx-auto w-full  bg-texture container max-w-screen-sm overflow-hidden px-4 py-24 lg:px-7 lg:pb-14 lg:pt-36 xl:max-w-full ' >      



{/* <div className="flex container mx-auto w-full justify-center space-x-4 py-20
">
    {['Web App', 'Web3.0', 'Mobile' , 'DevOps', 'All'].map((item,index)=>(
        <div className="" key={index} className={` px-8 bg-white rounded  hover:cursor-pointer hover:bg-orange-600 ${activeFilter === item ? 'active:to-blue-700' : '' } `} onClick={()=> handleWorkfilter(item)}>{item}</div>
    ))}
</div> */}
 <h3 className="m-h5 lg:h5 mb-[20px] lg:mb-0 text-5xl font-semibold py-6 text-center pb-12 font-bebasB  ">PROJECTS</h3>

<div className="  2xlx:hidden  grid   grid-cols-1 gap-5 md:grid-cols-12 md:gap-12  container mx-auto  ">
   
   
   
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


<section className="relative pt-24 pb-48 overflow-hidden 2xl:hidden">
  <img
    className="absolute top-0 right-0"
    src="gradia-assets/elements/features/radial1.svg"
    alt=""
  />
  <img
    className="absolute bottom-0 left-0"
    src="gradia-assets/elements/features/radial2.svg"
    alt=""
  />
  <div className="relative z-10 container mx-auto px-4">
    <div className="md:max-w-3xl md:mx-auto">
      <h2 className="mb-20 max-w-xl font-heading font-bold text-6xl sm:text-7xl text-black">
        Recommended by world-class companies.
      </h2>
      <div className="flex flex-wrap -m-5">
        
        {/* Card */}

        <div className="w-full md:w-1/2 md:relative md:top-12 p-5">
          <div className="h-full p-9 transform hover:-translate-y-3 bg-blue-100 rounded-2xl transition ease-out duration-1000">
            <p className="mb-4 font-heading text-base text-white text-opacity-70">
              {project.name}
            </p>
            <h3 className="mb-20 font-heading font-bold text-white text-3xl">
              Daily analytics help you to understand business growth.
            </h3>
            <div>
              <div className="pr-7">
                <div className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl">
                  <p className="mb-3 text-3xl font-bold text-black">162.9k</p>
                  <p className="mb-3 text-xs font-bold text-black">
                    Last 7 Days Website Visits
                  </p>
                  <p className="text-xs text-gray-500">
                    10% Increase from Last Week
                  </p>
                </div>
              </div>
              <div className="-mt-14 pl-7">
                <div className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl">
                  <p className="mb-3 text-3xl font-bold text-black">162.9k</p>
                  <p className="mb-3 text-xs font-bold text-black">
                    Last 7 Days Website Visits
                  </p>
                  <p className="text-xs text-gray-500">
                    10% Increase from Last Week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card */}

        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col justify-between h-full transform hover:-translate-y-3 overflow-hidden bg-blue-700 rounded-2xl transition ease-out duration-1000">
            <div className="p-9 pb-0">
              <p className="mb-4 font-heading text-base text-white text-opacity-70">
                Unlimited entertainment
              </p>
              <h3 className="mb-5 font-heading font-bold text-white text-3xl">
                Give a break. Make employee happy in the office.
              </h3>
            </div>
            <img
              className="mx-auto w-full"
              src={ant}
              alt=""
            />
          </div>
        </div>
        {/* Card */}
        <div className="w-full md:w-1/2 md:relative md:top-12 p-5">
          <div className="h-full p-9 transform hover:-translate-y-3 bg-purple-100 rounded-2xl transition ease-out duration-1000">
            <p className="mb-4 font-heading text-base text-white text-opacity-70">
              Fastest growth
            </p>
            <h3 className="mb-20 font-heading font-bold text-white text-3xl">
              Track results. Share with anyone without taking the hassle.
            </h3>
            <img
              className="mx-auto"
              src={ant}
              alt=""
            />
          </div>
        </div>
        
        {/* Card */}

        <div className="w-full md:w-1/2 p-5">
          <div className="h-full p-9 pb-0 bg-pink-300 transform hover:-translate-y-3 rounded-2xl transition ease-out duration-1000">
            <p className="mb-4 font-heading text-base text-white text-opacity-70">
              Customer review
            </p>
            <h3 className="mb-20 font-heading font-bold text-white text-3xl">
              20k+ experts love our products &amp; support.
            </h3>
            <img
              className="mx-auto"
              src={ant}
              alt=""
            />
          </div>
        </div>
        
        {/* End cards */}

      </div>
    </div>
  </div>
</section>


        </section>
        </>
  )
}

export default Works