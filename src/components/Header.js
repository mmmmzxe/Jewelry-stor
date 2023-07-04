import React, { useEffect, useState  } from 'react';


import Nav from '../components/Nav'
import Socials from '../components/Socials'
import logowith from '../assets/img/header/logo3.png'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../variants'


export const headerVariants = {
  hidden: {
    padding: '20px 0px 20px 0px',
    background: 'none'
  },
  show: {
    padding: '10px 0px 10px 0px',
    background: '#eee',
    transition: {
      type: 'spring'
    },
    display:'block',
    
  }

}
export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0px)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
     

    }
  }
}
const Header = () => {


  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    })
  })
  return <motion.header
    variants={headerVariants} initial='hidden' animate={isActive ? 'show' : ''} className='bg-pink-900 relative w-full'>
    <motion.div variants={staggerContainer(0.3, 1)}
      initial='hidden'
      animate={'show'}
      className='mx-auto container w-full '>
      <div className=' flex justify-between items-center px-3 lg:px-0 relative'>
        <motion.div variants={fadeIn('down', 'tween', 1.2, 1.4)} onClick={() => setNav(!nav)} className={`${nav ? 'gap-y-0' : 'gap-y-2'} flex flex-col justify-center items-center 
       w-12 h-12 px-3 order-2 lg:order-none cursor-pointer border-2 border-pink-900 
        rounded-full`}>
          <motion.div initial={{ rotate: 0, }} animate={{
            rotate: nav ? -45 : 0, translateY: nav ? 2 : 0
          }} className='w-full h-[3px] bg-pink-900'></motion.div>

          <motion.div initial={{ rotate: 0, }} animate={{
            rotate: nav ? 45 : 0 
          }} className='w-full h-[3px] bg-pink-900'></motion.div>

        </motion.div>
        <motion.div className='order-1 lg:order-none lg:ml-[11rem]' variants={fadeIn('down', 'tween', 1.4, 1.4)}>
          <a href='#'>
            <img src={logowith} className={`${isActive ? 'w-[95px] h-[95px]' : 'w-[120px] h-[120px]'}`}></img>
          </a>
        </motion.div>
        <motion.div variants={fadeIn('down', 'tween', 1.4, 1.4)} className='hidden lg:flex '>
          <Socials />
          
        </motion.div>
        <motion.div variants={navVariants} initial='hidden' animate={nav ? 'show' : ''} className='absolute bg-pink-900 w-[250px] h-[60vh] right-0
         lg:left-0 top-[100px] bottom-0 
         rounded-lg shadow-xl'>
          <Nav />
        
        </motion.div>
      </div>
      
    </motion.div>
  </motion.header>;
};

export default Header;
