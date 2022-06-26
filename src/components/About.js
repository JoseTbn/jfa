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
    transition : { type : "spring" ,
    bounce : 0.1 ,
    duration : 3 }
    }
}



const About = () => {
 
 
 
  return (
    <>
    <div class=' h-full w-full  bg-texture '>
    <motion.section
      initial = {"offscreen"}
      whileInView= {"onscreen"}
      viewport={{once:false, amount:0.5}}
    transition={{staggerChildren:0.5}}
    class="border-0 block m-0 px-16 py-80 align-baseline md:text-center">
        <motion.h2   
      variants={textAnimate}
    
          class="border-0 text-gray-600 font-bebasB  text-xl mx-0 mt-0 mb-10 p-0 uppercase align-baseline">DEVSECOPS PATH
        </motion.h2>
        <motion.p
           variants={textAnimate}
        class=" font-bebasB text-gray-600 border-0 text-5xl m-0 p-0 tracking-tight align-baseline w-full md:my-0 md:mx-auto">
          I have worked on some projects; during an intensive training at Becode, a great experience where I improved
          my skills in the domain of infrastructure as code and cloud computing.
          <a
          className="border-0 m-0 p-0 no-underline align-baseline text-gray-900"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >DOCKER</a
          >,
          <a
                    className=" text-gray-900 border-0 m-0 p-0 no-underline align-baseline"

            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >VAGRANT</a>
          and
          <a
                    className="border-0 m-0 p-0 no-underline align-baseline text-gray-900"

            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >TERRAFORM</a>
        </motion.p>
      </motion.section>

<Stack/>

      

       


    </div>
</>
  )
}

export default About