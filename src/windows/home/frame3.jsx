import React from 'react';
import image1 from '../../assets/images/image2.svg';
import image2 from '../../assets/images/image3.svg';
import { Link } from 'react-router-dom';

function Frame3() {
	return (
		<div className='w-full flex lg:flex-row flex-col  h-auto px-8 poppins lg:space-x-2 space-y-4 lg:space-y-0'>
			<div className='flex flex-col lg:w-[50vw] w-full space-y-14 rounded-xl h-auto'>
				<div className='whitespace-pre-line '>
					<h1 className='font-bold lg:text-[2.6rem] text-[1.8rem]'>
						Social media meets <br className='lg:block hidden' />{' '}
						<span className='lg:text-[3rem] '>ecommerce</span>
					</h1>
					<p className='text-left text-gray-400'>
						Social commerce revolutionizes online shopping. Connect, discover,
						and shop effortlessly. Embrace personalized experiences, fostering
						strong relationships
					</p>
				</div>
				<div className='flex flex-col space-y-4 border p-4 rounded-lg'>
					<img
						src={image1}
						alt={''}
						className='lg:max-w-[45vw] max-w-[100vw]'
					/>
					<div className=' space-y-2'>
						<h1 className='text-xl'>Discover our Powerful Mobile App</h1>
						<p className='text-gray-400 text-sm'>
							Shop, Sell, and Swap On-the-Go with Ease!
						</p>
						<Link
							to='/waitlist'
							className='p-3 rounded-md bg-white lg:w-44 w-full border'>
							Download now
						</Link>
					</div>
				</div>
			</div>

			<div className='lg:w-[50vw] border w-full h-auto border px-4 rounded-xl flex flex-col  poppins items-center  space-y-4 py-4 '>
				<div>
					<img src={image2} alt={''} className='lg:max-w-[45vw] max-w-full' />
				</div>

				<div className='flex flex-col space-y-2 h-auto lg:px-14'>
					<h1 className='text-xl text-black'>
						With bybarterr app, you can now <br className=' hidden' />
						Swap Anything for Anything
						<br className=' hidden' /> superfast
					</h1>
					<p className='text-gray-400 lg:text-lg text-sm'>
						Embrace the art of bartering, connecting with a vibrant community
						for seamless exchanges of goods and services. Join us today and
						unlock a new era of shared passions and meaningful connections.
					</p>
					<Link
						to='/waitlist'
						className=' py-3  text-center rounded-lg bg-white border lg:w-44 poppins'>
						Get started
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Frame3;
