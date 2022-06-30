import React, {useState,useEffect} from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Jfaloader from '../components/Jfaloader'
import Navbar from '../components/Navbar'
import SlideText from '../components/SlideText'
import Works from '../components/Works'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Shop from '../components/Shop'
import CurtainSlider from '../curtain-slider/CurtainSlider'
import SelectiveRenderTargets from '../components/SelectiveRenderTargets'
import Stack from '../components/Stack2'
import Stack3 from '../components/Stack3'
import Stack4 from '../components/Stack4'



const Home = () => {
 
//   const [loader, setLoader] = useState(true); 

 
//  useEffect(() => {

// setTimeout(()=>{
//   setLoader(false)
// },9000)




//  })
 
const { scroll } = useLocomotiveScroll();
 
   return  (
     <>
     <Navbar/>
    <section  data-scroll-container className=" min-h-screen scroll-smooth  bg-texture  ">
     {/* <section 
     
     className=' scroll-smooth  h-screen w-full flex flex-col  bg-texture relative   '  > */}
         
        
    
         
         {/* <Image
     
     src={noise}
     alt='roundanimation'
     /> */}
     <Hero/>
     
         {/* <div data-aos="fade-right" data-aos-duration="2500" className=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10
     m-auto   '>
           <div className=''>
     
             <h1 className='box-border font-light m-0  pb-10 uppercase text-xl whitespace-nowrap  sm:whitespace-normal   xs:whitespace-normal '>Full Stack Web Developer -
              Front end Oriented -
              Logo Creator </h1>
           </div>
     
     
           <div data-aos="fade-down" data-aos-duration="3000" className=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">
     
     
     
             <h1 className=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block font-semibold lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none xs:-rotate-90 xs:text-5xl uppercase '>Jose Batumeni</h1>
             <div className="w-48 2xl:w-60">
               <Image className='   animate-spin-slow'
                 src={roundtxt}
                 alt='roundanimation'
               />
             </div>
           </div>
     
           <div className='flex
     w-full justify-between '>
             <h1 className='text-xl'>{date}</h1>
             <a className=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>
     
           </div>
     
         </div> */}
     
     
     
      
       <SlideText/>
     <Works/>
      <Stack3/>
     {/* <Shop/>  */}
     {/* <section className=' h-max w-full pt-1  ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')" }}> */}
     <SlideText/>
     <About/>
     <SlideText/>
 
     <Contact/>
     </section>
    </>
  )
}

export default Home