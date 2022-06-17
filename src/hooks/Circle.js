// import gsap from "gsap";
// import { useImperativeHandle } from "react";
// import { forwardRef,useRef } from "react";

// gsap

// export const Circle = forwardRef((props, ref) => {
//     const el = useRef();
      
//     useImperativeHandle(ref, () => {           
      
//       // return our API
//       return {
//         moveTo(x, y) {
//           gsap.to(el.current, { x, y });
//         }
//       };
//     }, []);
    
//     return <div className="circle" ref={el}></div>;
//   });