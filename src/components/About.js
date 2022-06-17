import React from 'react'
import {Link} from 'react-router-dom'
import Stack from './Stack'
import svg from '../assets/circletext.f0059cc8.svg'
import Experiences from './Experiences'
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
    <div class=' h-full w-full  bg-texture '>

        <div class='box-border mx-auto mt-28 flex flex-col  w-4/5 h-3/5 px-4   pb-24 m-auto p-0'>
            <h2 class='text-5xl font-semibold pt-2 '>About</h2>
            <div class="w-96 py-4 lg:text-6xl lg:mt-8 2xl:text-7xl indent-7  font-extrabold">

                <h3 
              
                class=' uppercase' >“always be eager for new technologies.”
                </h3>

            </div>

            <div class="  animate-spinSlow  self-end w-48 2xl:w-60" >
                <img class=''
                    src={svg}
                    alt='roundanimation'
                  
                />

            </div>

            <div class=''>
                <h3 class='text-3xl lg:text-4xl 2xl:text-4xl 2xl:w-72 font-medium  uppercase text-gray-600 tracking-wider'>CREATING DIGITAL EXPERIENCES TO BRING PEOPLE TOGETHER.</h3>
            </div>
<Experiences/>


            <div class='lg:mt-8 2xl:mt-8 whitespace-normal'>
                <p class=' text-base font-semibold uppercase text-gray-600 tracking-wider'>I'm a driven person who works hard to attain my goals.The ability to overcome <br />
                    obstacles and follow things through to completion has always been a strong point of mine,<br />
                    which is why I've thrived in all the workplaces I have had the pleasure of working in.
                </p>
            </div>


          
            <div class=' pt-20  w-full  justify-around flex flex-col '>

                <h2 class='text-8xl lg:mx-0 lg:mt-6 lg:mb-2.5 py-40 font-extrabold pt-20 uppercase ' data-aos="zoom-in-down" data-aos-duration="1500">Skills</h2>

                <div class=' self-end box-border mb-28 w-full'>


                    <div class="container  px-5 py-24 mx-auto lg:px-16">
                    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-16 lg:px-8">
<p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
  My tech stacks & some tools I use in my work flow
</p>
<Stack/>
{/* <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={j}
      alt="Workcation"
    />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8  ">
    <img class="max-h-4 filter grayscale " src={a} alt="Mirage" />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img class="max-h-4 filter grayscale " src={s} alt="Tuple" />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img class="max-h-4 filter grayscale " src={m} alt="Laravel" />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={n}
      alt="StaticKit"
    />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={r}
      alt="Statamic"
    />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={g}
      alt="Statamic"
    />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={f}
      alt="Statamic"
    />
  </div>
  <div class="col-span-1 flex justify-center py-8 px-8 ">
    <img
      class="max-h-4 filter grayscale "
      src={c}
      alt="Statamic"
    />
    
  </div>
</div> */}
</div>
                    </div>


                </div>
            </div>
        </div>



    </div>
</>
  )
}

export default About