import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import locomotiveScroll from "locomotive-scroll";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import roundtxt from "../assets/circletext.f0059cc8.svg";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Hero = () => {
  const { scroll } = useLocomotiveScroll();

  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const tl = gsap.timeline();

  const current = new Date();
  const date = `${current.getHours()}:${current.getUTCMinutes()}   ${current.getUTCDate()}/${current.getUTCMonth() + 1
    }/${current.getFullYear()} `;


  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true
  //   });
  // });

  useEffect(() => {
    ; (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const dataScrollContainer = document.querySelector(
          '[data-scroll-container]',
        )

        if (!dataScrollContainer) {
          console.warn(
            'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.',
          )
        }

        window.locomotive = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          smooth: true,
        })
      } catch (error) { }
    })()

    return () => {
      window.locomotive?.destroy()
    }
  }, [])

  // useEffect(() => {

  //   if (typeof window === "undefined") {
  //     return;
  //   }

  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: scrollRef.current,
  //       smooth: true
  //     });
  //   });

  //   return () => scroll.destroy;
  // }, []);

  

  useEffect(() => {
    const el = scrollRef.current;
    tl.from(el, { 
      duration: 1.5,
      delay: 4,
      yPercent: 200,
      
    })
  }, []);

  return (
    <>
      <section  class="  bg-texture   h-full ">
        {/* 
<div data-aos="fade-right" data-aos-duration="2500" class=' box-border  flex flex-col w-4/5 h-4/5 px-4  py-4 md:pt-20 xs:pt-10 
m-auto   '>
<div class=''>

 <h1 class='box-border  m-0  pb-10  text-xl   xs:whitespace-normal uppercase text-gray-600 tracking-wider '>Full Stack Web Developer -
  Front end Oriented -
  Logo Creator </h1>
</div>


<div data-aos="fade-down" data-aos-duration="3000" class=" w-full my-auto  lg:h-72 lg:mb-20 2xl:h-60 flex  justify-between ">


 <h1 
  data-scroll
  data-scroll-speed="2"
  data-scroll-position="top"
  data-scroll-direction="horizontal"
 
 class=' 2xl:text-8xl  leading-4 mt-3 w-3/5 lg:text-7xl lg:block lg:leading-4 lg:mt-4 lg:tracking-tighter lg:w-3/5 2xl:leading-4 2xl:mt-1 2xl:w-3/5  lg:transform-none md:transform-none  xxs:-rotate-90 xxs:text-5xl uppercase  '><span>Jose</span> <span>Batumeni</span></h1>
 <div class="w-48 2xl:w-60   animate-spinSlow ">
   <img class=''
     src={roundtxt}
     alt='roundanimation'
   />
 </div>
</div>

<div class='flex
w-full justify-between '>
 <h1  class='text-xl'>{date}</h1>
 <a class=' text-xl   hover:underline' href="mailto:Btnjose@gmail.com">Btnjose@gmail.com</a>

</div>

</div> */}




        <div   class="flex flex-col  border-0  mx-0 mt-0 mb-40 py-0 px-16 align-baseline -space-y-12 ">
          <div 
             className="relative flex  justify-start m-0 py-0 pl-0 pr-10 align-baseline h-1/2 ">
            <div  
            
            id="title"
             className="  "
           
              data-scroll=""
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              data-scroll-speed="9"
            >
              <p className=" tracking-tighter ">
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-20xl md:text-8xl  font-bebasB f  text-gray-600   ">
                  D
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB text-gray-600     ">
                  V
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB f text-gray-600    ">
                  S
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB f text-gray-600    ">
                  C
                </span>
              </p>


            </div>
            <span class="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl text-gray-600 transform  scale-105 ">—</span>
            <div data-scroll=""
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              data-scroll-speed="-9" className="  ">
              <p className="tracking-tighter  ">
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                  O
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                  P
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                  S
                </span>
              </p>
            </div>
          </div>

          <div className=" flex justify-between w-full items-center h-1/2"
              data-scroll=""
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              data-scroll-speed="15"
          >

            <div className="border-0 box-border inline-block m-0 p-0 align-baseline  flex-auto  ">
              <p className="tracking-tighter  lg:text-16xl md:text-4xl   font-bebasB font-extrabold  ">
                
                <span className="border-0 box-border m-0  align-baseline  lg:text-16xl md:text-4xl   font-bebasB   text-gray-600   ">
                  F
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  U
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  L
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  L
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  S
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  T
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  A
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  C
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  K
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  D
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                  V
                </span>
              </p>
            </div>

            <div className="border-0 box-border inline-block ml-10 p-0 align-baseline max-w-sm ">
              <p>
                I'm a driven person who works hard to attain my goals.The ability to overcome obstacles and follow things through to completion has always been a strong point of mine.
              </p>
            </div>


          </div>


          <div className="border-0 box-border justify-between m-0 p-0 align-baseline w-full md:flex">

         

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
