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



const Stack3 = () => {
  return (
   
<div className="container mx-auto py-32">
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
            src="https://lucavolino.com/wp-content/themes/lucavolino/img/awwwards-black.png"
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
            src="https://lucavolino.com/wp-content/themes/lucavolino/img/cssda-black.png"
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
            src="https://lucavolino.com/wp-content/themes/lucavolino/img/dn-black.png"
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
            src="https://lucavolino.com/wp-content/themes/lucavolino/img/cssfox-black.png"
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
</div>


  )
}

export default Stack3