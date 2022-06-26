import React from 'react'
import { motion } from "framer-motion"



const ImgAnimate ={

  offscreen : { y : 100, opacity : 0} ,
    onscreen : { y : 0 ,
      opacity : 1,
    transition : { type : "spring" ,
    duration : 1.8 }
    }
}



const DoublrCaseText = () => {
  return (
    <div className="">
    <div className="container mx-auto pt-[20px] pb-[60px] lg:pt-0 lg:pb-[160px]">
      <div className=" grid grid-cols-12 gap-10">
        <div className="col-span-4 lg:col-start-3">
          <h2 className="font-semibold text-2xl leading-7 mx-0 mt-0 mb-5 tracking-tighter lg:font-semibold lg:text-4xl lg:mb-0 lg:tracking-tight">
            Creating a sense of community
          </h2>
        </div>
        <div className="col-span-4 lg:col-span-4 lg:col-start-7">
          <div className="text-lg leading-6">
            Carv’s in-app Ski:IQ™ leaderboard was key to spreading brand awareness
            within the ski community. But Carv also wanted to create an online hub
            for skiers, whether they be app users or not. We created a ‘What’s
            new’ page for the site that would sit in the top navigation and offer
            updates from the team. Plus, we developed an engaging, interactive
            blog that could be regularly updated with winter sports content going
            forward.
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DoublrCaseText