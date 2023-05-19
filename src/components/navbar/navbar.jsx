import React, { useEffect, useState } from 'react'
import './navbar.scss'
import Profilepic from "../../assets/logo-no-background.png"
import { Link } from 'react-router-dom';

function Navbar() {
const [active,setActive]=useState(false);
const experi=document.getElementById("expe");
const tech=document.getElementById("tech");
const about=document.getElementById("about");

const works=document.getElementById("works");

  window.onscroll=()=>{
    if (window.scrollY > 300) {
      document.getElementsByClassName("navbar")[0].style.backgroundColor="black"
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor="transparent"
    
  }
}


  const menuOnClick=()=> {
    setActive(!active)
    // console.log(document.getElementById("menu-bg").classList);
    // document.getElementById("menu-bar").classList.toggle('change');
    // document.getElementById("nav").classList.toggle('change');
    // document.getElementById("menu-bg").classList.toggle('change-bg');
    // console.log("click");
    // console.log(document.getElementById("menu-bar").classList);
  }

  return (
    <div className="">
    <div className='navbar'>
    <div className='nav-title'>
       
       <img src={Profilepic} className='pic'/>
       <p>SHAUNAK</p>
        </div>
    {/* <div className='nav-menu'>
     <div className='nav-item'><a href="">home</a></div>
     <div className='nav-item'><a href="">skills</a></div>
     <div className='nav-item'><a href="">qualifications</a></div>
    </div> */}
    <div className="nav-menu">
    <div id="menu-bar" className={active?'change bars':"bars"} onClick={()=>{menuOnClick()}}>
    <div  className="bar bar1"></div>
    <div  className="bar bar2"></div>
    <div  className="bar bar3"></div>
    </div>
  <div className={active?'change1 nav':"nav"} id="nav">
    <ul>
      {/* <li><Link to="/">Home</Link></li> */}
      <li className=' cursor-pointer' onClick={()=>{about.scrollIntoView({ behavior: 'smooth' });}}>About</li>
      <li className=' cursor-pointer' onClick={()=>{experi.scrollIntoView({ behavior: 'smooth' });}}>Experience</li>
      <li className=' cursor-pointer' onClick={()=>{tech.scrollIntoView({ behavior: 'smooth' });}}>Tech Stack</li>
      <li className=' cursor-pointer' onClick={()=>{works.scrollIntoView({ behavior: 'smooth' });}}>Projects</li>
      <li><Link to="/contact">Contact Me</Link></li>
    </ul>
  </div> 
  <div className={active?'change-bg menu-bg':"menu-bg"} id="menu-bg"></div>
  <div className={active?'change-bg menu-bg1':"menu-bg"} id="menu-bg"></div>
</div>

    </div>
    



    </div>
  )
}

export default Navbar