import React, { useState, useEffect } from 'react';
import hero from '../../assets/images/hero.svg';
import swapPhone from '../../assets/images/swapphone.svg';
import imagery from '../../assets/images/imagery.svg';
import storeImage from '../../assets/images/storeimage.svg';
import { Link } from 'react-router-dom';

function Frame1() {
	return (
		<div className='flex flex-col lg:-space-y-[5vw] poppins h-auto     lg:h-auto'>
			<div
				className='lg:pt-24 pt-24 lg:space-y-4 space-y-4 flex items-center justify-center relative bg-gray-100 h-[100vh] flex flex-col lg:h-screen'
				style={{
					backgroundImage: `url(${hero})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				{/* Overlay */}
				<div className='absolute top-0 left-0 w-full h-full bg-blue-700 opacity-30 z-10'></div>

				{/* Content for the div (if any) */}
				<div className='flex lg:space-y-1 flex-col text-center items-center relative z-30'>
					<h1 className='font-bold text-center lg:text-[2rem] text-xl text-black poppins  xl:mt-14 mt-14 2xl:mt-44'>
						Embrace the social side of <br />
						Commerce
					</h1>
					<p className='lg:text-lg text-xs text-white z-30'>
						Buy, Sell, and Swap with Ease Anytime
					</p>
				</div>

				<Link
					to='/waitlist'
					className='text-white lg:px-14 px-4 py-6 rounded-lg bg-[#1D242D] z-30'>
					Download and get started
				</Link>
			</div>

			<div className='flex lg:flex-row flex-col lg:space-x-4 px-8  lg:space-y-0 space-y-4  py-2 z-20'>
				<div className='bg-white  rounded-md lg:w-[45vw] w-full border h-auto p-4   flex-col flex justify-center py-8 items-center'>
					<img
						src={swapPhone}
						alt={''}
						className='object-contain max-w-full max-h-full'
					/>
					<div className='flex flex-col p-2 space-y-2 '>
						<h1>Buy</h1>
						<p className=' text-[#717171] text-sm'>
							All items from top brands with on the app
						</p>
					</div>
				</div>

				<div className='bg-white rounded-md shadow lg:w-[25vw] w-full h-auto flex flex-col justify-center items-center p-4'>
					<img
						src={imagery}
						alt={''}
						className='object-contain max-w-full max-h-full'
					/>
					<div className='flex flex-col p-2 space-y-2'>
						<h1>Sell</h1>
						<p className=' text-[#717171] text-sm'>
							Create a profile and start selling
						</p>
						<Link
							to='/waitlist'
							className='bg-black text-white lg:w-52 w-full px-8 py-4 rounded-lg'>
							shop top deals
						</Link>
					</div>
				</div>

				<div className='bg-white rounded-md lg:w-[25vw] w-full  shadow h-auto flex flex-col justify-center items-center p-4'>
					<img
						src={storeImage}
						alt={''}
						className='object-contain max-w-full lg:max-h-[25vh] max-h-full'
					/>
					<div className='flex flex-col p-2 space-y-2'>
						<h1>Swap</h1>
						<p className=' text-[#717171] text-sm'>
							swap anything with anything
						</p>
						<Link
							to='/waitlist'
							className='bg-black text-white lg:w-44  px-8 py-4 rounded-lg'>
							Get started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Frame1;
