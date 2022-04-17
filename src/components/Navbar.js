import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
<div>
            <>
            <header class=' container '>

<nav class='box-border hidden justify-between m-0 px-0 py-8 lg:flex lg:justify-end lg:ml-auto uppercase'>
  <ul>
    <Link to={'/Work'}><a class='lg:inline-block lg:text-xl lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline md:text-xs font-semibold uppercase text-gray-600 tracking-wider' to="">work</a>
    </Link >
   
    <Link to={'/About'}><a class='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' to="">about</a></Link>
    
    <Link to={'/contact'}><a class='lg:inline-block lg:text-xl  lg:ml-14 lg:pb-0.5 lg:relative lg:no-underline font-semibold uppercase text-gray-600 tracking-wider' to="">contact</a></Link>
  </ul>
</nav>

<nav class=' lg:hidden 2xl:hidden  font-semibold flex w-screen mx-auto p-5 justify-between'>
<Link to={"/Work"}>
Work
</Link>

<button class=' border-black border-2 py-2 px-4'>Menu</button>
</nav>



</header>
            
            </>
        </div>
  )
}

export default Navbar