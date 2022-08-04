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
import vagrant from "../assets/Certificates/Capture d’écran 2022-07-20 142143.png"
import {motion} from "framer-motion"
import { useState } from 'react'


const textAnimate ={

  offscreen : { y : 100, opacity : 0} ,
    onscreen : { y : 0 ,
      opacity : 1,
      scale : [0.,1],
    transition : { type : "spring" ,
    bounce : 0.1 ,
    duration : 0.8 }
    }
}
const textreveal ={

  offscreen : {   y : 200,opacity : 0} ,
    onscreen : {  y : 0,
      opacity : 1,
    transition : { type: 'spring' ,
    bounce : 0.1 ,
    duration : 1.2 }
    }
}



const Stack3 = () => {
 

  
  const [checked, setChecked] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState('All')

 
 
  return (
   
<motion.div 
 initial = {"offscreen"}
 whileInView= {"onscreen"}
 viewport={{once:false, amount:0.2}}
transition={{staggerChildren:0.5}}
className="bg-texture pt-[75px] lg:pt-[120px] pb-[88px] lg:pb-[100px]">
  <div className="container mx-auto">
    <div className=" grid grid-cols-12 gap-10 py-32">
      <div className="col-span-6">
        <h3 className="m-h5 lg:h5 mb-[20px] lg:mb-0 text-3xl font-semibold py-6  ">TECH STACKS</h3>
      </div>
      <motion.div variants={textAnimate} className="col-span-5">
        <div>
          <p variants={textAnimate} className="m-h3 lg:h3 font-bebasB text-3xl mx-0 mt-0 mb-5 tracking-tighter lg:font-semibold lg:text-6xl lg:tracking-tighter">
          The tech and tools im confortable working
          </p>
        </div>
        <div>
          <mp className="sm-paragraph lg:paragraph mb-[30px] lg:mb-[80px]">
          To secure a challenging position where I can effectively contribute my skills as a Software Professional, I’m constantly learning and working on my skills and expertise improvement..
          </mp>
        </div>
      </motion.div>
    </div>
  </div>
  <div
    className="flex relative w-full gap-x-4 overflow-x-hidden"
    style={{ pauseOnHover: "running", pauseOnClick: "running" }}
  >
    <div
      className=" flex w-full space-x-5 z-10 items-center animate-scrollZ"
      style={{
        play: "running",
        direction: "normal",
        duration: "213s",
        delay: "0s",
        iterationCount: "infinite"
      }}
    >
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={a}
            src={a}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://play-lh.googleusercontent.com/NX2yIzhb1SyMKmn0N0CFyLqY_U9U-uhD06ITeJSg67IKMCHZ50SgylgrqhHdGn1Zabs"
            src="https://play-lh.googleusercontent.com/NX2yIzhb1SyMKmn0N0CFyLqY_U9U-uhD06ITeJSg67IKMCHZ50SgylgrqhHdGn1Zabs"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://nextblick.com/static/097b58a7aa6a7e183fa8e13647f2dabe/node-js.svg"
            src="https://nextblick.com/static/097b58a7aa6a7e183fa8e13647f2dabe/node-js.svg"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={s}
            src={s}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={n}
            src={n}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={g}
            src={g}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={c}
            src={c}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            srcSet={m}
            src={m}
      
        
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "

            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          />
          {/* <noscript></noscript> */}
        </span>
      </div>
    </div>
    
{/* separation des slider */}

    <div
      className=" flex w-full space-x-5 z-10 items-center animate-scrollZ"
      style={{
        play: "running",
        direction: "normal",
        duration: "213s",
        delay: "0s",
        iterationCount: "infinite"
      }}
    >
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  w-[400px] "
            
            srcSet="https://www.evanlegamer.fr/images/clients/graphql.png"
            src="https://www.evanlegamer.fr/images/clients/graphql.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://yohannjacob.fr/img/mysql.png"
            src='https://yohannjacob.fr/img/mysql.png'
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="http://blog.engineering.publicissapient.fr/wp-content/uploads/2020/03/svelte-logo_20191220.png"
            src="http://blog.engineering.publicissapient.fr/wp-content/uploads/2020/03/svelte-logo_20191220.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={f}
            src={f}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
            src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://web-forward.de/wp-content/uploads/2020/06/typescript-rand.jpg"
            src="https://web-forward.de/wp-content/uploads/2020/06/typescript-rand.jpg"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={a}
            src={a}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
          srcSet="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
          srcSet="https://play-lh.googleusercontent.com/NX2yIzhb1SyMKmn0N0CFyLqY_U9U-uhD06ITeJSg67IKMCHZ50SgylgrqhHdGn1Zabs"
          src="https://play-lh.googleusercontent.com/NX2yIzhb1SyMKmn0N0CFyLqY_U9U-uhD06ITeJSg67IKMCHZ50SgylgrqhHdGn1Zabs"
    
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
          srcSet="https://nextblick.com/static/097b58a7aa6a7e183fa8e13647f2dabe/node-js.svg"
          src="https://nextblick.com/static/097b58a7aa6a7e183fa8e13647f2dabe/node-js.svg"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            srcSet={s}
      
          
          />
          <noscript></noscript>
        </span>
      </div>
    </div>
  </div>
  <div
    className="mt-[16px] lg:mt-[40px] flex relative w-full overflow-x-hidden"
    style={{ pauseOnHover: "running", pauseOnClick: "running" }}
  >
    <div
      className=" flex w-full space-x-5 z-10 items-center animate-scrollX"
      style={{
        play: "running",
        direction: "reverse",
        duration: "213s",
        delay: "0s",
        iterationCount: "infinite"
      }}
    >
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://jolicode.com/media/original/2013/10/homepage-docker-logo.png"
            src="https://jolicode.com/media/original/2013/10/homepage-docker-logo.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://www.redhat.com/cms/managed-files/tux-327x360.png"
            src="https://www.redhat.com/cms/managed-files/tux-327x360.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://www.misesurorbite.fr/wp-content/uploads/2020/04/gitlab-logo-gray-stacked-rgb.png"
            src="https://www.misesurorbite.fr/wp-content/uploads/2020/04/gitlab-logo-gray-stacked-rgb.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Grafana_logo.svg/1200px-Grafana_logo.svg.png"
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
            src="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://i2.wp.com/thinkground.studio/wp-content/uploads/2019/04/190415_Nginx-Logo.png?fit=423%2C401&ssl=1"
            src="https://i2.wp.com/thinkground.studio/wp-content/uploads/2019/04/190415_Nginx-Logo.png?fit=423%2C401&ssl=1"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chef_logo.svg/1200px-Chef_logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Chef_logo.svg/1200px-Chef_logo.svg.png"
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://static.javatpoint.com/tutorial/puppet/images/puppet.png"
            src="https://static.javatpoint.com/tutorial/puppet/images/puppet.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://www.ambient-it.net/wp-content/uploads/2022/04/Logo-Jira-200x175-2.png"
            src="https://www.ambient-it.net/wp-content/uploads/2022/04/Logo-Jira-200x175-2.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
    </div>
    <div
      className=" flex w-full space-x-5 z-10 items-center animate-scrollX"
      style={{
        play: "running",
        direction: "reverse",
        duration: "213s",
        delay: "0s",
        iterationCount: "infinite"
      }}
    >
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://blog.stephane-robert.info/img/Terraform-logo.png"
            src="https://blog.stephane-robert.info/img/Terraform-logo.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://kiodev.com/wp-content/uploads/2016/02/gradlephant.png"
            src="https://kiodev.com/wp-content/uploads/2016/02/gradlephant.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://kubernetes.io/images/favicon.png"
            src="https://kubernetes.io/images/favicon.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
            src="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://www.devopsschool.com/assets/assets1/images/courses/apache_maven.png"
            src="https://www.devopsschool.com/assets/assets1/images/courses/apache_maven.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
            src="https://xavki.blog/wp-content/uploads/2021/10/vagrant-logo.png"
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
      <div className=" relative w-[315px]  rounded-[20px] overflow-hidden">
        <span className=" "
          
        >
          <img
          className=" bg-white h-60 w-96  "
            
            srcSet={j}
            src={j}
      
          
          />
        </span>
      </div>
    </div>
  </div>

  <section className="  py-20 2xl:py-40 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="max-w-xl mx-auto mb-12 lg:mb-28 text-center">
      <span className="text-lg text-blue-400 font-semibold">Our Works</span>
      <h2 className="mt-8 text-5xl text-white font-bold font-heading">
        More than 20 years in the game
      </h2>
    </div>
    <div className="flex flex-wrap -mx-5">
      <div className="w-full lg:w-1/3 px-5 pt-10 lg:pt-20 pb-10">
        <ul>
          <li className="pb-5 border-b border-gray-500">
            <a
              className="inline-block py-6 px-12 active:bg-gray-600 rounded-lg text-lg text-white font-bold"
              href="#"
            >
              Development
            </a>
          </li>
          <li className="py-6 border-b border-gray-500">
            <a onClick={() => setChecked(!checked)}
              className=" checked:bg-gray-600 rounded-lg  inline-block py-6 px-12 text-lg text-gray-300"
              href="#"
            >
             Devops
            </a>
          </li>
          <li className="py-6 border-b border-gray-500">
            <a
              className=" active:bg-gray-600 rounded-lg  inline-block py-6 px-12 text-lg text-gray-300"
              href="#"
            >
              Cloud
            </a>
          </li>
          <li>
            <a
              className=" active:bg-gray-600 rounded-lg  inline-block py-6 px-12 text-lg text-gray-300"
              href="#"
            >
              All projects
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-2/3 px-5">
        <div className="flex flex-wrap -px-4">
          <div className="w-full md:w-1/3 p-4">
            <img
              className="h-96 w-full object-fit"
              srcSet={s}
              alt=""
            />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <img
              className="h-96 object-cover w-full"
              src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
              alt=""
            />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <img
              className="h-96 object-cover w-full"
              src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img
              className="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  <motion.div 
   initial = {"offscreen"}
   whileInView= {"onscreen"}
   viewport={{once:false, amount:0.2}}
  transition={{staggerChildren:0.5}}
  className="container mx-auto mt-[80px] lg:mt-[160px] py-20">
    <motion.div  variants={textAnimate} className="text-center">
      <h3 className="font-semibold text-xl leading-6 mx-0 mt-0 mb-5 tracking-tighter lg:font-semibold lg:text-3xl lg:leading-8 lg:mb-12 lg:tracking-tight">Certificates</h3>
      <p className="font-semibold text-3xl leading-none mx-0 mt-0 mb-4  lg:font-bebasB lg:text-6xl lg:mx-auto lg:mb-10 ">
      To secure a challenging position where I can effectively contribute my skills as Software Professional, I’m constantly work on my skills and expertise improvement
      </p>
      <p className="font-light text-base leading-5 mx-0 mt-0 mb-10 lg:text-lg lg:leading-6 lg:mx-auto lg:mb-9">
        Taking exceptional online experiences further than ever before is
        something that excites us, so we stay up-to-date on digital window
        dressings and the ever-changing tech under the counter. We’ve built
        Shopify sites the world over, and Shopify has shopped some of our sites
        themselves (and they left some medals behind).{" "}
      </p>
      <div className="flex items-center justify-around lg:justify-center flex-wrap">
        <div className="relative h-[80px] lg:h-[100px] flex items-center mx-[20px] lg:mx-[50px]">
          <div className="relative">
            <span className=" "
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: 150,
                height: 150,
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative"
              }}
            >
              <img
              className=" bg-white h-60 w-96  "
                srcSet={vagrant}
                src={vagrant}
                decoding="async"
                data-nimg="fixed"
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
                  maxHeight: "100%"
                }}
              />
            </span>
          </div>
          <div className="relative top-[-12px] ml-[6px] w-[35px] flex items-center justify-center pt-[3px] pb-[3px] text-[12px] font-semibold leading-none border-black border-[1px] rounded-[10px]">
            <div>5/5</div>
          </div>
        </div>
        <div className="relative h-[80px] lg:h-[100px] flex items-center mx-[20px] lg:mx-[50px]">
          <div className="relative">
            <span className=" "
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: 39,
                height: 19,
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative"
              }}
            >
              <img
              className=" bg-white h-60 w-96  "
                srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff0330f8903ce2ba04ccfb3f5a7a7cd6a01c9e301-39x19.svg&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff0330f8903ce2ba04ccfb3f5a7a7cd6a01c9e301-39x19.svg&w=60&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff0330f8903ce2ba04ccfb3f5a7a7cd6a01c9e301-39x19.svg&w=60&q=75"
                decoding="async"
                data-nimg="fixed"
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
                  maxHeight: "100%"
                }}
              />
            </span>
          </div>
          <div className="relative top-[-12px] ml-[6px] w-[35px] flex items-center justify-center pt-[3px] pb-[3px] text-[12px] font-semibold leading-none border-black border-[1px] rounded-[10px]">
            <div>+1</div>
          </div>
        </div>
        <div className="relative h-[80px] lg:h-[100px] flex items-center mx-[20px] lg:mx-[50px]">
          <div className="relative">
            <span className=" "
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: 77,
                height: 25,
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative"
              }}
            >
              <img
              className=" bg-white h-60 w-96  "
                srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Fe2d1e105f109cb28492476b3363ec3eecb608b7c-77x25.svg&w=60&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Fe2d1e105f109cb28492476b3363ec3eecb608b7c-77x25.svg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Fe2d1e105f109cb28492476b3363ec3eecb608b7c-77x25.svg&w=256&q=75"
                decoding="async"
                data-nimg="fixed"
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
                  maxHeight: "100%"
                }}
              />
            </span>
          </div>
          <div className="relative top-[-12px] ml-[6px] w-[35px] flex items-center justify-center pt-[3px] pb-[3px] text-[12px] font-semibold leading-none border-black border-[1px] rounded-[10px]">
            <div>+2</div>
          </div>
        </div>
        <div className="relative h-[80px] lg:h-[100px] flex items-center mx-[20px] lg:mx-[50px]">
          <div className="relative">
            <span className=" "
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: 102,
                height: 17,
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative"
              }}
            >
              <img
              className=" bg-white h-60 w-96  "
                srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff42941877e194f64e65ad49c27ef36012eaaf080-102x17.svg&w=128&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff42941877e194f64e65ad49c27ef36012eaaf080-102x17.svg&w=256&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs695h8ei%2Fproduction%2Ff42941877e194f64e65ad49c27ef36012eaaf080-102x17.svg&w=256&q=75"
                decoding="async"
                data-nimg="fixed"
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
                  maxHeight: "100%"
                }}
              />
            </span>
          </div>
          <div className="relative top-[-12px] ml-[6px] w-[35px] flex items-center justify-center pt-[3px] pb-[3px] text-[12px] font-semibold leading-none border-black border-[1px] rounded-[10px]">
            <div>+20</div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</motion.div>


  )
}

