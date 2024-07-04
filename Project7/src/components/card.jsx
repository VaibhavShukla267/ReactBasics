/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaBeer, FaDownload, FaRegWindowClose } from 'react-icons/fa';
import { motion } from "framer-motion"

function Card({ data={} , refrence}) {
  // to make something dragable use it there!!
  return (

    <motion.div 
    drag 
    dragConstraints={refrence} 
    whileScale={{scale:1.2}} 
    dragElastic={0.1}
    dragTransition={{bounceDamping:510 ,bounceStiffness:500}}
    className='relative w-[14rem] h-[17rem] bg-zinc-800 m-[2%] rounded-[40px] p-3 text-slate-400 overflow-hidden font-semibold flex-nowrap'>
      {/* icon */}
      <h3>{data.icon ? data.icon : <FaBeer />}</h3>
      {/* text */}
      <div className='desc h-[60%] w-auto pt-3'>
        <p>{data.desc ? data.desc : "No Description Mentioned Default Description"}</p>
      </div>
      {/* footer */}
      <div className='footer flex items-center justify-between absolute w-[100%] h-[3em] left-0 pt-[5%]'>
        {/* data */}
        <h5>{data.filesize ? data.filesize : "0.0Mb"}</h5>
        {data.close ? <FaRegWindowClose /> : <FaDownload />}
      </div>
      {/* tag */}
      {/* How to Change TagColor?? */}
      {data.tag && data.tag.isOpen && (
        <div className={`tag w-full left-0 flex flex-row justify-center h-[2.5em] absolute bottom-0 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-400"}`}>
          
          <h4 className='pt-1'>{data.tag.tagTitle ? data.tag.tagTitle : ""}</h4>
        </div>
      )}
  </motion.div>
   
  );
}

export default Card;
