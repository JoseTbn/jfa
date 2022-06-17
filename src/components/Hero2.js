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



const Hero2 = () => {

    const { scroll } = useLocomotiveScroll();

    const scrollRef = useRef(null);
    const scrollRef2 = useRef(null);

    const tl = gsap.timeline();

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



    useEffect(() => {
        const el = scrollRef.current;
        gsap.fromTo(el, { translateX: -1900 }, {
            translateX: 0, duration: 2, scrollTrigger: {
                trigger: el,
                toggleActions: "restart pause  reverse none"
            }
        })
    }, []);

    return (
        <div data-scroll-container className="w-full h-screen bg-texture">
                        
            <div data-scroll-container  class="flex flex-col    ">
                <div  className=" flex flex-row h-1/2 ">
                    <div data-scroll-container
                        className=""
                        data-scroll=""
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                        data-scroll-speed="9"
                    >
                        <p className=" ">
                            <span className="   lg:text-20xl md:text-8xl  font-bebasB f  text-gray-600   ">
                                D
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                                E
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB text-gray-600     ">
                                V
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB f text-gray-600    ">
                                S
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                                E
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB f text-gray-600    ">
                                C
                            </span>
                        </p>
                    </div>
                    <span class="  lg:text-20xl md:text-8xl text-gray-600 transform  scale-105 ">—</span>
                    <div data-scroll=""
                        data-scroll-position="top"
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-9" className="">
                        <p className=" ">
                            <span className="   lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                                O
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                                P
                            </span>
                            <span className="  lg:text-20xl md:text-8xl  font-bebasB   text-gray-600   ">
                                S
                            </span>
                        </p>
                    </div>
                </div>
                <div className=" flex justify-between w-full items-center h-1/2">
                    <div className="  flex-auto  ">
                        <p className="tracking-tighter  lg:text-16xl md:text-4xl   font-bebasB font-extrabold  ">
                            <span className=" m-0    lg:text-16xl md:text-4xl   font-bebasB   text-gray-600   ">
                                F
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                U
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                L
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                L
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                S
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                T
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                A
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                C
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                K
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                D
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                E
                            </span>
                            <span className="   lg:text-16xl md:text-4xl  font-bebasB   text-gray-600   ">
                                V
                            </span>
                        </p>
                    </div>
                    <div className="ml-10 p-0  max-w-sm ">
                        <p>
                            I'm a driven person who works hard to attain my goals.The ability to overcome obstacles and follow things through to completion has always been a strong point of mine.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero2