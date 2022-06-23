import React from 'react'

const ContactH = () => {
  return (
    <div className="fading bg-[color:var(--background-color)] transition-colors duration-1000 ease-in-out">
    <div className="pt-[100px] lg:pt-[160px] " >
      <div className=" text-center pb-[46px] lg:pb-[140px]">
        <span className="block text-[12px] lg:text-[14px] mb-[14px] lg:mb-[48px] font-display uppercase font-bebasB tracking-[0.04em]">
          Get in touch
        </span>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4 lg:col-span-10 lg:col-start-2">
              <div>
                <h1
                  className="m-h3 lg:h1 mb-[50px] lg:mb-[80px] px-[5%] lg:px-0"
                  style={{}}
                >
                  <div
                    className="overflow-hidden"
                    style={{
                      display: "block",
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <div
                      className="lineChild"
                      style={{
                        display: "block",
                        textAlign: "center",
                        position: "relative",
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      Here to get things done,{" "}
                    </div>
                  </div>
                  <div
                    className="overflow-hidden"
                    style={{
                      display: "block",
                      textAlign: "center",
                      position: "relative"
                    }}
                  >
                    <div
                      className="lineChild"
                      style={{
                        display: "block",
                        textAlign: "center",
                        position: "relative",
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      here to make it fun
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center mb-[70px] lg:mb-[112px]">
            <div className="flex flex-col lg:mr-[150px]">
              <span className="block text-lg leading-6 mb-5 block mb-[20px]">
                Schedule a call for
              </span>
              <div className="flex items-center text-[12px] lg:text-[28px] font-display">
                <button className="font-semibold lg:font-light border-[2px] leading-none border-black uppercase px-[10px] lg:px-[16px] pt-[4px] lg:pt-[6px] pb-[2px] rounded-[40px] mr-[12px] transition-all duration-500 ease-in-out hover:text-black hover:border-neon hover:bg-neon">
                  15 minutes
                </button>
                <button className="font-semibold lg:font-light border-[2px] leading-none border-black uppercase px-[10px] lg:px-[16px] pt-[4px] lg:pt-[6px] pb-[2px] rounded-[40px] transition-all duration-500 ease-in-out hover:text-black hover:border-neon hover:bg-neon">
                  30 minutes
                </button>
              </div>
            </div>
            <div className="mt-[42px] lg:mt-0">
              <span className="block text-lg leading-6  mb-[20px]">Email us</span>
              <div className="flex items-center text-[12px] lg:text-[28px] font-display">
                <a
                  href="mailto:info@serieseight.com"
                  className="font-semibold lg:font-light border-[2px] leading-none border-black uppercase px-[10px] lg:px-[16px] pt-[4px] lg:pt-[6px] pb-[2px] rounded-[40px] transition-all duration-500 ease-in-out hover:text-black hover:border-neon hover:bg-neon"
                >
                  INFO@SERIESEIGHT.COM
                </a>
              </div>
            </div>
          </div>
          <button>
            <div className="group text-center flex items-center justify-center mx-auto">
              <span className="inline-block mr-[8px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5">
                Alternatively, fill in our form
              </span>
              <div className="relative overflow-hidden w-[32px] h-[32px] rounded-full border border-black flex items-center justify-center group-hover:bg-neon group-hover:border-neon transition-all duration-500 ease-in-out">
                <svg
                  className="absolute transition-transform duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50px] group-hover:-translate-y-1/2"
                  width={14}
                  height={17}
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4837 10.524L13.5525 10.4528L13.4821 10.3833L12.7946 9.7044L12.7227 9.63338L12.6524 9.70605L7.9698 14.5501L7.72252 0.383319L7.72077 0.283334L7.62079 0.28508L6.65585 0.301922L6.55587 0.303668L6.55761 0.403652L6.8049 14.5706L1.95094 9.89281L1.87792 9.82245L1.80858 9.89643L1.15026 10.5988L1.08283 10.6708L1.15382 10.7392L7.35433 16.717L7.4262 16.7863L7.49561 16.7145L13.4837 10.524Z"
                    fill="#16161D"
                    stroke="#16161D"
                    strokeWidth="0.2"
                  />
                </svg>
                <svg
                  className="absolute transition-transform duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-y-[50px]"
                  width={14}
                  height={17}
                  viewBox="0 0 14 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4837 10.524L13.5525 10.4528L13.4821 10.3833L12.7946 9.7044L12.7227 9.63338L12.6524 9.70605L7.9698 14.5501L7.72252 0.383319L7.72077 0.283334L7.62079 0.28508L6.65585 0.301922L6.55587 0.303668L6.55761 0.403652L6.8049 14.5706L1.95094 9.89281L1.87792 9.82245L1.80858 9.89643L1.15026 10.5988L1.08283 10.6708L1.15382 10.7392L7.35433 16.717L7.4262 16.7863L7.49561 16.7145L13.4837 10.524Z"
                    fill="#16161D"
                    stroke="#16161D"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        id="contactForm"
        className="bg-white pt-[60px] lg:pt-[126px] pb-[62px] lg:pb-[125px]"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4 lg:col-span-6 lg:col-start-4">
              <form className="flex flex-col">
                <div className="mb-[32px] lg:mb-[50px]">
                  <label
                    htmlFor="name"
                    className="block h5 lg:l-block text-lg leading-6 mb-5 mb-[18px] lg:mb-[16px]"
                  >
                    What’s your name?{" "}
                    <span className="text-purple text-[12px] inline-block ml-[10px] [vertical-align:super]">
                      *
                    </span>
                  </label>
                  <div className="relative w-full">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Type your full name"
                      className="w-full py-[16px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5 border-b border-black transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:sm-block text-lg leading-6 mb-5 placeholder:lg:block text-lg leading-6 mb-5 placeholder:text-black placeholder:opacity-60 undefined"
                      pwa2-uuid="EDITOR/input-0E3-6D4-CE52D-3E7"
                      pwa-fake-editor=""
                      style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundSize: "16px 18px",
                        backgroundPosition: "98% 50%",
                        cursor: "auto"
                      }}
                    />
                  </div>
                </div>
                <div className="mb-[32px] lg:mb-[50px]">
                  <label
                    htmlFor="email"
                    className="block h5 lg:l-block text-lg leading-6 mb-5 mb-[18px] lg:mb-[16px]"
                  >
                    Your email address{" "}
                    <span className="text-purple text-[12px] inline-block ml-[10px] [vertical-align:super]">
                      *
                    </span>
                  </label>
                  <div className="relative w-full">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="example@email.com"
                      className="w-full py-[16px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5 border-b border-black transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:sm-block text-lg leading-6 mb-5 placeholder:lg:block text-lg leading-6 mb-5 placeholder:text-black placeholder:opacity-60 undefined"
                      pwa2-uuid="EDITOR/input-82F-289-77458-A7E"
                      pwa-fake-editor=""
                    />
                  </div>
                </div>
                <div className="mb-[32px] lg:mb-[50px]">
                  <label
                    htmlFor="website"
                    className="block h5 lg:l-block text-lg leading-6 mb-5 mb-[18px] lg:mb-[16px]"
                  >
                    Website URL (if applicable){" "}
                  </label>
                  <div className="relative w-full">
                    <input
                      id="website"
                      type="text"
                      name="website"
                      placeholder="www.yourwebsite.com"
                      className="w-full py-[16px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5 border-b border-black transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:sm-block text-lg leading-6 mb-5 placeholder:lg:block text-lg leading-6 mb-5 placeholder:text-black placeholder:opacity-60 undefined"
                      pwa2-uuid="EDITOR/input-933-10F-4D8F7-BE1"
                      pwa-fake-editor=""
                    />
                  </div>
                </div>
                <div className="mb-[32px] lg:mb-[50px]">
                  <label
                    htmlFor="hear_from_us"
                    className="block h5 lg:l-block text-lg leading-6 mb-5 mb-[18px] lg:mb-[16px]"
                  >
                    How did you hear bout us?{" "}
                  </label>
                  <div className="relative w-full">
                    <input
                      id="hear_from_us"
                      type="text"
                      name="hear_from_us"
                      placeholder="eg. Google"
                      className="w-full py-[16px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5 border-b border-black transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:sm-block text-lg leading-6 mb-5 placeholder:lg:block text-lg leading-6 mb-5 placeholder:text-black placeholder:opacity-60 undefined"
                      pwa2-uuid="EDITOR/input-629-70E-6612D-BBA"
                      pwa-fake-editor=""
                    />
                  </div>
                </div>
                <div className="mb-[32px] lg:mb-[50px]">
                  <label
                    htmlFor="description"
                    className="block h5 lg:l-block text-lg leading-6 mb-5 mb-[18px] lg:mb-[16px]"
                  >
                    Tell us about your project{" "}
                  </label>
                  <div className="relative w-full">
                    <input
                      id="description"
                      type="text"
                      name="description"
                      placeholder="Please type your project description"
                      className="w-full py-[16px] sm-block text-lg leading-6 mb-5 lg:block text-lg leading-6 mb-5 border-b border-black transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:sm-block text-lg leading-6 mb-5 placeholder:lg:block text-lg leading-6 mb-5 placeholder:text-black placeholder:opacity-60 undefined"
                      pwa2-uuid="EDITOR/input-349-9E6-3FDAC-8E9"
                      pwa-fake-editor=""
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <p className="xs-block text-lg leading-6 mb-5">
                    View our{" "}
                    <a className="inline-block underline" href="/privacy-policy">
                      Privacy Policy
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="w-full lg:w-auto mt-[20px] lg:mt-0 group inline-flex flex-none items-center cursor-pointer"
                  >
                    <div className="flex">
                      <div className="w-full lg:w-auto flex items-center justify-center pt-[5px] px-[18px] h-[40px] mr-[4px] border-black pb-[2px] border-[2px] uppercase font-display text-[16px] lg:text-[28px] leading-[40px] tracking-wider rounded-[30px]">
                        Send it
                      </div>
                      <div className="flex-none relative overflow-hidden rounded-full border-[2px]  w-[40px] h-[40px] transition-all duration-500 ease-in-out border-black group-hover:bg-neon group-hover:border-neon">
                        <svg
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:translate-x-[50px] group-hover:translate-y-[-50px]"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.25791 0.642171L4.15894 0.642088L4.15784 0.741056L4.14546 1.85062L4.14433 1.95169L4.2454 1.95174L12.0186 1.95574L0.487182 13.4872L0.416471 13.5579L0.487182 13.6286L1.27089 14.4123L1.3416 14.483L1.41231 14.4123L12.9439 2.88075L12.9519 10.6583L12.952 10.7597L13.0534 10.7582L14.1588 10.7417L14.2574 10.7402L14.2573 10.6416L14.2491 0.750336L14.249 0.650503L14.1492 0.650419L4.25791 0.642171Z"
                            fill="#16161D"
                            stroke="#16161D"
                            strokeWidth="0.2"
                          />
                        </svg>
                        <svg
                          className="absolute top-1/2 left-1/2 transition-all duration-300 ease-in-out translate-x-[-50px] translate-y-[50px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.25791 0.642171L4.15894 0.642088L4.15784 0.741056L4.14546 1.85062L4.14433 1.95169L4.2454 1.95174L12.0186 1.95574L0.487182 13.4872L0.416471 13.5579L0.487182 13.6286L1.27089 14.4123L1.3416 14.483L1.41231 14.4123L12.9439 2.88075L12.9519 10.6583L12.952 10.7597L13.0534 10.7582L14.1588 10.7417L14.2574 10.7402L14.2573 10.6416L14.2491 0.750336L14.249 0.650503L14.1492 0.650419L4.25791 0.642171Z"
                            fill="#16161D"
                            stroke="#16161D"
                            strokeWidth="0.2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="items-center justify-center h-[40px] w-[100px] text-center p-[16px] hidden"
                      title={0}
                    >
                      <svg
                        x="0px"
                        y="0px"
                        width="40px"
                        height="40px"
                        viewBox="0 0 40 40"
                        enableBackground="new 0 0 40 40"
                        xmlSpace="preserve"
                      >
                        <path
                          opacity="0.2"
                          fill="#F4FD6B"
                          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                        />
                        <path
                          fill="#F4FD6B"
                          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"
                        >
                          <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 20 20"
                            to="360 20 20"
                            dur="0.5s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </svg>
                    </div>
                  </button>
                </div>
                <p className="mt-[20px] text-[16px]" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" bg-black py-24 px-80 lg:flex-row lg:justify-between xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28" style={{ opacity: 1 }}>
  <div className="mb-4">
    <p className="font-bold text-2xl leading-8 m-0 px-0 pt-0 pb-4 text-white tracking-tight lg:text-5xl xl:text-5xl xl:leading-8">Have a project?</p>
    <div className="flex items-center font-bold hover:opacity-80 2xl:mb-12">
      <a className="inline-block h-8 leading-8 mt-2 relative text-white uppercase no-underline" href="https://lucavolino.com/contact">
        Let’s make something together!
      </a>
      <svg
        className="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        >
          <path
            className="arrow-icon--arrow"
            d="M16.14 9.93L22.21 16l-6.07 6.07M7.23 16h14.58"
          />
        </g>
      </svg>
    </div>
    <div className="font-light text-base leading-8 m-0 p-0 text-white lg:text-lg xl:text-xl xl:leading-8">
      <p>© 2021 Batumeni jose </p>
    </div>
  </div>
  <div className="mb-4">
    <div className="font-light text-base leading-8 m-0 p-0 text-white lg:text-lg xl:text-xl xl:leading-8">
      <p>© 2020 Batumeni jose </p>
    </div>
  </div>
  <div className="mb-4">
    <div className="flex">
      <div className="footer-list">
        <p>Social</p>
        <ul>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://dribbble.com/lucavolino"
                target="_new"
                data-barba-prevent=""
              >
                dribbble
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://www.behance.net/lucavolino"
                target="_new"
                data-barba-prevent=""
              >
                behance
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://www.instagram.com/volinodesign"
                target="_new"
                data-barba-prevent=""
              >
                instagram
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://www.linkedin.com/in/luca-volino/"
                target="_new"
                data-barba-prevent=""
              >
                linkedin
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://www.facebook.com/volindoesign"
                target="_new"
                data-barba-prevent=""
              >
                facebook
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <p>Navigation</p>
        <ul>
          <li>
            <div className="link-wrapper">
              <a className="link hover-1" href="https://lucavolino.com/about/">
                about
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a className="link hover-1" href="https://lucavolino.com/works/">
                works
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://lucavolino.com/contact/"
              >
                contact
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://lucavolino.com/privacy-policy/"
              >
                privacy policy
              </a>
            </div>
          </li>
          <li>
            <div className="link-wrapper">
              <a
                className="link hover-1"
                href="https://lucavolino.com/cookie-policy/"
              >
                cookie policy
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mb-4 font-bold text-base leading-8 m-0 p-0 text-white lg:text-lg xl:text-xl xl:leading-8">
    <p>Languages</p>
    <div className="split"></div>
    <div className="footer-logo">
      <img
        src="https://lucavolino.com/wp-content/themes/lucavolino/img/logo.svg"
        width={30}
        alt=""
      />
    </div>
  </div>
</div>

  </div>
  
  )
}

export default ContactH