import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import locomotiveScroll from "locomotive-scroll";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import roundtxt from "../assets/circletext.f0059cc8.svg";
import { motion } from "framer-motion";
import { BsArrowDownCircle } from 'react-icons/bs'
import {Animations} from "../animations";

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

  const {transition, textReveal} = Animations();

  useEffect(() => {
    const el = scrollRef.current;
    tl.from(el, {
      duration: 0.7,
      scaleX: 400

    })
  }, []);

  return (
    <>
      <motion.section class="  bg-texture   h-full ">



        <motion.div 
        class="flex flex-col  border-0  mx-0 mt-0 mb-40 py-0 px-16 align-baseline -space-y-20 ">
          <div
            className="relative flex  justify-start m-0 py-0 pl-0 pr-10 align-baseline h-1/2 ">
            
            
            <motion.div
              variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.7}}

              id="title"
              className="  "

              data-scroll=""
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              data-scroll-speed="9"
            >
              <p className=" tracking-tighter   ">
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  D
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700   text-gray-600     ">
                  V
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700    text-gray-600    ">
                  S
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700  z-30   text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700 z-30   text-gray-600    ">
                  C
                </span>
               
              </p>

            </motion.div>

            <motion.span 
              variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.7}}
              class="  border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl text-gray-600 transform will-change-scroll scale-105 ">—</motion.span>
  
              <motion.div 
              variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.7}}
              
              data-scroll=""
              data-scroll-position="top"
              data-scroll-direction="horizontal"
              data-scroll-speed="-9" className="  ">
              <p className="tracking-tighter  ">
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  O
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  P
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline lg:text-20xl md:text-8xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  S
                </span>
              </p>

            </motion.div>
        
          </div>
    {/* <span className=" z-0 lg:text-[600px]  mt-18 ml-80 fixed  text-gray-500 md:text-8xl  "
                  style={{
                    WebkitTextStroke: '0.8px #000',
                    color: 'transparent'
                  }} > &
                </span> */}

          <div className=" flex justify-between w-full items-center h-1/2"
            data-scroll=""
            data-scroll-position="top"
            data-scroll-direction="horizontal"
            data-scroll-speed="15"
          >

            <motion.div 
              variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.7}}
            
            className="border-0 box-border inline-block m-0 p-0 align-baseline  flex-auto  ">
              <p className="tracking-tighter  lg:text-16xl md:text-4xl   font-bebasB font-extrabold  ">

                <span className="border-0 box-border m-0  align-baseline  lg:text-16xl md:text-4xl   font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  F
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  U
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  L
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  L
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  S
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  T
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  A
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  C
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  K
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  D
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  E
                </span>
                <span className="border-0 box-border m-0 p-0 align-baseline  lg:text-16xl md:text-4xl  font-bebasB transition-all duration-200 ease-in-out hover:text-orange-700     text-gray-600   ">
                  V
                </span>
              </p>
            </motion.div>

            <div className="border-0 box-border flex flex-col ml-10 p-0 align-baseline max-w-sm h-full ">
              <p className="border-0 text-x font-semibold  m-0 p-0  align-baseline">
                <span className=' uppercase  font-thin' >About</span> I'm a junior devsecops & fullstack developer based in Arlon , Belgium focused on creating interactive digital experiences on the web. Being very inquisitive this year within my graduation I started my transition into the cloud and Infrastructure as code.
              </p>

              <div className="flex w-full align-middle items-center justify-between mt-8">
                <p className=' '>Scroll down</p>

                <span className="  animate-bounce ">
                  <BsArrowDownCircle />
                </span>
              </div>
            </div>


          </div>


          <div className="border-0 box-border justify-between m-0 p-0 align-baseline w-full md:flex">



          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
