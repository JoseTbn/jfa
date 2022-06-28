import React, {useRef, useEffect} from 'react'
import{Power4} from 'gsap'

const Trasition = ({timeline}) => {
  
  const trans = useRef(null)
  useEffect(() => {
    timeline.to(trans.current,
        { duration:5,
        x:2600,
    ease: Power4.easeOut }
        )
  })


    return (
    <div  className=' absolute z-50 bg-purple-900 top-0 w-full h-screen'>
        <div className="">
            <h1></h1>
        </div>
    </div>
  )
}

export default Trasition