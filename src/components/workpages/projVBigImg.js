import React from 'react'
import ant from '../../assets/Beige Minimalist Mock Up Design Facebook Cover.png'



const BigImg = () => {
  return (
    <div className="container mx-auto mb-[40px] lg:mt-[70px] lg:mb-[100px]">
    <div className="relative rounded-[20px] w-full overflow-hidden aspect-video [transform:translateZ(0)]">
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
          srcSet={ant}
          src={ant}
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
        />
      </span>
    </div>
  </div>

  )
}

export default BigImg;