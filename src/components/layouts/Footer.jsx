import React from "react";
import logo from "../../assets/images/logo.png";
import Image from "../utils/Image";
import { Link } from "react-router-dom";
import { FaChevronRight, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall, IoMdCall } from "react-icons/io";
import Heading from "../utils/Heading";
import { footerUrl, recentNews } from "../../dummyData/footerUrl";
import RecentNewsCard from "../common/RecentNewsCard";
import doubleUpArrow from '../../assets/svg/double-up-arrow.svg'


const Footer = () => {

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

  return (
    <footer className="py-[110px] bg-linear-(--footer-linearbg) relative">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[285px]">
            <Image source={logo} alt="logo" />
            <p className="mt-6 text-base font-lato font-normal text-white leading-7">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin commodo
            </p>
            <div className="mt-5 grid grid-cols-1 gap-y-4">
              <div className="grid grid-cols-[16px_auto] gap-x-4 ">
                <FaEnvelope className="text-secondary mt-1" />
                <Link
                  to="mailto:monnersupport@email.com"
                  className="text-white text-base font-lato font-bold leading-sung tracking-[0.7px] inline-block"
                >
                  monnersupport@email.com
                </Link>
              </div>
              <div className="grid grid-cols-[16px_auto] gap-x-4 ">
                <IoMdCall className="text-secondary mt-1" />
                <Link
                  to="tel:123-123-123"
                  className="text-white text-base font-lato font-bold leading-sung tracking-[0.7px] inline-block"
                >
                  (+1) 123-123-123
                </Link>
              </div>
              <div className="grid grid-cols-[16px_auto] gap-x-4 ">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <Link
                  to="#"
                  className="text-white text-base font-lato font-bold leading-snug tracking-[0.7px] inline-block"
                >
                  275 Jimmy Way Copperopolis, California(CA), 95228
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading variant="h3" text="Company" className="mt-2 font-montserrat font-bold leading-normal text-white text-2xl" />
            <div className="mt-[33px] grid grid-cols-1 gap-y-[15px]">
              {footerUrl.map((item)=>(
                <div key={item.id} className="flex gap-x-4 items-center">
                  <div className="flex items-center gap-x-2">
                    <FaChevronRight className="text-white text-xs" />
                    <Link to={item.url} className="text-white font-lato text-base font-bold leading-6 tracking-[0.7px] capitalize" >
                      {item.text}
                    </Link>
                  </div>
                  {item.isNew &&
                    <span className="inline-block bg-orange px-3 py-1 rounded-[6px] text-white text-xs font-lato font-bold tracking-[0.87px] uppercase">Hot!</span>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className="w-[440px]">
             <Heading variant="h3" text="Recent News" className="mt-2 font-montserrat font-bold leading-normal text-white text-2xl" />
              <div className="mt-[22px] grid grid-cols-1 gap-y-[14px]">
                {recentNews.map((item)=>(
                  <RecentNewsCard key={item.id} title={item.title} url={item.url} puslishedDate={item.puslishedDate} />
                ))}
              </div>
          </div>
        </div>
      </div>
      <div onClick={scrollToTop} className=" cursor-pointer inline-block absolute left-1/2 -translate-x-1/2 bottom-3">
         <Image source={doubleUpArrow} alt="icon" />
      </div>
    </footer>
  );
};

export default Footer;
