import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Animations} from "../../animations";

const BigTextStyles = styled.div`
    height:100vh;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 10vh;
    .container{
        overflow: hidden;
        width: 100%;
        :nth-child(2){
            text-align: right;
        }
        :nth-child(3){
                padding-left: 15vw;
        }
        h1{
            text-transform: uppercase;
            font-size: 250px;
            font-family: bebasB ;
            line-height: 10vw;
            height: 10vw;
            overflow: hidden;
        }
    }
`

const BigText = ()=>{
    const {transition, textReveal} = Animations();
    return(
        <BigTextStyles
        data-scroll-section className="big-text">
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.2}}>Jojo</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 0.4}}>Fullstack</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 0.6}}>adventures</motion.h1>
            </div>
            <div className="container">
                <motion.h1 variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 0.8}}>aka</motion.h1>
            </div>
        </BigTextStyles>
    )
}


//versions tailwind

{/* <div
data-scroll-section className=" h-screen mb-[10vw] flex  flex-wrap content-center">
    <div className=" overflow-hidden w-full">
        <motion.h1 className="text-14xl h-[10vw] overflow-hidden leading-[10vw] font-bebasB " variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3}}>Slicker</motion.h1>
    </div>
    <div className="container">
        <motion.h1 className="text-16xl h-[10vw] overflow-hidden leading-[10vw] font-bebasB text-right  " variants={textReveal} initial="initial" animate="animate" transition= {{...transition, delay: 3.2}}>than your</motion.h1>
    </div>
    <div className="container">
        <motion.h1 className="text-20xl font-bebasB pl-[15vw]  " variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.4}}>average</motion.h1>
    </div>
    <div className="container">
        <motion.h1 className="text-16xl h-[10vw] overflow-hidden leading-[10vw] font-bebasB  " variants={textReveal} initial="initial" animate="animate"  transition= {{...transition, delay: 3.6}}>web dev.</motion.h1>
    </div>
</div> */}

export default BigText