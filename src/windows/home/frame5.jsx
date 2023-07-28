import React, { useState } from 'react';
import smilingGirl from '../../assets/images/woman smile.svg';
import phone from '../../assets/images/pngwing 1.svg';
import laptop from '../../assets/images/pngwing 2.svg';
function Frame5() {
	return (
		<div className='flex lg:flex-row flex-col  h-auto px-8 lg:space-x-2 poppins'>
			<div className='flex flex-col space-y-4'>
				<div className='flex lg:flex-row flex-col lg:w-[50vw] w-full lg:h-[38vh] h-auto bg-[#FFEB9D] rounded-3xl px-8 justify-center '>
					<div className='flex flex-col'>
						<h1 className='lg:text-[4rem] text-[2rem] font-bold inter'>
							Swap Deals Are Back!!!
						</h1>
						<p className='text-[1.2rem]'>Get iphone 14 with your 12</p>
					</div>
					<img src={phone} alt='' className='' />
				</div>
				<div className='flex flex-col lg:w-[50vw] w-full h-[38vh]  bg-[#9DBEFF] rounded-2xl justify-center items-center relative'>
					<div
						className='w-full h-full absolute top-0 left-0 bg-cover bg-center rounded-2xl'
						style={{
							backgroundImage: `url(${laptop})`,
							width: '100%',
						}}></div>
					<div className='relative z-10'>
						<p className='text-white text-center text-2xl'>
							Get 50% discount
							<br /> on purchase
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col mt-4'>
				<img src={smilingGirl} className='lg:w-[50vw] w-full' alt='' />
			</div>
		</div>
	);
}

export default Frame5;
