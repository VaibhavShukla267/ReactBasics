/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import Card from './card';
import Card1 from './card1';
import { FaFileCode } from 'react-icons/fa';

function Foreground() {
  const ref=useRef(null);
  const data = [
    {
      icon: <FaFileCode />,
      desc: "dbcdbcnDCNDCNWENCNC",
      filesize: "0.4Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now!!", tagColor: "" }
    },
    {
      icon: <FaFileCode />,
      desc: "Hey this is description2 Welcome",
      filesize: "0.9Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Get It Now!", tagColor: "blue"}
    },
    {
      icon: <FaFileCode />,
      desc: "Hey this si Description 3 Welcome Back again",
      filesize: "1.0Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now!!", tagColor: "pink" }
    },
  ];

  return (
    <div ref={ref} className='flex flex-row fixed top-0 left-0 w-full h-full pt-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} refrence={ref} />
      ))}
      {/* <Card1 /> */}
      {/* {data.map((item, index) => (
        <Card1 key={index} data={item} />
      ))} 
       long procedure*/}
    </div>
  );
}

export default Foreground;
