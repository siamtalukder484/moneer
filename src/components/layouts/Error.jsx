import React from 'react'
import bg from '../../assets/images/error-bg.png'
import bg2 from '../../assets/images/error-bg-2.png'
import Image from '../utils/Image'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative' >
        <Image source={bg} alt='img' className="w-[96%] xl:w-[87%] 2xl:w-[80%] hidden lg:block" />
        <div className='lg:absolute lg:left-[49.5%] lg:top-[22%] 2xl:top-[30%] ' >
            <Image source={bg2} alt='img' className="hidden lg:block" />
            <div className='flex flex-col items-center lg:absolute lg:top-20 lg:left-1/2 lg:-translate-x-1/2'>
                <span className='text-[#5F5FFF] font-montserrat font-bold text-[120px] block leading-none' >404</span>
                <p className='text-base font-bold font-montserrat text-[#000619] '>Sorry, Page not Found</p>
                <Link to="/" className='mt-[18px] bg-linear-(--error-btn-linearbg) text-white font-montserrat text-sm font-semibold py-4 px-[30px] inline-block rounded-[25.5px]' >Back to Home Page</Link>
            </div>
        </div>
    </section>
  )
}

export default Error