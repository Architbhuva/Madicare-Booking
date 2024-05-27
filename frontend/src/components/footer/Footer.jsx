import React from 'react';
import { Form, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLink = [
  {
    path: "https://www.youtube.com/channel/UCwMcY-y6M0iOgDHQBR1jAeg",
    icon: < AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "",
    icon: < AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "",
    icon: < AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/",
    display: "About Us",
  },

  {
    path: "/services",
    display: "Services",
  },

  {
    path: "/",
    display: "Blog",
  },
];

const quickLink02 = [
  {
    path: "find-a-doctor",
    display: "Find a doctor",
  },

  {
    path: "/",
    display: "Request An Appoinment",
  },

  {
    path: "/",
    display: "Find a doctor",
  },

  {
    path: "/",
    display: "Get A Opinion",
  },
];

const quickLink03 = [
  {
    path: "/",
    display: "Donate",
  },

  {
    path: "/contact",
    display: "Contact Us",
  }
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='' />
            <p className='text-[1] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} developed by Archit Bhuva all right reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLink.map((link, index) => (
                <Link to={link.path} key={index}
                  className='w-9 h-9 border border-solid border-[#181A1E]
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border:none'>
                  {link.icon}
                </Link>))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>
            <ul>
              {quickLink01.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I Want to:
            </h2>
            <ul>
              {quickLink02.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Support
            </h2>
            <ul>
              {quickLink03.map((item, index) => <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link></li>)}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer