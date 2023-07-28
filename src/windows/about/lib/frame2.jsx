import React from 'react';
import partner from '../../../assets/images/partners.svg';
import line from '../../../assets/images/line.svg';
function Frame2() {
	return (
		<div className='  w-full bg-[#1D242D] h-auto space-y-8  lg:space-y-0 flex lg:flex-row flex-col poppins px-4  py-4 text-white justify-cente flex items-center'>
			<div className='flex flex-col space-y-2'>
				<div className='flex flex-col'>
					<h1 className='text-2xl'>Hear From Our Partners</h1>
					<img src={line} alt='' className='w-64' />
				</div>
				<div>
					<p className='text-left lg:w-[38vw]'>
						collaborating with ByBarterr has been transformative. Seamless
						experiences, shared values, and boundless opportunities. A cherished
						partnership --Movel
					</p>
				</div>
			</div>
			<img alt='' src={partner} className='ml-auto' />
		</div>
	);
}

export default Frame2;
