import React, { useState } from 'react';
import doctorimg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about')

  return (
    <section>
      <div className='max-w-[1170] px-5 max-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex item-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorimg} alt='' className='w-full' />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisblueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  Muhibur Rahman
                </h3>
                <div className='flex item-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[24px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingcolor'>
                    <img src={starIcon} alt="" />4.8
                  </span>
                </div>
                <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'> It is a long established fact that a reader will be distracted by</p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
                onclick={() => setTab('about')}
                className={`${tab === 'about' && 'border-solid border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              onclick={() => setTab('feedback')}
              <button className={`${tab === 'about' && 'border-solid border-solid border-primaryColor'}py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
          </div>
          <div className='mt-[50px]'>
            {
              tab === "about" && <DoctorAbout />
            }
            {
              tab === "feedback" && <Feedback />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails