import React from 'react'
import bg from '../../assets/images/error-bg.png'
import bg2 from '../../assets/images/error-bg-2.png'
import Image from '../utils/Image'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative' >
        <Image source={bg} alt='img' className="w-[80%]" />
        <div className='absolute left-[49.5%] top-[30%]' >
            <Image source={bg2} alt='img' className=" " />
            <div className='flex flex-col items-center absolute top-20 left-1/2 -translate-x-1/2'>
                <span className='text-[#5F5FFF] font-montserrat font-bold text-[120px] block leading-none' >404</span>
                <p className='text-base font-bold font-montserrat text-[#000619] '>Sorry, Page not Found</p>
                <Link to="/" className='mt-[18px] bg-[#5F5FFF] text-white font-montserrat text-sm font-semibold py-4 px-[30px] inline-block rounded-[25.5px]' >Back to Home Page</Link>
            </div>
        </div>
    </section>
  )
}

export default Error