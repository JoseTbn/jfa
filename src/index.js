import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import reportWebVitals from './reportWebVitals';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
  <BrowserRouter>
  <ParallaxProvider>
<App />
</ParallaxProvider>
</BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
