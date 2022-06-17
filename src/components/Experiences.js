import React from 'react'
import { motion } from "framer-motion";

const Experiences = () => {
    const parent = {
        variantA: { scale: 1 },
        variantB: { scale: 1.25 },
    }

    const child = {
        variantA: { bottom: 0, right: 0, rotate: 0 },
        variantB: { top: 0, left: 0, rotate: 180 },
    }
  
    return (
    <div className="container max-w-7xl">
        <a href="/" className="inline-flex items-center font-normal text-xs leading-none lowercase"><span>Experiences</span></a>
        <motion.div  variants={parent}
                initial="variantA"
                whileHover="variantB"
              className=" overflow-hidden h-24  bg-none cursor-pointer grid leading-none m-0 px-0 py-4 bg-orange-400 relative text-left uppercase w-full
        ">
           
                {/* <span className="outline-none relative overflow-hidden  border-b-2 font-bebasB text-7xl text-gray-500 
                 border-gray-900  ">VIDEP</span> */}
             
            
       
        <motion.button 
             variants={child}
             transition={{
                 type: "ease",
                 }}
              className=" overflow-hidden h-24  bg-none cursor-pointer grid leading-none m-0 px-0 py-4 bg-orange-400 absolute text-left uppercase w-full
        ">
           
                <span className="outline-none relative overflow-hidden  border-b-2 font-bebasB text-7xl text-gray-500 
                 border-gray-900  ">VIDEP</span>
             
            
        </motion.button> </motion.div>
        <button className="bg-transparent  overflow-hidden h-24 bg-none cursor-pointer grid leading-none m-0 px-0 py-4 relative text-left uppercase w-full">
            <div className="  outline-none  border-b-2 font-bebasB text-7xl text-gray-500 border-gray-900 ">VIDEP</div>
        </button>
        <button className="bg-transparent  overflow-hidden h-24 bg-none cursor-pointer grid leading-none m-0 px-0 py-4 relative text-left uppercase w-full">
            <div className="  outline-none  border-b-2 font-bebasB text-7xl text-gray-500 border-gray-900 ">VIDEP</div>
        </button>
        <button className="bg-transparent  overflow-hidden h-24 bg-none cursor-pointer grid leading-none m-0 px-0 py-4 relative text-left uppercase w-full">
            <div className="  outline-none  border-b-2 font-bebasB text-7xl text-gray-500 border-gray-900 ">VIDEP</div>
        </button>
        <button className="bg-transparent  overflow-hidden h-24 bg-none cursor-pointer grid leading-none m-0 px-0 py-4 relative text-left uppercase w-full">
            <div className="  outline-none  border-b-2 font-bebasB text-7xl text-gray-500 border-gray-900 ">VIDEP</div>
        </button>
    </div>
  )
}

export default Experiences