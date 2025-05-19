import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Schedule = () => {
  return (
     <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className=' flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/*left*/}
                <div className='md:w-1/2 w-full'>
                    <img src="stats.png" alt="state image"  className='w-full h-auto'/>
                </div>

            {/*right*/}
                <div className='md:w-1/2 w-full'>
                    <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-natural-900 mt-4 mb-6'>Strameline Your Business <br /> With Smart Scheduling Solutions</h2>
                    <p className='text-gray-600 mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum laudantium velit eligendi sapiente dignissimos doloremque cupiditate. Tenetur porro voluptates, culpa animi provident blanditiis id fugiat laboriosam, labore odio dicta.</p>

                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                        Explore scheduling features
                        <FaArrowRightLong className='size-7' />
                    </a>
                </div>
                 </div>
        </section>
  )
}

export default Schedule