import React from 'react'
import Navbar from '../components/Navbar'
import SelectiveRenderTargets from '../components/SelectiveRenderTargets'
import CurtainSlider from '../curtain-slider/CurtainSlider'
import me from '../assets/1643801673897-removebg-preview.png'
import styled from "styled-components";
import { motion } from "framer-motion";
import Panels from "../components/panels";
// import useScroll from "../hooks/useScroll";
import Info from "../components/about/info";
import BigText from "../components/about/bigText";
import MainSection from "../components/about/mainSection";
import Recognitions from "../components/about/recognitions";


const AboutStyles = styled(motion.div)`
    padding: 0 4vw;
    padding-bottom: 6vw;
    .hello{
        h1{
            font-size: calc(var(--VW)*3);
            text-align: center;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .name{
        margin: 10vh 0 20vh 0;
        h1{
            font-size: calc(var(--VW)*16);
            line-height: 10vw;
            height: 10vw;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.1vw var(--black);
            text-transform: uppercase;
            :nth-child(3){
                text-align: right;
            }
        }
        h3{
            font-size: calc(var(--VW)*3);
            text-align: center;
            z-index: 5;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
    }
    .split{
        margin: 5vh 0;
        h1{
            text-transform: uppercase;
            font-size: calc(var(--VW)*3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*5);
            }
        }
    }
    .contact{
        text-align: right;
        h1{
            font-size: calc(var(--VW)*6);
            text-transform: uppercase;
        }
        a{
            font-size: calc(var(--VW)*10);
            text-transform: uppercase;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: 0.14vw var(--black);
            &:hover{
                -webkit-text-fill-color: var(--black);
                -webkit-text-stroke: 0.14vw var(--burlywood);
            }
        }
    }`





const AboutPage = () => {




  return (
    <section className=" bg-texture w-full h-full cursor-none " >
      <Navbar />
      <Panels/>
      <AboutStyles
        initial={{ backgroundColor: "#0f0e0e", pointerEvents: "none" }}
        animate={{ backgroundColor: "transparent", pointerEvents: "unset" }}
        exit={{ opacity: [1, 1, 0], transition: { duration: 1, times: [0, 0.99, 1] } }}
        data-scroll-container >
        <BigText />
        <div data-scroll-section className=" text-10xl font-bebasB">
          <h1 data-scroll data-scroll-speed="-8" data-scroll-direction="horizontal">Hi, my name is</h1>
        </div>
        <div data-scroll-section className="text-10xl font-bebasB   ">
          <h1 data-scroll data-scroll-speed="0.5"
            className=" text-16xl w-full "
            style={{
              WebkitTextStroke: '0.8px #000',
              color: 'transparent'
            }}>Jose</h1>

          <h3 data-scroll data-scroll-speed="6"
            className=" text-8xl text-center  font-bebasB"
          >Junior Devsecops & Fullstack developer</h3>

          <h1 data-scroll data-scroll-speed="0.5"
            className=" text-16xl text-right"
            style={{
              WebkitTextStroke: '0.8px #000',
              color: 'transparent'
            }}
          >Batumeni</h1>
        </div>
        <MainSection />
        <Recognitions />
        <div data-scroll-section className="split">
          <h1>Front-End Addicted</h1>
          <h1>Fullstack Capable.</h1>
        </div>
        <Info />
        <div data-scroll-section className="contact">
          <h1 className="text-3xl font-bebasB ">Got Some Ideas?</h1>
          <a className="text-3xl font-bebasB " href="mailto: ronnie@ronniefeng.com">Let's Talk.</a>
        </div>
      </AboutStyles>
    </section>
  )
}

export default AboutPage