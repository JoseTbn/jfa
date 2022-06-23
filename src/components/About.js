import React from 'react'
import {Link} from 'react-router-dom'
import Stack from './Stack'
import svg from '../assets/circletext.f0059cc8.svg'
import Experiences from './Experiences'
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
    <div class=' h-full w-full  bg-texture '>
    <section class="border-0 block m-0 px-16 py-80 align-baseline md:text-center">
        <h2 class="border-0 text-gray-600 font-bebasB  text-xl mx-0 mt-0 mb-10 p-0 uppercase align-baseline">DEVSECOPS PATH</h2>
        <p class=" font-bebasB text-gray-600 border-0 text-5xl m-0 p-0 tracking-tight align-baseline w-full md:my-0 md:mx-auto">
          I have worked on some projects; during an intensive training at Becode, a great experience where I improved
          my skills in the domain of infrastructure as code and cloud computing.
          <a
          className="border-0 m-0 p-0 no-underline align-baseline"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >DOCKER</a
          >,
          <a
                    className="border-0 m-0 p-0 no-underline align-baseline"

            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >VAGRANT</a
          >
          and
          <a
                    className="border-0 m-0 p-0 no-underline align-baseline"

            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >TERRAFORM</a
          >
        </p>
      </section>


      <div className="container">
  <div className="py-24 px-80 xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28">
    <p className="font-light text-base leading-8 m-0 p-0 tracking-tight lg:text-lg xl:text-xl xl:leading-8 md:text-xl">Skills &amp; Recognitions</p>
    <p className="font-semibold text-3xl  m-0 p-0 text-gray-600 tracking-tight lg:text-5xl xl:text-6xl">
      I worked both with agencies and independently. I also win some awards
      &amp; recognitions.
    </p>
  </div>
  <div className="py-24 px-80 xl:flex xl:justify-around xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28">
    <div className="skills-container w-1/2">
      <div className="flex justify-between w-full">
        <div className="skill">
          <h3 className='font-bold text-lg m-0 p-0 text-black lg:text-2xl'>Design</h3>
          <ul>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Prototyping</li>
            <li>Visual Design</li>
            <li>Mobile App Design</li>
            <li>Web Design</li>
            <li>Interaction Design</li>
          </ul>
        </div>
        <div className="skill">
          <h3 className='font-bold text-lg m-0 p-0 text-black lg:text-2xl'>Development</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Javascript</li>
            <li>Vue.js</li>
            <li>Tweenmax GSAP</li>
            <li>PHP</li>
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
          <p className="font-light text-base leading-8 m-0 p-0 text-black lg:text-lg xl:text-xl xl:leading-8">
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
          <p className="font-light text-base leading-8 m-0 p-0 text-black lg:text-lg xl:text-xl xl:leading-8">
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
          <p className="font-light text-base leading-8 m-0 p-0 text-black lg:text-lg xl:text-xl xl:leading-8">
            Favorite Fox
            <br />
            x1
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


       


    </div>
</>
  )
}

export default About