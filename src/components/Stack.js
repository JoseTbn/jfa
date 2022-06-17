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



const Stack = () => {
  return (
    <div className=" py-20 flex flex-col items-center justify-center">
    <div className="xl:w-1/2 w-11/12">
        <h1 role="heading" tabIndex={0} className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
        My tech stacks & some tools I use in my work flow

        </h1>
        
    </div>
    <div className="2xl:px-4  px-2 flex  sm:flex-wrap xl:flex-nowrap items-start mt-4">
        <div className="mt-24 ">
            <div className="flex items-end gap- ">
                <img tabIndex={0} src={a} alt="girl with blue background" className="w-20 h-20 rounded-lg mr-6" />
                <img tabIndex={0} src={m} alt="guy winking" className="w-48 h-36 rounded-lg" />
            </div>
            <div className="flex items-center justify-end my-6">
                <img tabIndex={0} src={c} alt="guy smiling" />
            </div>
            <div className="flex items-start">
                <img tabIndex={0} src={n} alt="girl with bluw background" className="w-48 h-48 rounded-lg" />
                <img tabIndex={0} src={j} alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
            </div>
        </div>
        <div className="ml-6 mt-10">
            <img tabIndex={0} src={a} className="w-72 h-80 rounded-lg" alt="guy with sunglasses" />
            <div className="flex items-start mt-6">
                <img tabIndex={0} src={f} alt="girl  laughing" className="w-48 h-48 rounded-lg" />
                <img tabIndex={0} src={a} alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 object-cover object-fit" />
            </div>
        </div>
        <div className="mt-14 ml-6">
            <div className="lg:flex ">
                <div>
                    <img tabIndex={0} src={s} alt="group of friends" className="w-96 h-72 rounded-lg object-center object-fit" />
                </div>
                <div>
                    <div className="flex ml-6">
                        <img tabIndex={0} src={h} className="w-20 h-20 rounded-lg mt-14" alt="man" />
                        <img tabIndex={0} src={g} className="w-20 h-24 rounded-lg ml-6" alt="woman" />
                    </div>
                    <img tabIndex={0} src={a} alt="boy with blonde hair" className="ml-6 mt-6 w-48 h-32 rounded-lg" />
                </div>
            </div>
            <div className="mt-6 flex">
                <img tabIndex={0} className="w-48 h-48 rounded-lg" src={t} alt="young girl with red hair" />
                <img tabIndex={0} className="w-72 h-56 rounded-lg ml-6" src={a} alt="young girl with red hair" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Stack