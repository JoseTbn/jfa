import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import CustomCursorManager from "./CustomCursor/context/manager.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { Circle } from "./hooks/Circle";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const containerRef = useRef(null);
  const circleRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   // doesn't trigger a render!
  //   circleRef.current.moveTo(300, 100);
  // }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      <ScrollTriggerProxy />
      <AnimatePresence exitbeforeEnter>
        <Routes ref={containerRef}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Work/Work:Id" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}

export default App;
