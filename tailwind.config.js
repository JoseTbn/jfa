const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}




module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
      '12xl': '12rem',
      '13xl': '13rem',
      '14xl': '14rem',
      '16xl': '16rem',
      '18xl': '18rem',
      '20xl': '20rem',
      
    },
    extend: {
      backgroundImage:{
        texture: `url('https://images.unsplash.com/photo-1640964828933-eb242cc56681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80')`
                 },
      fontFamily: {
        'sans': ['Roboto', 'Helvetcica', 'Arial', 'sans-serif'],
        'harmony': ['HARMONY','sans-serif'],
        'rock': ['Rockstar, sans-serif'],
        'bebas': ['bebasNeue'],
        'Pixer': ['Pixer', 'Pixer2'],
        'OP' :['Open Sauce'],
        'bebasB' : ['bebasB']

      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scrollZ: {
          '0%': { transform: 'translateX(1%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        spinSlow: {
          '0, 100%':{transform: 'rotate(360%)'}
        },
},


animation: {
    'scrollX': 'scrollX 40s linear infinite',
   'scrollZ': 'scrollZ 40s linear infinite',
    'spinSlow': 'spin 10s linear infinite',
    'spin-slow': 'spin 3s linear infinite',

  },
 
  

       
  }, 
  
  
  screens: {
          'xxs': '375px',
          'xs': '475px',
          ...defaultTheme.screens,
          '2xlx': { 'max': '1535px' },
          // => @media (max-width: 1535px) { ... }
    
          'xlx': { 'max': '1279px' },
          // => @media (max-width: 1279px) { ... }
    
          'lgx': { 'max': '1023px' },
          // => @media (max-width: 1023px) { ... }
    
          'mdx': { 'max': '767px' },
          // => @media (max-width: 767px) { ... }
    
          'smx': { 'max': '639px' },
          // => @media (max-width: 639px) { ... 
          'ssx': { 'max': '475px' },
          // => @media (max-width: 475px) { ... 
          'smmd': { 'min': '375px', 'max': '639px' },
    
        },
  variants: 
  
  {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: ["styled-jsx/babel"],
}
}