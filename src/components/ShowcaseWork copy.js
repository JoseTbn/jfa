import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './Button';
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

const ImgAnimate ={

    offscreen : { y : 100, opacity : 0} ,
      onscreen : { y : 0 ,
        opacity : 1,
      transition : { type : "spring" ,
      duration : 0.7 }
      }
  }


const ShowcaseWork2 = (props) => {
  
    let navigate = useNavigate();
    function explore() {
      navigate('/Work/Work:id');
    }
  
    return (
    
    <div className={props.className}
   
    >
        
        <motion.div className=" "
        
        initial = {"offscreen"}
        whileInView= {"onscreen"}
        viewport={{once:false, amount:0.5}}
      >
          <motion.div className=" group cursor-pointer  relative w-full rounded-[20px] overflow-hidden aspect-[343/400] [transform:translateZ(0)] lg:aspect-[669/783]"
            variants={ImgAnimate}
     
          >
        
              <Link to={`/Work/Work:id`} className="relative block h-full w-full overflow-hidden" >
                  <div className="absolute inset-0 w-full h-full">
                          <span style={{boxSizing:"border-box" , display:"block" , overflow:"hidden" , width:"initial" , height:"initial" , background:"none" , opacity:"1" , border:"0" , margin:"0" , padding:"0" , position:"absolute" , top:"0" , left:"0" , bottom:"0" , right:"0"}}>
                            <img className='relative z-10' style={{position:"absolute",inset:"0px",boxSizing:"border-box",padding:"0px",border:"none",margin:"auto",display:"block",width:"0px",height:"0px",minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:"cover"}} src={props.src} alt="" />
                            </span>
                  </div>
                  <div className='flex flex-row items-center justify-between mt-z-10 absolute w-full h-full inset-0 bg-black opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-40'>
                  </div>
              </Link>
<div  className="absolute z-10 top-1/2 -translate-y-1/2 pointer-events-none">
    <div className=" relative overflow-hidden">
                            <div className=" w-fit">
                                <div className=" w-max flex whitespace-nowrap  animate-scrollZ will-change-transform " style={{animationDuration:"8000ms"}}>
                                    <div className="flex items-center flex-shrink-0">
                                        <div className="relative overflow-hidden py-[20px]">
                                            <div className="group-hover:translate-y-0 group-hover:opacity-100 translate-y-[100px] opacity-0 transition-all duration-1000 ease-in-out flex items-center text-dust will-change-transform text-[40px] lg:text-[82px]">
                                                <span className="font-display inline-block leading-none group-hover:text-red-500  font-bebasB lg:font-normal">{props.name}</span>
                                                <svg className="-scale-0 origin-center transition-all duration-1000 ease-in-out group-hover:scale-100 delay-300 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] mx-[10px] lg:mx-[15px] mt-[-1px] lg:mt-[-5px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="16" cy="16" r="15.5" fill="#EEEAEA" stroke="#EEEAEA">
                                                    </circle>
                                                    <path d="M13.2859 10.9953L13.1869 10.9952L13.1858 11.0942L13.175 12.0603L13.1739 12.1614L13.2749 12.1614L20.0123 12.1649L9.99334 22.1838L9.92263 22.2545L9.99334 22.3253L10.6758 23.0077L10.7465 23.0784L10.8172 23.0077L20.8362 12.9886L20.8432 19.7297L20.8433 19.8311L20.9447 19.8296L21.9072 19.8152L22.0058 19.8138L22.0057 19.7152L21.9986 11.1024L21.9985 11.0025L21.8986 11.0025L13.2859 10.9953Z" fill="#16161D" stroke="#16161D" stroke-width="0.2">
                                                    </path>
                                                </svg>
                                                <span className="font-display inline-block leading-none ml-[3px] mr-[6px] lg:mx-[15px] pb-[4px]">–</span>
                                            </div>
                                        </div>
</div>
                                    <div className="flex items-center flex-shrink-0">
                                        <div className="relative overflow-hidden py-[20px]">
                                            <div className="group-hover:translate-y-0  group-hover:text-red-500  group-hover:opacity-100 translate-y-[100px] opacity-0 transition-all duration-1000 ease-in-out flex items-center text-dust will-change-transform text-[40px] lg:text-[82px]">
                                                <span className="font-display inline-block leading-none  font-bebasB  lg:font-normal">View Project</span>
                                                <svg className="-scale-0 origin-center transition-all duration-1000 ease-in-out group-hover:scale-100 delay-300 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] mx-[10px] lg:mx-[15px] mt-[-1px] lg:mt-[-5px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="16" cy="16" r="15.5" fill="#EEEAEA" stroke="#EEEAEA">
                                                    </circle>
                                                    <path d="M13.2859 10.9953L13.1869 10.9952L13.1858 11.0942L13.175 12.0603L13.1739 12.1614L13.2749 12.1614L20.0123 12.1649L9.99334 22.1838L9.92263 22.2545L9.99334 22.3253L10.6758 23.0077L10.7465 23.0784L10.8172 23.0077L20.8362 12.9886L20.8432 19.7297L20.8433 19.8311L20.9447 19.8296L21.9072 19.8152L22.0058 19.8138L22.0057 19.7152L21.9986 11.1024L21.9985 11.0025L21.8986 11.0025L13.2859 10.9953Z" fill="#16161D" stroke="#16161D" stroke-width="0.2">
                                                    </path>
                                                </svg>
                                                <span className="font-display inline-block leading-none ml-[3px] mr-[6px] lg:mx-[15px] pb-[4px]">–</span>
                                            </div>
                                        </div>
</div>
                                    <div className="flex items-center flex-shrink-0">
                                        <div className="relative overflow-hidden py-[20px]">
                                            <div className="group-hover:translate-y-0 group-hover:text-red-500 group-hover:opacity-100 translate-y-[100px] opacity-0 transition-all duration-1000 ease-in-out flex items-center text-dust will-change-transform text-[40px] lg:text-[82px]">
                                                <span className="font-display inline-block leading-none  font-bebasB  lg:font-normal">View Project</span>
                                                <svg className="-scale-0 origin-center transition-all duration-1000 ease-in-out group-hover:scale-100 delay-300 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] mx-[10px] lg:mx-[15px] mt-[-1px] lg:mt-[-5px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="16" cy="16" r="15.5" fill="#EEEAEA" stroke="#EEEAEA">
                                                    </circle>
                                                    <path d="M13.2859 10.9953L13.1869 10.9952L13.1858 11.0942L13.175 12.0603L13.1739 12.1614L13.2749 12.1614L20.0123 12.1649L9.99334 22.1838L9.92263 22.2545L9.99334 22.3253L10.6758 23.0077L10.7465 23.0784L10.8172 23.0077L20.8362 12.9886L20.8432 19.7297L20.8433 19.8311L20.9447 19.8296L21.9072 19.8152L22.0058 19.8138L22.0057 19.7152L21.9986 11.1024L21.9985 11.0025L21.8986 11.0025L13.2859 10.9953Z" fill="#16161D" stroke="#16161D" stroke-width="0.2">
                                                    </path>
                                                </svg>
                                                <span className="font-display inline-block leading-none ml-[3px] mr-[6px] lg:mx-[15px] pb-[4px]">–</span>
                                            </div>
                                        </div>
</div>
                                    <div className="flex items-center flex-shrink-0">
                                        <div className="relative overflow-hidden py-[20px]">
                                            <div className="group-hover:translate-y-0 group-hover:text-red-500 group-hover:opacity-100 translate-y-[100px] opacity-0 transition-all duration-1000 ease-in-out flex items-center text-dust will-change-transform text-[40px] lg:text-[82px]">
                                                <span className="font-display inline-block leading-none  font-bebasB  lg:font-normal">View Project</span>
                                                <svg className="-scale-0 origin-center transition-all duration-1000 ease-in-out group-hover:scale-100 delay-300 w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] mx-[10px] lg:mx-[15px] mt-[-1px] lg:mt-[-5px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="16" cy="16" r="15.5" fill="#EEEAEA" stroke="#EEEAEA">
                                                    </circle>
                                                    <path d="M13.2859 10.9953L13.1869 10.9952L13.1858 11.0942L13.175 12.0603L13.1739 12.1614L13.2749 12.1614L20.0123 12.1649L9.99334 22.1838L9.92263 22.2545L9.99334 22.3253L10.6758 23.0077L10.7465 23.0784L10.8172 23.0077L20.8362 12.9886L20.8432 19.7297L20.8433 19.8311L20.9447 19.8296L21.9072 19.8152L22.0058 19.8138L22.0057 19.7152L21.9986 11.1024L21.9985 11.0025L21.8986 11.0025L13.2859 10.9953Z" fill="#16161D" stroke="#16161D" stroke-width="0.2">
                                                    </path>
                                                </svg>
                                                <span className="font-display inline-block leading-none ml-[3px] mr-[6px] lg:mx-[15px] pb-[4px]">–</span>
                                            </div>
                                        </div>
</div>

                                </div>

                            </div>
    </div>
</div>
</motion.div>
<div className="flex justify-between mt-[20px] flex-row items-center">
    <a href="/work/daysmart" className="">
    <span className="h5 font-bebasB group-hover:text-red-500  text-4xl">{props.name}</span>
</a>
<div className="flex items-center null">
    <span className=" font-bebasB">DESIGN<span className="mx-[4px]">-</span>
</span>
<span className=" font-bebasB">COPY<span className="mx-[4px]">-</span>
</span>
<span className=" font-bebasB">DEV</span>
</div>
</div>

        </motion.div>
    </div>

    
  )
}

export default ShowcaseWork2