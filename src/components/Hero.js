import React from 'react'
import {Link} from 'react-router-dom'


import roundtxt from '../assets/circletext.f0059cc8.svg'


const Hero = () => {
 
    const current = new Date();
    const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth()+1}/${current.getFullYear()} `;
  
 
 
    return (
    <>
      
       
    <section class='  bg-texture   h-screen w-full  ' >


<div data-aos="fade-right" data-aos-duration="2500" class=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10 
m-auto   '>
<div class=''>

 <h1 class='box-border  m-0  pb-10  text-xl   xs:whitespace-normal font-semibold uppercase text-gray-600 tracking-wider '>Full Stack Web Developer -
  Front end Oriented -
  Logo Creator </h1>
</div>


<div data-aos="fade-down" data-aos-duration="3000" class=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">



 <h1 class=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block font-semibold lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none  xxs:-rotate-90 xxs:text-5xl uppercase  '>Jose Batumeni</h1>
 <div class="w-48 2xl:w-60  animate-spin ">
   <img class=''
     src={roundtxt}
     alt='roundanimation'
   />
 </div>
</div>

<div class='flex
w-full justify-between '>
 <h1 class='text-xl'>{date}</h1>
 <a class=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

</div>

</div>



</section>
   
   </>
  )
}

export default Hero