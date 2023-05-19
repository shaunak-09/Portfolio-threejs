import React, { useEffect, useState } from "react";
import AnimatedLetters from "../landingpage/animated letters";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {ps,reactjs,nodejs} from "../../assets"
// import Loader from 'react-loaders'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {fadeIn,textVariant} from "../../utils/motion"
// import {Bars} from 'react-loader-spinner'
import Resume from "./Resume.pdf"
// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );
function About() {
  const arr1 = ["A", "b", "o", "u", "t", " ", "M", "e"];
  const [letterClass, setLetterClass] = useState("text-animate1");
  // const [loading,setLoading]=useState("true");

  // useEffect(()=>{
  //   setTimeout(()=>{
  //      setLoading("false");
  //   },2000)
  // },[])
  return (
    <>
      <div className="aboutus flex flex-col" id="about" >
        <div className="flex flex-col pl-[8rem]">
        <h1>
          <AnimatedLetters letterClass={letterClass} strarray={arr1} id={24} />
        </h1>
        <div className="flex flex-col md:flex-row" >
          <div className="text-area flex flex-col md:w-[60%] w-[100%] ">
            <p data-aos="fade-right">
            I'm a skilled Fullstack developer with experience in
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js and databases like SQL and MongoDB.        
       
            </p>
            <p> I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. 
        </p>
            <p>Let's work together to bring your ideas to life!</p>
           
            <a href={Resume} download className="button my-3">
            <button className="font-bold">Download CV</button>
            </a>
            <div className="flex flex-row">
            <a href="https://github.com/shaunak-09"><FontAwesomeIcon icon={faGithub}   className=" m-3"  size="2xl" style={{color: "#fff",}} /></a>
            <a href=" https://www.linkedin.com/in/shaunak-ghosh-b6839a227"> <FontAwesomeIcon icon={faLinkedin} className=" m-3" size="2xl" style={{color: "#075ee9",}} /></a>
            </div>
            
           
          </div>

          <div className="stage-cube-cont md:w-[40%] w-[80%] ">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faAngular} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:my-1 my-5 md:py-2 py-5 flex-wrap">
          {/* <div className="card flex flex-col relative">
            <div className="card-img">
            <img  src={threejs} />
            <img src={javascript} />
            <img  src={tailwind} />
            <img  src={html} />
            <img src={css} />
            <img  src={reactjs} />
            <img  src={redux} />
            
            </div>
            <div className="card-content">
              
            <p className="text-xl py-3 font-bold">Frontend Developer</p>
           <p>Html, Css, JavaScript, ReactJS, AngularJS, Tailwind</p>
            </div>
           
          </div> */}
          <Tilt className='xs:w-[220px] w-[300px] my-5 mr-8'>
    <motion.div
      variants={fadeIn("right", "spring", 1* 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex  flex-col items-center justify-center'
      >
        <div className="flex flex-row card-img">
        {/* <img  src={threejs} />
            <img src={javascript} />
            <img  src={tailwind} />
            <img  src={html} />
            <img src={css} />
            <img  src={reactjs} />
            <img  src={redux} /> */}
             <img  src={reactjs} />


        </div>
     

        <h3 className='text-white text-[20px] font-bold text-center'>
         Frontend Developer
        </h3>
      </div>
    </motion.div>
  </Tilt>
  <Tilt className='xs:w-[220px] w-[300px]  my-5 mr-8'>
    <motion.div
      variants={fadeIn("right", "spring", 1* 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex  flex-col items-center justify-center relative'
      >
        <div className="flex flex-row card-img">
            {/* <img  src={nodejs} />
            <img  src={mongodb} />
            <img  src={docker} />
            <img  src={sql} />
            <img  src={sql} />
            <img  src={git} /> */}
            <img  src={nodejs} />
            
          
            
            </div>
     

        <h3 className='text-white text-[20px] font-bold text-center'>
         Backend Developer
        </h3>
      </div>
    </motion.div>
  </Tilt>
  <Tilt className='xs:w-[220px] w-[300px]  my-5 mr-8'>
    <motion.div
      variants={fadeIn("right", "spring", 1* 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex relative flex-col items-center justify-center'
      >
        <div className="card-img flex flex-row">
            {/* <img  src={figma} /> */}
            <img  src={ps} />
          
            
          
            
            </div>
     

        <h3 className='text-white text-[20px] font-bold text-center py-5'>
         Design
        </h3>
      </div>
    </motion.div>
  </Tilt>
          
        </div>

        </div>
        
      </div>
     

    </>
  );
}

export default About;
