import React from 'react';
import partnerImg from '../../../assets/images/partnerimg.svg';
import appleStore from '../../../assets/images/appstore.svg';
import googleStore from '../../../assets/images/googlestore.svg';
import { Link } from 'react-router-dom';
function Frame3() {
	return (
		<div className='rounded-1xl w-full bg-gray-100 h-auto space-y-8  lg:space-y-0 flex  flex-col poppins px-4 py-4 text-white justify-cente flex items-center'>
			<div className='flex lg:flex-row flex-col lg:space-y-0 space-y-8 w-full items-center rounded-2xl bg-white lg:px-4 px-8'>
				<img src={partnerImg} alt={''} className='lg:max-w-[35vw] w-full' />

				<div className='flex flex-col space-y-2 items-center justify-center ml-auto'>
					<h1 className='lg:text-[2rem] text-[1.5rem] text-black font-bold '>
						Download our app
					</h1>
					<p className='text-gray-400 lg:w-[35vw]'>
						Unlock seamless interactions and boundless opportunities. Embrace
						innovation and enriching experiences. Join us on this transformative
						journey.
					</p>
					<div className='flex flex-col space-y-4 lg:mr-auto'>
						<div className='flex flex-row space-x-4 bg-[#1D242D] p-4 rounded-xl'>
							<img src={appleStore} className='w-6 h-6' alt={''} />
							<Link to='/waitlist'>Download on appstore</Link>
						</div>
						<div className='flex flex-row space-x-4 bg-[#1D242D] p-4 rounded-xl'>
							<img src={googleStore} className='w-6 h-6' alt={''} />
							<Link to='/waitlist'>Download on googleplay</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Frame3;
