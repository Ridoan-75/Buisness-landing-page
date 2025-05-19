import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/*left column*/}
      <div className='w-full md:w-1/2 space-y-8'>
        {/*star badge*/}
        <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group '>
          <span className=' group-hover:scale-120 transition-transform'>⭐</span>
          <span className='text-sm font-medium'>Jump start your growth</span>
        </div>

        {/*heading*/}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold '>
          We boost the growth for <span className='text-blue-600 relative inline-block '>Startup to Fortune 500</span> Companies
          <span className='inline-block ml-2 animate-pulse'>⏰</span>
        </h1>

        <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
          Get the most accurate leads, sales peaople training and conversaions, tools and more -- all within the same one billing.
        </p>

        <div className='flex gap-3 max-w-md'>
          <input type="email" placeholder='Enter Your Email Address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' />

          <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500'>➞</button>
        </div>
      </div>

      {/*right column*/}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
        <div className='relative '>
          <img src="hero-image.png" alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
        </div>
      </div>
    </motion.section>
  )
}

export default Hero;
