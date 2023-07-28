import React from 'react';
import iphone14 from '../../assets/images/iphoner14pro.svg';
import iphone14promax from '../../assets/images/iphone14promax.svg';
import iphonex from '../../assets/images/iphonex.svg';
import { Link } from 'react-router-dom';
function Frame4() {
	return (
		<div className='flex px-8 grid grid-cols-1 lg:grid-cols-3 h-auto gap-2 poppins '>
			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col h-[70vh]'>
				<div className=''>
					<p className='bg-yellow-200 rounded-lg p-2 w-24 mr-auto text-center'>
						Swap
					</p>
					<img src={iphone14} alt={''} className='max-w-[20vw]' />
				</div>

				<div className='flex flex-col space-y-1'>
					<h1 className='text-2xl'>Iphone 14 pro max</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14'>
						Swap now
					</Link>
				</div>
			</div>
			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col h-[70vh]'>
				<img src={iphone14promax} alt={''} className='max-w-[20vw]' />

				<div className='flex flex-col space-y-1'>
					<h1 className='text-2xl'>Iphone 14 pro max</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14'>
						Go to shop
					</Link>
				</div>
			</div>
			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col h-[70vh]'>
				<div>
					<p className='bg-blue-400 rounded-lg p-2 w-24 mr-auto text-center'>
						8% OFF
					</p>
					<img src={iphone14} alt={''} className='max-w-[20vw]' />
				</div>

				<div className='flex flex-col space-y-1'>
					<h1 className='text-2xl'>Iphone 14 pro max</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14'>
						Go to shop
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Frame4;
