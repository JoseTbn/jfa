import React from 'react'
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
        <div className="container mx-auto">
          <div className="  grid grid-cols-12 gap-10 mb-[60px] lg:mb-[160px]">
            <motion.div variants={ImgAnimate} className="col-span-4 lg:col-span-6  mb-[60px] lg:mb-0 last:mb-0 ">
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
                      srcSet="https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=16&q=75&fit=clip&auto=format 16w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=32&q=75&fit=clip&auto=format 32w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=48&q=75&fit=clip&auto=format 48w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=64&q=75&fit=clip&auto=format 64w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=96&q=75&fit=clip&auto=format 96w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=128&q=75&fit=clip&auto=format 128w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=256&q=75&fit=clip&auto=format 256w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=384&q=75&fit=clip&auto=format 384w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=640&q=75&fit=clip&auto=format 640w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=750&q=75&fit=clip&auto=format 750w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=828&q=75&fit=clip&auto=format 828w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=1080&q=75&fit=clip&auto=format 1080w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=1200&q=75&fit=clip&auto=format 1200w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=1440&q=75&fit=clip&auto=format 1440w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=1920&q=75&fit=clip&auto=format 1920w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=2048&q=75&fit=clip&auto=format 2048w, https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=3840&q=75&fit=clip&auto=format 3840w"
                      src="https://cdn.sanity.io/images/s695h8ei/production/c278adb16ee4398b546c2c9a7b15ee28f7c4fac3-1340x1550.jpg?w=3840&q=75&fit=clip&auto=format"
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
                        objectFit: "cover"
                      }}
                      className=""
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
                      src="https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=3840&q=75&fit=clip&auto=format"
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
                        objectFit: "cover"
                      }}
                      sizes=" (max-width: 320px) 280px, (max-width: 480px) 440px, 800px "
                      srcSet="https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=16&q=75&fit=clip&auto=format 16w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=32&q=75&fit=clip&auto=format 32w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=48&q=75&fit=clip&auto=format 48w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=64&q=75&fit=clip&auto=format 64w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=96&q=75&fit=clip&auto=format 96w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=128&q=75&fit=clip&auto=format 128w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=256&q=75&fit=clip&auto=format 256w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=384&q=75&fit=clip&auto=format 384w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=640&q=75&fit=clip&auto=format 640w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=750&q=75&fit=clip&auto=format 750w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=828&q=75&fit=clip&auto=format 828w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=1080&q=75&fit=clip&auto=format 1080w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=1200&q=75&fit=clip&auto=format 1200w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=1440&q=75&fit=clip&auto=format 1440w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=1920&q=75&fit=clip&auto=format 1920w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=2048&q=75&fit=clip&auto=format 2048w, https://cdn.sanity.io/images/s695h8ei/production/22ace7c55838bbf9cf422e066bf6a2ff025fcde2-1340x1550.jpg?w=3840&q=75&fit=clip&auto=format 3840w"
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
      ><BigImg /></motion.div>
      <RightImg />
      <LeftImg />
      <DoublrCaseText />
      <BigImg />
      <LeftImg />
      <BigImg />

      <LeftImg />

    </>
  )
}

export default ProjVEnd