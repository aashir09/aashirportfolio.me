
import React from 'react';
import { styles } from "../styles";

const resume = () => {
  return (
    <a
    className=' hover:text-white  text-secondary text-[18px] font-medium cursor-pointer'    
       href="/assets/downloads/resume.pdf"
      download="Resume.pdf"  
      
    >   
        Resume
    </a>
  );
};

export default resume;
