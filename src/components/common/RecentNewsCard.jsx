import React from 'react'
import Heading from '../utils/Heading'
import { Link } from 'react-router-dom'

const RecentNewsCard = ({title, url="#", puslishedDate}) => {
  return (
    <div className='border-b border-white/25 pb-4'>
        <Link to={url} className='text-white font-montserrat text-base font-bold leading-[23px] tracking-[0.53px] inline-block'>
            {title}
        </Link>
        <div className='mt-[14px] flex gap-2'>
            <span className='inline-block font-lato text-sm font-bold text-gray_1/75'>Published on:</span>
            <span className='inline-block font-lato text-sm font-bold text-gray_1'>{puslishedDate}</span>
        </div>
    </div>
  )
}

export default RecentNewsCard