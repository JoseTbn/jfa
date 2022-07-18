import React, {useState,useEffect} from 'react'
import ant from '../../assets/Beige Minimalist Mock Up Design Facebook Cover.png'
import BigImg from './projVBigImg'
import { motion } from "framer-motion"
import { urlFor, client } from '../../client';



//framer motion fade up reveal
const ImgAnimate ={

  offscreen : { y : 100, opacity : 0} ,
    onscreen : { y : 0 ,
      opacity : 1,
    transition : { type : "spring" ,
    duration : 1.5 }
    }
}




const projV = (props) => {
  // filtering
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  
  
  return (
    <>
    <BigImg/>
  <div className=" container mx-auto">
  <div className="grid grid-cols-12 gap-10">
    <motion.div 
      initial = {"offscreen"}
      whileInView= {"onscreen"}
      viewport={{once:false, amount:0.5}}
    className="  col-span-4 lg:col-span-5 lg:mb-[100px]">
      <motion.div
       variants={ImgAnimate}
      >
        <div className="flex items-center mb-[18px]">
          <span className="inline-block font-semibold text-2xl leading-7 mr-4 tracking-tighter lg:font-semibold lg:text-3xl lg:leading-8 lg:tracking-tight">Overview</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-none items-center cursor-pointer"
            href="https://anticip.team/"
          >
            <div className="px-[9px] pt-[4px] pb-[1px] border-[2px] uppercase font-display text-[14px] leading-none tracking-[0.04em] font-semibold rounded-[30px] border-black order-first mr-[4px]">
              Visit the website
            </div>
            <div className="relative overflow-hidden rounded-full border-[2px]  w-[23px] h-[23px] transition-all duration-500 ease-in-out  border-black group-hover:bg-red-700 group-hover:border-neon ">
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:translate-x-[50px] group-hover:translate-y-[-50px]"
                width={8}
                height={8}
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57072 0.0861157L2.52097 0.0810699L2.50943 1.11517L6.80878 1.11738L0.321655 7.6045L1.05233 8.33518L7.5397 1.84781L7.54413 6.15052L8.57577 6.13512L8.57072 0.0861157Z"
                  fill="#16161D"
                  strokeWidth="0.2px"
                  stroke="#16161D"
                />
              </svg>
              <svg
                className="absolute top-1/2 left-1/2 transition-all duration-300 ease-in-out translate-x-[-50px] translate-y-[50px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                width={8}
                height={8}
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57072 0.0861157L2.52097 0.0810699L2.50943 1.11517L6.80878 1.11738L0.321655 7.6045L1.05233 8.33518L7.5397 1.84781L7.54413 6.15052L8.57577 6.13512L8.57072 0.0861157Z"
                  fill="#16161D"
                  strokeWidth="0.2px"
                  stroke="#16161D"
                />
              </svg>
            </div>
          </a>
        </div>
        <p className="text-lg leading-6 mx-0 mt-0 mb-8 lg:font-light lg:text-xl lg:leading-7 lg:tracking-normal ">
          Carv is a wearable ski boot device that analyses your technique and
          provides audio coaching in real-time. The brand broke the sports
          wearables record on KickStarter and has built a community of over
          20,000 skiers through its personalised training plans and Ski:IQ™
          scoring system.
        </p>
        <ul className="h-[70px] columns-2">
          <li className="xs-paragraph lg:sm-paragraph">UX/UI design</li>
          <li className="xs-paragraph lg:sm-paragraph">Shopify development</li>
          <li className="xs-paragraph lg:sm-paragraph">
            Front-end development
          </li>
        </ul>
      </motion.div>
    </motion.div>
   
    <div 
    className="col-span-4 lg:col-span-5 lg:col-start-8">
      
      <motion.div variants={ImgAnimate} className="mt-[50px] lg:mt-0 pt-[14px] pb-[60px] lg:pb-[72px] border-t-[1.5px] border-black">
        <span className="block upper mb-[28px]">Background</span>
        <p className="sm-paragraph">
          We’d been working with Carv since the beginning and developed its
          first Shopify site for the boot liner technology and app. With the
          business going from strength to strength, and the Carv team planning
          to launch a new membership to the skiing community, it was time for a
          refresh.
        </p>
      </motion.div>
    </div>
  </div>
</div>

</>
  )
}

export default projV