import React, { useEffect, useState } from 'react';
import Joi from 'joi';
import tlds from 'tlds';
import Handlewaitlist from './lib/handlewaitlist';
import Succespage from './lib/succespage';

const emailSchema = Joi.string().email({ tlds }).required();

function Waitlist() {
	const [email, handleEmail, sendEmail, success, setSuccess] = Handlewaitlist();
	const [isEmailFocused, setIsEmailFocused] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleGotIt = () => {
		setSuccess(false);
	};

	const isEmailEmpty = email.trim() === '';

	const validateEmail = () => {
		const { error } = emailSchema.validate(email);
		return error ? error.details[0].message : null;
	};

	const handleEmailFocus = () => {
		setIsEmailFocused(true);
	};

	const handleEmailBlur = () => {
		setIsEmailFocused(false);
	};

	return (
		<div className='overflow-x-hidden w-full h-auto py-8 poppins text-white flex justify-center items-center px-8 pt-[3rem] xl:pt-0 md:w-full sm:max-md:h-[50rem] lg:w-full'>
			<div className='widget text-center'>
				{success && (
					<Succespage
						title={'Congratulations!!'}
						caption={'You have been added to our waitlist'}
						onGotIt={handleGotIt}
					/>
				)}

				<div className='mt-14 lg:mt-[14vw] xl:mt-[9vw] md:mt-[14vw] justify-center items-center'>
					<h1 className='font-bold poppins text-black text-[2rem] xl:text-[3rem] lg:text-[3rem] 2xl:text-[4rem] sm:text-[3rem] md:max-lg:text-[4rem] whitespace-pre-line lg:text-left text-center'>
						Socio-Commerce {'\n'}like never{' '}
						<span className='text-blue-700'>before</span>
					</h1>
					<h2 className='font-bold poppins text-[0.78rem] text-gray-500 items-center lg:text-[1rem] xl:text-[1rem] md:max-lg:text-[1.5rem] sm:text-[1.2rem] 2xl:text-[1.5rem] text-white whitespace-pre-line lg:text-left text-center'>
						{
							'byBarter offers a social, safe and interactive \n marketplace for '
						}
						<span className='text-gray-600 text-center poppins items-center font-bold xl:text-[1rem] lg:text-md 2xl:text-[1.5rem]'>
							p2p exchange of products
						</span>
					</h2>
					<div className='flex flex-col mt-4 space-y-4 justify-center items-center'>
						<input
							onChange={handleEmail}
							value={email}
							onFocus={handleEmailFocus}
							onBlur={handleEmailBlur}
							placeholder='Enter your email'
							className='px-16 md:px-20 poppins outline-none placeholder-center text-sm text-black py-4 placeholder-black border rounded-xl'
						/>
						{(isEmailFocused && isEmailEmpty) || validateEmail() ? (
							<p className='text-red-400'>
								{isEmailEmpty ? 'Email is required' : validateEmail()}
							</p>
						) : null}
						<button
							onClick={sendEmail}
							disabled={isEmailEmpty || validateEmail()}
							className={`whitespace-nowrap bg-black shadow-xl  opacity-${
								isEmailEmpty || validateEmail() ? '40' : '100'
							} rounded-xl bg-[] py-5 md:py-6 text-white px-8  md:px-[rem] px-7 text-xs`}>
							Get notified early
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Waitlist;
