import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constant";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  type,
  source_code_link,
}) => {
  return (
   
    <Tilt className='xs:w-[320px] w-[300px]  my-5 mr-8'>
    <motion.div
      variants={fadeIn("right", "spring", 1* 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-2xl  flex  flex-col items-center justify-center relative  object-contain'
      >
          <img
            src={image}
            alt='project_image'
            className='w-full h-[15rem] object-cover rounded-2xl top-0 '
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className=' mt-5 px-3'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <h3 className=' text-white-100 font-semibold text-[16px]'>{type}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2 my-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>

        

      
        </motion.div>
      </Tilt>
    
  );
};

const Works = () => {
  return (
    <div className="p-10" id="works">
      {/* <motion.div variants={textVariant()}> */}
        
        <h2 className=" text-[3rem] font-extrabold text-[#634EF6]  text-center p-8">My  Projects.</h2>
      {/* </motion.div> */}

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-[#ada2f4] text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;