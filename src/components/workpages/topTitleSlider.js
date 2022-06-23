
import React from 'react'

const TopTitleSlider = () => {
  return (
<div
  className=" overflow-x-hidden flex relative w-full"
  style={{ pauseOnHover: "running", pauseOnClick: "running" }}
>
  <div
    className=" flex min-w-full  z-10 items-center animate-scrollZ "
    style={{
      play: "running",
      direction: "normal",
      duration: "44.76s",
      delay: "0s",
      iterationCount: "infinite"
    }}
  >
    <div className=" leading-none flex items-center lg:text-[180px] lg:font-medium overflow-hidden">
      <h1 className="overflow-hidden">
        <span>Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
        <span aria-hidden="true">Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
        <span aria-hidden="true">Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
      </h1>
    </div>
  </div>
  <div
    className="flex min-w-full  z-10 items-center animate-scrollZ"
    style={{
      play: "running",
      direction: "normal",
      duration: "44.76s",
      delay: "0s",
      iterationCount: "infinite"
    }}
  >
    <div className=" leading-none flex items-center lg:text-[180px] lg:font-medium overflow-hidden">
      <h1 className="overflow-hidden">
        <span>Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
        <span aria-hidden="true">Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
        <span aria-hidden="true">Carv</span>
        <span aria-hidden="true" className="mx-[40px]">
          –
        </span>
      </h1>
    </div>
  </div>
</div>

  )
}

export default TopTitleSlider