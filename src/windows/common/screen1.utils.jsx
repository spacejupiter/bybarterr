import React, { useEffect } from 'react';
import iphone from '../../assets/images/iphone.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Frame1(props) {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<div
			className='bg-blue-700 sm:max-md:bg-red-400 w-full h:[100vh] lg:h-[49rem] xl:h-[50rem] text-white flex 
  justify-center text px-[2rem]   pt-[5rem]  xl:pt-0 
   md:w-full  sm:max-md:h-[50rem] lg:w-full '>
			<div
				className='flex flex-col lg:flex-row lg:mt-44  xl:mt-30  justify-center 
    lg:mt-[13vw] lg:h-[20vh] h-auto flex md:space-y-14 lg:-space-y-24 lg:space-x-[]
    xl:space-x-[10rem] xl:space-y-0 m space-y-8'>
				<div className='mt-14 lg:mt-[14vw] xl:mt-[9vw] md:mt-[14vw]  '>
					<h1
						className='font-bold text-[2rem] xl:text-[3rem] lg:text-[3rem] 2xl:text-[4rem] 
        sm:text-[3rem] md:max-lg:text-[4rem]  whitespace-pre-line lg:text-left 
        text-center'
						data-aos='fade-up'>
						{'Socio-Commerce \n like never before'}
					</h1>

					<h2
						className='font-bold text-[0.8rem] lg:text-[1.2rem] xl:text-[1.2rem]
         md:max-lg:text-[1.5rem] sm:text-[1.2rem] 2xl:text-[1.5rem] text-white 
         whitespace-pre-line lg:text-left text-center
         '
						data-aos='fade-up'>
						{
							'byBarter offers a social, safe and interactive\n marketplace for '
						}{' '}
						<span
							className='
         text-[#63CFE3]  text-center font-bold xl:text-[1.2rem] lg:text-md 
         2xl:text-[1.5rem]'>
							{'P-2-P exhange of products'}
						</span>
					</h2>

					<div className='flex flex-row mt-4 lg:space-x-4 lg:space-y-0 space-y-4 '>
						<p
							className='border border-4  lg:px-[2rem] lg:py-[1rem] 2xl:px-[4rem] 2xl:py-[1.5rem] [ rounded-[40rem] whitespace-nowrap 
            lg:block hidden 
            '
							data-aos='fade-down'
							data-aos-duration='100'>
							Get on Appstore
						</p>
						<p
							className='border 2xl:px-[3rem] 2xl:py-[1.5rem] lg:px-[1.8rem] lg:py-[1rem] border-4 rounded-[40rem] whitespace-nowrap lg:block hidden 
            
            '
							data-aos='fade-down'
							data-aos-duration='100'>
							Get on Googleplay
						</p>
						<p
							className='border border-[0.4rem] lg:px-8 px-[6rem] py-[4vw] md:max-lg:px-[15rem] sm:max-md:px-[13rem]
             lg:px-[24rem]  rounded-[40rem] whitespace-nowrap lg:hidden 
             '
							data-aos='fade-up'
							data-aos-duration='100'>
							Get on all stores
						</p>
					</div>
				</div>

				<div className=' text-center lg:flex  lg:p-0'>
					<img
						className=' flex object-contain  w-[39rem] 
        sm:h-[39rem] md:max-lg:h-[40rem] lg:h-[39rem]
        '
						src={iphone}
						alt=''
						data-aos='fade-down'
						data-aos-duration='1000'
					/>
				</div>
			</div>
		</div>
	);
}

export default Frame1;
