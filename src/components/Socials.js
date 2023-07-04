import React from 'react';
import {socialData} from '../data'
import { FaCartPlus } from 'react-icons/fa';
const Socials = () => {
  return (
    <div className='flex gap-x-[10px] '>
      {socialData.map((item , index)=>{
        return(
          <div>
             <a href={item} key={index} className='border-pink-900 border rounded-full w-[35px] h-[35px]
           flex items-center justify-center text-sm transition-all text-pink-900'>{item.icon} 
           </a>
           </div>
         
        )
      })}
    
    </div>
  );
};

export default Socials;
