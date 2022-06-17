import React, { useEffect, useState,useRef } from 'react'
import vid from '../assets/jfv.mp4'


const JfaLoader = () => {
  const videoRef = useRef();

    return   (
 
    <video src={vid} type="video/mp4" autoPlay muted loop className='w-full'  ></video>
      
      
    //   <CloudinaryContext cloud_name="drjyit4nj">
    //   <div  >
    //     <Video
    //       publicId="vid/loader_jfa_snf5ih"
    //       resourceType="video"
    //   width ='100%'
    //       controls
    //       innerRef={videoRef}> 
    //        <Transformation effect="noise:77" endOffset="17" startOffset="3" />
    //        <Transformation effect="accelerate:50" />
    //        <Transformation effect="deshake:32" />
    //        <Transformation effect="progressbar:color_FF0000:width_12:type_frame" />
    //      </Video>
    //   </div>
    // </CloudinaryContext>
  );
};

export default JfaLoader