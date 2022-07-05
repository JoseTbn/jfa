import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

            
            <header class='  bg-texture '>

<nav class='box-border hidden justify-between m-0 px-8 py-8 lg:flex lg:justify-between lg:ml-auto uppercase '>

<Link  to={'/'}
className="lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:  lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider"> Batumeni jose</Link>


  <ul className='flex flex-row '>
    <Link to={'/Work'}><a class='group  lg:text-xl flex flex-col   lg:relative lg:overflow-hidden  transition-all duration-500 ease-in-out hover:bg-orange-700 lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider border border-gray-900   rounded-full  w-32  h-full '>
      <span  className="absolute  justify-center ml-8 transition-transform duration-300 ease-in-out group-hover:translate-y-[-50px] mx-auto w-full px-auto " >work</span>
      <span className="absolute 
      justify-center ml-8 mx-auto w-full px-auto
      transition-transform duration-300 ease-in-out  translate-y-[50px] group-hover:-translate-y-0 " >work</span>
    </a>
    </Link >
   
    <Link to={'/About'}><a class=' group flex flex-col   lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:overflow-hidden  transition-all duration-500 ease-in-out hover:bg-orange-700 lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider border border-gray-900 p-2  rounded-full  w-32  h-full' >
      <span  className="absolute ml-5 -mt-2  justify-center mx-auto w-full px-auto  transition-transform duration-300 ease-in-out group-hover:translate-y-[-50px]">about</span>
      <span className="absolute ml-5 -mt-2  justify-centermx-auto w-full px-autotransition-transform duration-300 ease-in-out  translate-y-[50px] group-hover:-translate-y-0" >about</span>
      </a>
      </Link>
    
    <Link to={'/contact'}><a class=' group flex flex-col  lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:overflow-hidden  transition-all duration-500 ease-in-out hover:bg-orange-700 lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider border border-gray-900 p-2  rounded-full  w-32  h-full ' >
      <span  className="absolute ml-2 -mt-2 justify-center mx-auto w-full px-auto   transition-transform duration-300 ease-in-out group-hover:translate-y-[-50px]" >contact</span>
      <span className="absolute ml-2 -mt-2 justify-center mx-auto w-full px-auto transition-transform duration-300 ease-in-out  translate-y-[50px] group-hover:-translate-y-0" >contact</span>
      </a>
      </Link>
  </ul>
</nav>

<nav class=' lg:hidden 2xl:hidden  font-semibold flex w-screen mx-auto p-5 justify-between'>
<Link to={"/Work"}>
Work
</Link>

<button class=' border-black border-2 py-2 px-4'>Menu</button>
</nav>



</header>
            
            
        
  )
}

export default Navbar