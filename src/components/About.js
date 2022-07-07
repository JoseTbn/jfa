import React from 'react'
import {Link} from 'react-router-dom'
import Stack from './Stack'
import svg from '../assets/circletext.f0059cc8.svg'
import Experiences from './Experiences'
import {motion} from "framer-motion"


const textAnimate ={

  offscreen : { y : 100, opacity : 0} ,
    onscreen : { y : 0 ,
      opacity : 1,
      scale : [0.,1],
    transition : { type : "spring" ,
    bounce : 0.1 ,
    duration : 0.8 }
    }
}
const textreveal ={

  offscreen : {   y : 200,opacity : 0} ,
    onscreen : {  y : 0,
      opacity : 1,
    transition : { type: 'spring' ,
    bounce : 0.1 ,
    duration : 1.2 }
    }
}



const About = () => {
 
 
  return (
    <>
    <div class=' h-full w-full   '>
    <motion.section
      initial = {"offscreen"}
      whileInView= {"onscreen"}
      viewport={{once:false, amount:0.2}}
    transition={{staggerChildren:0.5}}
    class="border-0 block m-0 px-16 pt-60 pb-52 align-baseline md:text-center">
        <motion.h2   
      variants={textAnimate}
    
          class="border-0 text-gray-600 font-bebasB  text-xl mx-0 mt-0 mb-10 p-0 uppercase align-baseline">DEVSECOPS PATH
        </motion.h2>
        <motion.p
           variants={textAnimate}
        class=" font-bebasB text-gray-600 border-0 text-5xl m-0 p-0 tracking-tight align-baseline w-full md:my-0 md:mx-auto">
          I have worked on some projects,  during an intensive training at Becode, a great experience where I improved
          my skills in the domain of infrastructure as code and cloud computing,
          <a
          className="border-0 m-0 p-0 no-underline align-baseline text-gray-900"
            href="/"
            > DOCKER </a>, 
          <a
                    className=" text-gray-900 border-0 m-0 p-0 no-underline align-baseline"

            href="/"
            > VAGRANT </a>
          ,
          <a
                    className="border-0 m-0 p-0 no-underline align-baseline text-gray-900"
            href="/"
            > TERRAFORM, </a>
             and ensured I am up-to-date with the current key trends within the industry.
        </motion.p>

<div className="py-24 px-80 xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28">
  
          <motion.div variants={textreveal} className='  flex flex-row flex-wrap items-baseline justify-between gap-24 '>
            <motion.div    className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB lg:font-normal leading-8 m-0 p-0 lg:text-lg xl:text-xl xl:leading-8">Observability and Analysis</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
            <motion.div   className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB lg:font-normal leading-8 m-0 p-0 lg:text-lg xl:text-xl xl:leading-8">App Definition and Development</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
            <motion.div   className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB lg:font-normal leading-8 m-0 p-0 lg:text-lg xl:text-xl xl:leading-8">Provisioning</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
            <motion.div   className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB leading-8 m-0 p-0 xl:text-xl xl:leading-8">Orchestration & Management</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
            <motion.div   className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB lg:font-normal leading-8 m-0 p-0 lg:text-lg xl:text-xl xl:leading-8">Runtime</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
            <motion.div   className="mx-0 mt-0 mb-8 max-w-2xl text-center">
            <svg className='h-auto mb-5 relative w-auto mx-auto' width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path class="rectangle first-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.929 25.2258L24.8823 3.27398L2.83562 25.2258L24.8823 47.1776L46.929 25.2258ZM24.8823 0.45166L0.00110445 25.2258L24.8823 49.9999L49.7635 25.2258L24.8823 0.45166Z" fill="black"></path>
                        <path class="rectangle second-rectangle" fill-rule="evenodd" clip-rule="evenodd" d="M46.9278 24.7741L24.8811 2.82232L2.8344 24.7741L24.8811 46.726L46.9278 24.7741ZM24.8811 0L-0.000116255 24.7741L24.8811 49.5483L49.7623 24.7741L24.8811 0Z" fill="#565656"></path>
                      </g>
                    </svg>
                    <motion.p class="font-bebasB lg:font-normal leading-8 m-0 p-0 lg:text-lg xl:text-xl xl:leading-8">Platform</motion.p>
                    <motion.p>The starting point of every project is research. The ideate phase helps clients re-imagine their
                      projects to better respond to their users’ needs. Think outside the box to create a solid and
                      lasting bond based on collaboration</motion.p>
            </motion.div>
          </motion.div>
</div>



      </motion.section>

<Stack/>

      

       


    </div>
</>
  )
}

export default About