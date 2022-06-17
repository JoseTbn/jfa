import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button';


const ShowcaseWork2 = (props) => {
  
    let navigate = useNavigate();
    function explore() {
      navigate('/Work/Work:id');
    }
  
    return (
    <div className=" container m-auto h-full  ">
    
    <div className="flex ">
        
        <div className="flex flex-col w-full">
        <div className={props.side}>
            <div className={props.className}>
                <img  src={props.src} alt="" />
                <h2 className=" font-bebasB text-6xl ">{props.name}</h2>
                <p className="">{props.desc}</p>
            </div>
        </div>
        </div>
      
        <div className="flex flex-col w-full mt-80">
        <div className={props.side}>
            <div className={props.className}>
                <img  src={props.src} alt="" />
                <h2 className=" font-bebasB text-6xl ">{props.name}</h2>
                <p className="">{props.desc}</p>
            </div>
        </div>
        </div>
    </div>


    </div>
  )
}

export default ShowcaseWork2