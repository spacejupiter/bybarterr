import React from 'react';
import successImage from '../../../assets/images/success.svg';

function Succespage({ onGotIt, title, caption }) {
	return (
		<div className='bg-blue-700 flex justify-center items-center flex-col text-white space-y-4 overflow-x-hidden'>
			<p className='font-bold md:text-3xl text-3xl'>{title}</p>
			<p>{caption}</p>
			<div className='bg-white rounded-full p-4 flex justify-center items-center w-32 h-32'>
				<img className='h-14 w-14' src={successImage} alt='success' />
			</div>
			<button
				onClick={onGotIt}
				className='bg-blue-600 px-[8rem] py-6 shadow-md rounded-[3rem]'>
				Got it
			</button>
		</div>
	);
}

export default Succespage;
