import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
    margin-bottom: 20vh;
    margin-right: 5vw;
    display: flex;
    justify-content: space-between;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }
    .info-main{
        width: 48%;
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            width: 95%;
        }
        h2{
            font-size: calc(var(--VW)*2);
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size:40px;
            }
        }
        p{
            margin-bottom: 3vw;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                margin-bottom: 5vw;
            }
            :last-child{
                margin-bottom: 0;
            }
        }
    }
    .info-credits{
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media (hover: none) and (pointer: coarse){
            width: 68%;
            margin-top: 10vh;
        }
        @media (hover: none) and (pointer: coarse) and (max-width: 500px){
            width: 80%;
            margin-top: 10vh;
        }
        h1{
            font-size:40px;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size: calc(var(--VW)*6);
            }
        }
        h2{
            font-size: calc(var(--VW)*2);
            margin: 0.5vw 0;
            @media (hover: none) and (pointer: coarse), (max-width: 500px){
                font-size:40px;
            }
            :last-child{
                margin-bottom: 0;
            }
        }
        p{
            margin-bottom: 3vw;
            :nth-child(2){
                margin-bottom: 1vw;
                margin-top: 0.5vw;
            }
        }
    }
`

const Info = ()=>{
    return(
        <InfoStyles data-scroll-section  className="info">
            <div className="  ">
                <h2 className="text-3xl font-bebasB " >Languages</h2>
                <p>TypeScript, JavaScript(ES6+), HTML, CSS/Scss/Sass, Python, SQL</p>
                <h2 className="text-3xl font-bebasB " >Frameworks/Libraries/Others</h2>
                <p>React.js, Vue.js, Firebase, Framer Motion, GSAP, Styled Components, Webpack, Git, Command Line, Babel, NPM, PWA, Node.js</p>
                <h2 className="text-3xl font-bebasB " >UI/UX</h2>
                <p>Responsive Design, Prototyping, Wireframing, Figma, Adobe Xd, Interview, Survey, Usability Testing</p>
                <h2 className="text-3xl font-bebasB " >Learning</h2>
                <p>Node.js, Gatsby.js, Java</p>
                <h2 className="text-3xl font-bebasB " >Other Skills</h2>
                <p>CPR/AED, American Sign Language, Mandarin, Content Creation, Media Management</p>
                <h2 className="text-3xl font-bebasB " >Volunteer/Organizations</h2>
                <p>Lambda Chi Alpha, Special Olympics, Feeding America</p>
                <h2 className="text-3xl font-bebasB " >Education</h2>
                <p>Master of Information <br/>Information Systems <br/>University of Toronto Exp. June 2021</p>
                <p>Bachelor of Science <br/>Communications, American Studies <br/>Boston University May 2018</p>
            </div>
   
        </InfoStyles>
    )
}

export default Info