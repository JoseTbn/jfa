import React from 'react'
import apricing from '../../assets/images/projects/agency/apricing.png'
import about from '../../assets/images/projects/agency/about.png'
import contact from '../../assets/images/projects/agency/contact.png'
import ant from '../../assets/Beige Minimalist Mock Up Design Facebook Cover.png'
import DoublrCaseText from './DoublrCaseText'
import LeftImg from './LeftImg'
import BigImg from './projVBigImg'
import RightImg from './RightImg'

import { motion } from "framer-motion"



const ImgAnimate = {

  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale : [0,1],
    transition: {
      type: "spring",
      duration: 1.8
    }
  }
}



const ProjVEnd = () => {
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}>
        <div className=" container mx-auto">
          <div className="  grid grid-cols-12 gap-10 mb-[60px] lg:mb-[160px]">
            <motion.div variants={ImgAnimate} className=" col-span-4 lg:col-span-6  mb-[60px] lg:mb-0 last:mb-0 ">
              <div className="relative  aspect-[134/155]">
                <div className="block w-full h-full rounded-[20px] overflow-hidden [transform:translateZ(0)]">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      inset: 0
                    }}
                  >
                    <img
                      sizes=" (max-width: 320px) 280px, (max-width: 480px) 440px, 800px "
                      srcSet={about}
                      src={about}
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "fit"
                      }}
                      className=" object-fill "
                    />
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={ImgAnimate} className="col-span-4 lg:col-span-6  mb-[60px] lg:mb-0 last:mb-0 lg:col-start-7">
              <div className="relative  aspect-[134/155]">
                <div className="block w-full h-full rounded-[20px] overflow-hidden [transform:translateZ(0)]">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      inset: 0
                    }}
                  >
                    <img
                      src={contact}
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "fill"
                      }}
                      sizes=" (max-width: 320px) 280px, (max-width: 480px) 440px, 800px "
                      srcSet={contact}
                      className=""
                    />
                    <noscript />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <DoublrCaseText />
      <motion.div
      ><BigImg img={apricing} /></motion.div>
      <RightImg />
      <LeftImg />
      <DoublrCaseText />
      <BigImg img={apricing}/>
      <LeftImg />
      <BigImg img={apricing}/>

      <LeftImg />

    </>
  )
}

export default ProjVEnd