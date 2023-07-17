import React, { useEffect } from 'react';
import iphone from '../../assets/images/iphone.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import appstore from '../../assets/images/appstore.svg';
import googlestore from '../../assets/images/googlestore.svg';
function Frame1(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({});
	}, []);

	return (
		<div className='bg-blue-700 w-full h-screen text-white flex  justify-center text items-center  relative'>
			<div className='flex flex-col xl:flex-row space-y-5'>
				<div className='mt-20 lg:mt-[14vw] xl:mt-[9vw] md:mt-[14vw] sm:mt-[30vh]  '>
					<h1
						className='font-bold text-[2rem] xl:text-[3rem] lg:text-[3rem] 2xl:text-[4rem] sm:text-[3rem] md:max-lg:text-[4rem] whitespace-pre-line lg:text-left text-center'
						data-aos='fade-up'>
						{'Socio-Commerce \n like never before'}
					</h1>

					<h2
						className='font-bold text-[3.4vw] lg:text-[1.2rem] xl:text-[1.2rem]
						 md:max-lg:text-[1.5rem] sm:text-[1.2rem] 2xl:text-[1.5rem] text-white
						  whitespace-pre-line lg:text-left text-center'
						data-aos='fade-up'>
						{
							'byBarter offers a social, safe and interactive\n marketplace for '
						}{' '}
						<span className='text-[#63CFE3]  text-center font-bold xl:text-[1.2rem] lg:text-md 2xl:text-[1.5rem]'>
							{'P-2-P exhange of products'}
						</span>
					</h2>
					<div className='flex flex-row mt-4 lg:space-x-4 lg:space-y-0 space-y-4 '>
						<Link
							to='/waitlist'
							className='shadow-xl justify-center flex flex-row-reverse  items-center space-x-2 bg-blue-600 lg:px-[1rem]  2xl:px-[4rem] 2xl:py-[1.5rem] rounded-[40rem] whitespace-nowrap lg:flex hidden'
							data-aos='fade-up'>
							<span>Get on Appstore</span>
							<img src={appstore} alt='apple' className='h-8 w-8' />
						</Link>

						<Link
							to='/waitlist'
							className='shadow-xl justify-center flex flex-row-reverse s  items-center space-x-2 bg-blue-600 lg:px-[1.5rem]  2xl:px-[4rem] 2xl:py-[1.5rem] lg:py-5 rounded-[40rem] whitespace-nowrap lg:flex hidden'
							data-aos='fade-up'>
							<span>Get on Playstore</span>
							<img src={googlestore} alt='apple' className='h-8 w-8' />
						</Link>
						<Link
							to='/waitlist'
							className='shadow-xl bg-blue-600 space-y-5  flex justify-center lg:px-8 px-[30vw] py-6 md:max-lg:px-[36vw] 
						   sm:max-md:px-[30vw] lg:px-[24rem]  rounded-[40rem] whitespace-nowrap lg:hidden 
             '
							data-aos='fade-up'
							data-aos-duration='100'>
							Get started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Frame1;
