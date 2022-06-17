export const useAnimation = () => {
    const transition = {
        duration:2,
        ease: [0.6;-0.05,0.01,0.9],

    };

    const textReveal= 
    {
initial:{
    y: '200%'
},
animate:{
    y: '0'
}


    }
    return {transition,textReveal}; ;
}