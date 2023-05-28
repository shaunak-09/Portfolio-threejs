import React,{useState,useEffect} from 'react'
import { ComputersCanvas } from './canvas'
import { Link } from 'react-router-dom'
import AnimatedLetters from './landingpage/animated letters.jsx'
import "./landingpage/landingpage.scss"
import { pc } from '../assets'

const Hero = () => {
  const [letterClass1,setLetterClass1]=useState("text-animate ")
    const [letterClass2,setLetterClass2]=useState("text-animate ")
    const arr1=['H','i',',','','I',"'",'m'];
    const arr2=['S','H','A','U','N','A','K','    ','G','H','O','S','H']
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(min-width: 400px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    },[])
  return (
    <section className=' w-full h-screen mx-auto flex flex-col'>
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
     {
      isMobile?<ComputersCanvas/>:(
        <div className=' relative mt-10 p-2 flex top-[40%]'><img src={pc} className='p-2 w-[35rem] h-[20rem] relative '/></div>
      )
     }
   
   
   
    </section>
  )
}

export default Hero