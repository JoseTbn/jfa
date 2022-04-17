import React from "react";
import { Routes ,Route,Link } from "react-router-dom";
import AboutPage  from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";



function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/Work' element={<Work/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    
    
     </Routes>
    
  );
}

export default App;
