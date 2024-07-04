/* eslint-disable no-unused-vars */
// No need to create this card card since we can copy oaste the objects defined inside the data in foreground
import React from 'react'
import { FaRegFile } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCodeDownload } from "react-icons/io";

function card1({data={} }) {


  return (

    <div className='relative h-[17rem] w-[14rem] bg-zinc-800 rounded-[20%] mt-[2%] p-4 m-2 font-semibold text-slate-300 overflow-hidden'>
    <h3>{data.icon?data.icon:<FaRegFile />}</h3>
    <p className='para m-[2%] h-[10rem] w-auto'>{data.desc?data.desc:"This is Me sdhfgjkl"}</p>
    <div className='Icon flex justify-between'>
        <h5>{data.filesize?data.filesize:"0.7Mb"}</h5>
       
    <h5 className='h-9'>

        {data.close?<IoCloseCircleOutline />:<IoMdCodeDownload />}

    </h5>

       
    {data.tag && data.tag.isOpen && (
        <div className={`tag w-full left-0 flex flex-row justify-center h-[2.4em] absolute bottom-0 bg-green-400`}>
          <h4 className='pt-1'>{data.tag.tagTitle ? data.tag.tagTitle : ""}</h4>
        </div>
        )}
    </div>
  </div>
);
}

   

export default card1