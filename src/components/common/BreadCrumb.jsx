import React from 'react'
import breadcrumbBg from '../../assets/images/breadcrumb-bg.jpg'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'

const BreadCrumb = ({title, routeName, parentRouteName="home", parentRouteUrl="/", bg = breadcrumbBg }) => {
  return (
   <section style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-center bg-no-repeat pt-[172px] pb-[125px]' >
    <div className="container">
        <h3 className='text-white text-center font-montserrat text-[34px] font-bold leading-12'>{title}</h3>
        <div className='mt-10 flex justify-center items-center gap-x-2'>
            <Link to={parentRouteUrl} className='inline-block mb-1'>
                <span className='text-white text-sm font-lato font-bold capitalize'>{parentRouteName}</span>
            </Link>
            <GoChevronRight className='text-white' />
            <span className='text-[#C9B5E5] text-sm font-lato font-normal capitalize'>{routeName}</span>
        </div>
    </div>
   </section>
  )
}

export default BreadCrumb