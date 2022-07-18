import React from 'react'
import  j from "../assets/stacks/javascript.svg"
import  a from "../assets/stacks/aws.svg"
import  c from "../assets/stacks/css.svg"
import  f from "../assets/stacks/figma.svg"
import  g from "../assets/stacks/git.svg"
import  h from "../assets/stacks/html.svg"
import  m from "../assets/stacks/mongo.svg"
import  s from "../assets/stacks/sass.svg"
import  n from "../assets/stacks/node.svg"
import  t from "../assets/stacks/tailwind.svg"
import {motion} from "framer-motion";
import {Animations} from "../animations";

const divAnimate ={

  offscreen : { y : 100, opacity : 0} ,
    onscreen : { y : 0 ,
      opacity : 1,
      scale : [0.,1],
    transition : { type : "spring" ,
    bounce : 0.1 ,
    duration : 0.8 }
    }
}


const Stack = () => {
  
  
  return (
   

<motion.section 
 initial = {"offscreen"}
 whileInView= {"onscreen"}
 viewport={{once:false, amount:0.2}}
transition={{staggerChildren:0.5}}
className="py-2 md:py-20">
  <motion.div variants={divAnimate}  className="container w-3/4 px-4 mx-auto">

    <div className="flex flex-wrap -mx-3 mb-6 lg:mb-0">
      <div className="w-full lg:w-1/2 flex flex-wrap px-3 mb-6 lg:md-0">
        <div className="w-1/2 h-64 pr-3 pb-3">
          <img className="h-full bg-white p-4 object-cover filter  hover:filter-none rounded-2xl" src="https://jolicode.com/media/original/2013/10/homepage-docker-logo.png" alt=""/>
        </div>
        <div className="w-1/2 h-64 pl-3 pb-3">
          <img className="h-full bg-white p-4 filter  hover:filter-none  object-fit rounded-2xl" src="https://logos-download.com/wp-content/uploads/2018/09/Kubernetes_Logo.png" alt="kubernetes"/>
        </div>
        <div className="w-1/2 h-64 pr-3 pt-3">
          <img className="h-full bg-white p-4 object-cover filter  hover:filter-none rounded-2xl" src="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png" alt="vagrant"/>
        </div>
        <div className="w-1/2 h-64 pl-3 pt-3">
          <img className="h-full bg-white p-4 object-cover filter  hover:filter-none rounded-2xl" src="https://blog.stephane-robert.info/img/Terraform-logo.png" alt="terraform"/>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-3">
        <img className="h-[510px] bg-white p-4 w-full  object-fit filter  hover:filter-none  rounded-2xl" src="https://www.arsouyes.org/user/pages/01.blog/2020/07_Certificats_Gitlab/gitlab_logo.png" alt="gitlab"/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full lg:w-1/2 px-3 order-last lg:order-first mt-6 lg:mt-0">
        <img className="h-[510px] bg-white p-4 w-full  object-cover filter  hover:filter-none rounded-2xl" src="https://sysreseau.net/wp-content/uploads/2020/05/ansible-2.png" alt="ansible"/>
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap px-3">
        <div className="w-1/2 h-64 pr-3 pb-3">
          <img className="h-full bg-white p-4  object-center filter  hover:filter-none rounded-2xl" src="https://camo.githubusercontent.com/8e503aeddca5ec8eac6ec81c5cc6d65b28682feeda61cca72527834109b254e5/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313630302f312a4c4f46625450325378586346704d5f715473555375772e706e67" alt="jenkins"/>
        </div>
        <div className="w-1/2 h-64 pl-3 pb-3">
          <img className="h-full bg-white p-4 object-fit filter  hover:filter-none rounded-2xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png" alt=""/>
        </div>
        <div className="w-1/2 h-52 pr-3 pt-3">
          <img className="h-full bg-white p-4 object-fit filter  hover:filter-none rounded-2xl" src="https://custom-one.fr/wp-content/uploads/2021/04/NGINX-logo-rgb-large.png" alt=""/>
        </div>
        <div className="w-1/2 h-64 pl-3 pt-3">
          <img className="h-full bg-white p-4 object-fit filter  hover:filter-none rounded-2xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png" alt=""/>
        </div>
      </div>
    </div>
  </motion.div>
</motion.section>
  )
}

export default Stack