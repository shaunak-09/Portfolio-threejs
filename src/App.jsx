import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
// import landbg from "./assets/landbg.jpg"
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components"

import { Audio } from  'react-loader-spinner'
function App() {
  const [loading, setLoading] = useState(true)
  // const  DoStuffFunction=()=>{
  //   setLoading(false);
  // }
  // if (document.getElementById("root").readyState === "complete") {
  //   DoStuffFunction();
  // } else {
  //   if (window.addEventListener) {
  //     window.addEventListener("load", DoStuffFunction, false);
  //   } else {
  //     window.attachEvent("onload", DoStuffFunction);
  //   }
  // }
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },[4000])
  },[])
 

  return (
    <>
    {
      loading?(
        <div className='w-[100vw] h-[100vh] bg-tertiary flex justify-center items-center '>
          <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
/>
        </div>

      ):(
        <div id="App">
        <BrowserRouter>
    <div className='relative z-0 bg-primary'>
     
     
       <Routes>
        <Route path='/' element={<> <div className='bg-cover bg-no-repeat bg-hero-pattern'>
       <Navbar />
       {/* /* <Landingpage/> * */}
       <Hero/>
      </div> <About /> <Experience /> <Tech /> <Works /></>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/tech' element={<Tech />} />
        <Route path='/about' element={<About/>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Works />} />
       </Routes>
       
      
    </div>
    </BrowserRouter>
        </div>
        
        
        
        


      ) 
    }
    
    </>
  )
}

export default App
