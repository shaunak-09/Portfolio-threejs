import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./exp.scss"
import { expedu, expwork } from '../../constants/constant';
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
                  {
                    expedu.map((item,i)=>{
                      return(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education "
                        date={item.date}
                        key={i}
                        dateClassName="date"
                        contentStyle={i%2==0 ?{background: '#4225b6', color: '#fff' }:{ background: '#a279f9', color: '#000' }}
                        contentArrowStyle={i%2==0 ?{ borderRight: '7px solid  #4225b6' }:{borderRight: '7px solid  #a279f9'}}
                        iconStyle={i%2==0?{ background: '#4225b6', color: '#fff' }:{background: '#a279f9', color: '#fff'}}
                        // icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title font-extrabold text-xl">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">{item.subtitle}</h4>
                        <p className=' text-left'>
                       {item.body}
                        </p>
                      </VerticalTimelineElement>

                      )
                     

                    })
                  }
                
                </VerticalTimeline>

                </div>
                
            ):
            (
              <div className='text-center'>
               <h1 className='text-2xl my-8'>Work</h1>
                <VerticalTimeline
                lineColor='#634EF6'>
               {       expwork.map((item,i)=>{
                      return(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education "
                        date={item.date}
                        key={i}
                        dateClassName="date"
                        contentStyle={i%2==0 ?{background: '#4225b6', color: '#fff' }:{ background: '#a279f9', color: '#000' }}
                        contentArrowStyle={i%2==0 ?{ borderRight: '7px solid  #4225b6' }:{borderRight: '7px solid  #a279f9'}}
                        iconStyle={i%2==0?{ background: '#4225b6', color: '#fff' }:{background: '#a279f9', color: '#fff'}}
                        // icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title font-extrabold text-xl">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle font-semibold text-lg">{item.subtitle}</h4>
                        <p className='text-left my-0'>
                       {item.body1}
                        </p>
                        <p className='text-left my-0'>
                       {item.body2}
                        </p>
                      </VerticalTimelineElement>

                      )
                     

                    })}

  

                </VerticalTimeline>
              </div>
             

            )
        }
       
  
</div>
    </>
    
    
  )
}

export default Experience
