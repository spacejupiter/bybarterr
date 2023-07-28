import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import buy from '../../../assets/images/buy.svg';
import security from '../../../assets/images/security.svg';
import swap from '../../../assets/images/swap.svg';
import auction from '../../../assets/images/auction.svg';

function Product() {
	useEffect(() => {
		//window.scrollTo(0, 0);
	}, []);
	return (
		<div className='flex flex-col xl:pt-[8rem] pt-[2rem] lg:pt-[8rem]   items-center text-white h-auto py-24  w-full '>
			<div className='w-[100vw]  space-y-8 px-2 py-24 px-4 justify-center flex flex-col items-center'>
				<h1 className='md:text-[3rem] text text-2xl mt-4 font-bold text-center ns'>
					<span className='text-blue-200'>Explore </span>The Social Side Of
					<span className='text-blue-300'> Commerce</span>
				</h1>
				<p className=''></p>
				<div className='grid  grid-cols-2  items-center xl:grid-cols-4  gap-8 md:gap-1 xl:gap-8 lg:gap-4 text-white'>
					<div className='w-full   md:border-0 p-4 shadow-xl rounded-lg lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'>
						<div className='md:p-8 p-4 bg-blue-800 w-auto text-center justify-center w-14 rounded-[100%]  border border-8 shadow-xl border-blue-600 flex items-center'>
							<img src={buy} className='md:w-14 w-8' alt='' />
						</div>

						<div className='text-center'>
							<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
								Sell fast
							</p>
							<p className='whitespace-pre-line text-blue-300 text-xs 2xl:text-md lg:text-xs text-white xl:text-xs '>
								We connect buyers with sellers, ensuring trustworthy
								transactions and providing access to a wide range of
								high-quality products.
							</p>
						</div>
					</div>

					<div className=' w-full  md:border-0 p-4 shadow-xl rounded-lg lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'>
						<div className='md:p-8 p-4 bg-blue-800 w-auto text-center justify-center w-14 rounded-[100%]  border border-8 shadow-xl border-blue-600 flex items-center'>
							<img src={security} className='md:w-14 w-8' alt='' />
						</div>

						<div className='text-center'>
							<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
								Escrow
							</p>
							<p className='whitespace-pre-line 2xl:text-[20px]  text-blue-300 text-xs text-white xl:text-[15px]'>
								We facilitate valuable exchanges, ensuring the fair transfer of
								funds and goods, giving you peace of mind throughout the process
							</p>
						</div>
					</div>

					<div className='w-full md:border-0 p-4 shadow-xl rounded-lg lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'>
						<div className='md:px-8 md:py-10 p-4   bg-blue-800 w-auto text-center justify-center w-14 rounded-[100%]  border border-8 shadow-xl border-blue-600 flex items-center'>
							<img src={swap} className='md:w-14 w-8' alt='' />
						</div>

						<div className='text-center'>
							<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
								Swap
							</p>
							<p className='whitespace-pre-line 2xl:text-[20px]  text-blue-300 text-xs  text-white xl:text-[15px]'>
								We facilitate valuable sales by connecting buyers and sellers,
								ensuring fair exchanges of equivalent items to meet their needs
							</p>
						</div>
					</div>
					<div className='w-full  md:border-0 p-4 shadow-xl rounded-lg lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'>
						<div className='md:px-8 md:py-8 px-4 py-4 bg-blue-800 w-auto text-center justify-center  rounded-[100%]  border border-8 shadow-xl border-blue-600 flex items-center'>
							<img src={auction} className='md:w-14 w-8 ' alt='' />
						</div>

						<div className='text-center'>
							<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
								Auction
							</p>
							<p className='whitespace-pre-line text-xs  text-blue-300 2xl:text-[20px]  text-white xl:text-[15px]'>
								We facilitate valuable sales by connecting buyers and sellers,
								ensuring fair exchanges of equivalent items to meet their needs
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='h-auto bg-gray-100 w-full flex justify-center py-14 px-4'>
				<div className='flex flex-col'>
					<p className='text-black text-center'>Our mission is to</p>
					<h1 className='font-bold md:text-3xl text-xl text-gray-500 text-center whitespace-pre-line'>
						{
							'Ensure an eco-friendly environment \n one recycled product at at time'
						}
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Product;
