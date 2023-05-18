import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./exp.scss"

import React,{useEffect, useState} from 'react'

function Experience() {
    const [exp, setExp] = useState("work")
    useEffect(()=>{

    document.getElementsByClassName("exp-button")[1].style.backgroundColor="black"
     document.getElementsByClassName("exp-button")[0].style.backgroundColor="white"
     document.getElementsByClassName("exp-button")[1].style.color="white"
     document.getElementsByClassName("exp-button")[0].style.color="black"
    
    },[])
    const handleclick=()=>{

      setExp("edu");
      document.getElementsByClassName("exp-button")[0].style.backgroundColor="black"
     document.getElementsByClassName("exp-button")[1].style.backgroundColor="white"
     document.getElementsByClassName("exp-button")[0].style.color="white"
     document.getElementsByClassName("exp-button")[1].style.color="black"

    }
    const handleclick1=()=>{
      setExp("work");
      document.getElementsByClassName("exp-button")[1].style.backgroundColor="black"
     document.getElementsByClassName("exp-button")[0].style.backgroundColor="white"
     document.getElementsByClassName("exp-button")[1].style.color="white"
     document.getElementsByClassName("exp-button")[0].style.color="black"

    }
  return (
    <>
   
    <div className='experi' id="expe">
       
        <h1 className="exp-heading my-3">Experiences</h1>
        <div className='exp-buttons'>
    <button onClick={handleclick} className='exp-button my-2'>Education</button>
    <button onClick={handleclick1} className='exp-button my-3'>Work</button>

    </div>
        
        {
            exp=="edu"?
            (
                <div className='text-center'>
                <h1 className='text-2xl my-8'>Education</h1>
                <VerticalTimeline
                 lineColor='#b2b2b2'>
                     <VerticalTimelineElement
                  className="vertical-timeline-element--work "
                  date="2008 - 2010"
                  contentStyle={{ background: '#4225b6', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #4225b6' }}
                  iconStyle={{ background: '#4225b6', color: '#fff' }}
                  // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title font-extrabold text-xl">IIT KHARAGPUR</h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">Kharagpur, WB</h4>
                  <p>
                  I am a third year undergrad student pursuing Mechanical Engineering at IIT KHARAGPUR
                  </p>
                </VerticalTimelineElement>
                
               
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2010 - 2011"
                  contentStyle={{ background: '#a279f9', color: '#000' }}
                  contentArrowStyle={{ borderRight: '7px solid  #a279f9' }}
                  iconStyle={{ background: '#a279f9', color: '#000' }}
                  // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title font-extrabold text-xl">HEMSHEELA</h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">Durgapur, WB</h4>
                  <p>
                  I completed my plus 2 from Hemsheela Model School
                  </p>
                </VerticalTimelineElement>
               
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#4225b6', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #4225b6' }}
                  date="2011 - present"
                  iconStyle={{ background: '#4225b6', color: '#fff' }}
                  // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title font-extrabold text-xl">ST.VINCENTS </h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">Asansol, WB</h4>
                  <p>
                  I completed my primary schooling from St.Vincent's High and Technical School
                  </p>
                </VerticalTimelineElement>
                
                </VerticalTimeline>

                </div>
                
            ):
            (
              <div className='text-center'>
               <h1 className='text-2xl my-8'>Work</h1>
                <VerticalTimeline
                lineColor='#634EF6'>
                      <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    contentStyle={{ background: '#302387', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #302387' }}
    iconStyle={{ background: '#302387', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title font-extrabold text-xl">PEPCORNS</h3>
    <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">Full Stack Intern</h4>
    <p>
    Built and implemented the complete referral module and learned how to work in live projects and understood how the server works
    </p>
  </VerticalTimelineElement>
                    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    contentStyle={{ background: '#a279f9', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #a279f9' }}
    iconStyle={{ background: '#a279f9', color: '#000' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title font-extrabold text-xl">SPRING FEST, IIT KHARAGPUR</h3>
    <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">Full Stack Developer</h4>
    <p>
    Worked in a team of 14 members and built the Frontend of 5 websites and 2 Full Stack websites
    </p>
  </VerticalTimelineElement>

  

                </VerticalTimeline>
              </div>
             

            )
        }
       
  
</div>
    </>
    
    
  )
}

export default Experience