export default Stack3 




{/* <div className="container mx-auto py-32">
  <div className="py-24 px-80 xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28">
    <p className="font-light text-base leading-8 m-0 p-0 tracking-tight lg:text-lg xl:text-xl xl:leading-8 md:text-xl">Skills &amp; Recognitions</p>
    <p className=" font-bebasB text-3xl  m-0 p-0 text-gray-600 tracking-tight lg:text-5xl xl:text-6xl">
      I worked with one staffing agency independently.
    </p>
  </div>
  <div className="py-24 px-80 xl:flex xl:justify-around xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28">
    <div className="skills-container w-1/2">
      <div className="flex justify-between w-full">
        <div className="skill">
          <h3 className='font-bold text-lg m-0 p-0 text-gray-800 lg:text-2xl'>DevOps</h3>
          <ul>
            <li>CI/CD</li>
            <li>Automation</li>
            <li>Agile Methodology</li>
            <li>Security</li>
            <li>Mobile App Design</li>
            <li>Web Design</li>
            <li>Interaction Design</li>
          </ul>
        </div>
        <div className="skill">
          <h3 className='font-bold text-lg m-0 p-0 text-gray-800 lg:text-2xl'>Development</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Java</li>
            <li>Python</li>
            <li>Go</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Tweenmax GSAP</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-baseline justify-between mt-12 gap-4 lg:mt-8 xl:mt-0">
      <div className="split">
        <div className="award">
          <img
          className=" bg-white h-60 w-96  "
            src="https://lucavolino.com/wp-content/themes/lucavolino/img
            className=" bg-white h-60 w-96  "/awwwards-black.png"
            width={80}
            alt=""
          />
          <p className="font-light text-base leading-8 m-0 p-0 text-gray-800 lg:text-lg xl:text-xl xl:leading-8">
            Honorable Mentions
            <br />
            x1
          </p>
        </div>
        <div className="award">
          <img
          className=" bg-white h-60 w-96  "
            src="https://lucavolino.com/wp-content/themes/lucavolino/img
            className=" bg-white h-60 w-96  "/cssda-black.png"
            width={55}
            alt=""
          />
          <p className="font-light text-base leading-8 m-0 p-0 text-gray-800 lg:text-lg xl:text-xl xl:leading-8">
            Special Kudos
            <br />
            x4
          </p>
        </div>
      </div>
      <div className="split">
        <div className="award">
          <img
          className=" bg-white h-60 w-96  "
            src="https://lucavolino.com/wp-content/themes/lucavolino/img
            className=" bg-white h-60 w-96  "/dn-black.png"
            width={55}
            alt=""
          />
          <p className="font-light text-base leading-8 m-0 p">
            Site of the day
            <br />
            x2
          </p>
        </div>
        <div className="award">
          <img
          className=" bg-white h-60 w-96  "
            src="https://lucavolino.com/wp-content/themes/lucavolino/img
            className=" bg-white h-60 w-96  "/cssfox-black.png"
            width={55}
            alt=""
          />
          <p className="font-light text-base leading-8 m-0 p-0 text-gray-800 lg:text-lg xl:text-xl xl:leading-8">
            Favorite Fox
            <br />
            x1
          </p>
        </div>
      </div>
    </div>
  </div>
</div> */}