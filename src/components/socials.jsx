import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import {social} from "../constants"
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const socials = () => {
  return (
    <div
    className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Socials.</h3>



      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {social.map((social) => (
        <div className='rounded-sml h-20 w-20 bg-transparent' key={social.name}  onClick={() => window.open(social.link, "_blank")}>
          <img src={social.icon}  />
        </div>
      ))}
    </div>

   

      
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
     
    </motion.div>
   

    

  </div>
  );
};

export default SectionWrapper(socials,"social");