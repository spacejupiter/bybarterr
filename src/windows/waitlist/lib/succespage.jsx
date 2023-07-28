import React from 'react';
import successImage from '../../../assets/images/success.svg';

function Succespage({ onGotIt, title, caption }) {
	return (
		<div className='bg-white fixed top-0 h-screen absolute w-full left-0 px-8 py-4 flex justify-center items-center flex-col text-black space-y-8 overflow-x-hidden'>
			{/* Overlay */}
			<div className='absolute top-0 left-0 w-full h-full bg-blue-900 opacity-60'></div>

			<div className='flex flex-col bg-white justify-center border items-center text-center space-y-4 py-8 px-16 text-black py-32 rounded-lg relative z-10'>
				<p className='font-bold md:text-3xl text-3xl ns'>{title}</p>
				<p>{caption}</p>
				<div className='w-44 h-44 rounded-full border justify-center items-center flex'>
					<img className='h-14 w-14' src={successImage} alt='success' />
				</div>
				<button
					onClick={onGotIt}
					className='bg-white text-black px-[2rem] py-3 shadow-md rounded-[3rem]'>
					Got it
				</button>
			</div>
		</div>
	);
}

export default Succespage;
