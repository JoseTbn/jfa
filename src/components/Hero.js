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
