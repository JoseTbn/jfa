import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-tDark bg-fixed py-24 px-80 lg:flex-row lg:justify-between xl:py-12 xl:px-16 md:py-12 md:px-16 2xl:max-w-full 2xl:py-12 2xl:px-28" style={{ opacity: 1 }}>
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
                  className="link hover-1 text-white"
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
                  className="link hover-1 text-white"
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
                  className="link hover-1 text-white"
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
                  className="link hover-1 text-white "
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
                  className="link hover-1 text-white"
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
                <a className="link hover-1 text-white" href="https://lucavolino.com/about/">
                  about
                </a>
              </div>
            </li>
            <li>
              <div className="link-wrapper">
                <a className="link hover-1 text-white" href="https://lucavolino.com/works/">
                  works
                </a>
              </div>
            </li>
            <li>
              <div className="link-wrapper">
                <a
                  className="link hover-1 text-white"
                  href="https://lucavolino.com/contact/"
                >
                  contact
                </a>
              </div>
            </li>
            <li>
              <div className="link-wrapper">
                <a
                  className="link hover-1 text-white"
                  href="https://lucavolino.com/privacy-policy/"
                >
                  privacy policy
                </a>
              </div>
            </li>
            <li>
              <div className="link-wrapper">
                <a
                  className="link hover-1 text-white"
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
  )
}

export default Footer