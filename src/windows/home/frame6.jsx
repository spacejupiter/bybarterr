import React from 'react';
import gamebook from '../../assets/images/gamebook.svg';
import pad from '../../assets/images/pad.svg';
import ps5 from '../../assets/images/ps5.svg';
import { Link } from 'react-router-dom';
function Frame6() {
	return (
		<div className='flex px-8 grid grid-cols-1 lg:grid-cols-3 h-auto gap-2 poppins '>
			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col h-[70vh]'>
				<div className=''>
					<img src={gamebook} alt={''} className='max-w-[20vw]' />
				</div>

				<div className='flex flex-col space-y-1'>
					<h1 className='text-2xl'>Breach & Clear</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14 w-52'>
						Go to shop
					</Link>
				</div>
			</div>

			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col lg:h-[70vh] py-4 px-4'>
				<img src={pad} alt={''} className='max-w-[20vw]' />

				<div className='flex flex-col space-y-1'>
					<h1 className='lg:text-2xl '>
						PLAYSTATION PS5 DualSense Wireless Controller - White
					</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14 w-52'>
						Go to cart
					</Link>
				</div>
			</div>

			<div className='rounded-lg bg-gray-100 justify-center items-center flex flex-col h-[70vh]'>
				<div>
					<img src={ps5} alt={''} className='max-w-[20vw]' />
				</div>

				<div className='flex flex-col space-y-1'>
					<h1 className='text-2xl'>Ps5</h1>

					<Link to='/waitlist' className='bg-white rounded-lg py-3 px-14 w-52'>
						Go to shop
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Frame6;
