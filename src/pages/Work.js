import React,{useRef, useEffect} from 'react'
import gsap from 'gsap'
import {useParams} from "react-router-dom"
import Navbar from '../components/Navbar'
import EndNextP from '../components/workpages/EndNextP'
import EndNextPDown from '../components/workpages/EndNextPDown'
import ProjV from '../components/workpages/projV'
import ProjVEnd from '../components/workpages/ProjVEnd'
import SlideDownParallax from '../components/workpages/SlideDownParallax'
import TopTitleSlider from '../components/workpages/topTitleSlider'
import projetcsData from '../utils/projetcsData'
import Trasition from '../components/Trasition'
import Panels from '../components/panels'



export const WorkImgs = (props) => {





  return (
    <> 
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
</>
  )
}





const Work = (props) => {
 
  const {Id} = useParams()
  
  const thisWork = projetcsData.find(work => work.id === Id) 
 






 return (
<section  className=" min-h-screen bg-texture cursor-none   scroll-smooth ">
<Panels/>

<Navbar/>

<TopTitleSlider/>


<ProjV
/>
<ProjVEnd/>
<EndNextP/>
<EndNextPDown/>
</section>
  )
}

export default Work