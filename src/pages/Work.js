import React from 'react'
import {useParams} from "react-router-dom"
import projetcsData from '../utils/projetcsData'



export const WorkImgs = (props) => {

  
  return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-4/5 h-4/5  m-auto rounded-lg bg-white py-60 px-10 relative  mb-60">
        <img alt="gallery" class="w-11/12 object-cover rounded-xl mx-auto my-auto justify-center align-middle object-center block  absolute inset-0" src='https://i.ibb.co/QQb1SXz/anticip.png'/>
        <div class="text-center relative z-10 w-full">
       
         
        </div>
      </div>
 
    </div>
  </div>
</section>
  )
}





const Work = (props) => {
 
  const {Id} = useParams()
  
  const thisWork = projetcsData.find(work => work.id === Id) 
 
 return (
<div className="  bg-texture">
<div className="container">
<div className=" box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10 
m-auto   ">
<h1>{thisWork.name}</h1>
<p className="pb-1">{thisWork.desc}</p>
<p className="pb-1">{thisWork.name}</p>
<button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 w-28 mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">Go live</button>
</div>
</div>

<WorkImgs/>
</div>
  )
}

export default Work