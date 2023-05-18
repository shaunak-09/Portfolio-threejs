import React from 'react'
import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constant";
const Tech = () => {
  return (
    <div className='flex flex-col p-10 justify-center items-center' id="tech">
      <p className='text-[3rem] font-extrabold text-[#634EF6] p-12'>Tech Stack</p>
      <div className='flex flex-row flex-wrap justify-center gap-10 p-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Tech