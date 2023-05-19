import React,{useState} from 'react'
import {motion} from "framer-motion"
import {styles} from "../style.js"
import { ComputersCanvas } from './canvas'
import { Link } from 'react-router-dom'
import AnimatedLetters from './landingpage/animated letters.jsx'
import "./landingpage/landingpage.scss"

const Hero = () => {
  const [letterClass1,setLetterClass1]=useState("text-animate ")
    const [letterClass2,setLetterClass2]=useState("text-animate ")
    const arr1=['H','i',',','','I',"'",'m'];
    const arr2=['S','H','A','U','N','A','K','    ','G','H','O','S','H']
  return (
    <section className=' w-full h-screen mx-auto'>
     <div className='xs:px-[10px] px-[5px] absolute xs:top-[90px] top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-10 xs:left-[5%] sm:left-[10%] left-[0%]'>
      <div className='w-1 sm:h-80 h-50 violet-gradient'></div>
     <div className='landingpage-content'>
        <div className='p'>   {<AnimatedLetters letterClass={letterClass1} strarray={arr1} id={1} />}
            </div>
        {/* {()=>{setLetterClass("fontb heading text-animate"); console.log(letterClass)}} */}
        
        <div className='heading'>{<AnimatedLetters  letterClass={letterClass2} strarray={arr2} id={11} />}
        </div>
        <div className='desc '>
          FULLSTACK DEVELOPER | C++ CODER
         
        </div>
        <Link  to="contact"><button className=' relative bg-[#634EF6] py-3 px-3 my-2 xs:my-6 md:text-2xl text-xl md:scale-100 scale-75 font-bold cursor-pointer z-10'>Contact me</button></Link>
        </div>
       
     </div>
   <ComputersCanvas/>
   
   
    </section>
  )
}

export default Hero