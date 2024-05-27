import React from 'react'

const Feedback = () => {
    return <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhibur Rahman
                </span>
            </h3>
            <p className='text__para'>
                orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-hedingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            23 june 2008
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

}

export default Feedback