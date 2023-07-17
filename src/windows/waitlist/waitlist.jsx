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
		<div className='bg-blue-700 w-full h-screen text-white flex justify-center items-center px-[2rem] pt-[1rem] xl:pt-0 md:w-full sm:max-md:h-[50rem] lg:w-full'>
			<div className='widget text-center'>
				{success ? (
					<Succespage
						title={'Congratulations!!'}
						caption={'You have been added to our waitlist'}
						onGotIt={handleGotIt}
					/>
				) : (
					<div className='mt-14 lg:mt-[14vw] xl:mt-[9vw] md:mt-[14vw]'>
						<h1 className='font-bold text-[2rem] xl:text-[3rem] lg:text-[3rem] 2xl:text-[4rem] sm:text-[3rem] md:max-lg:text-[4rem] whitespace-pre-line lg:text-left text-center'>
							Socio-Commerce {'\n'}like never before
						</h1>
						<h2 className='font-bold text-[0.78rem] lg:text-[1.2rem] xl:text-[1.2rem] md:max-lg:text-[1.5rem] sm:text-[1.2rem] 2xl:text-[1.5rem] text-white whitespace-pre-line lg:text-left text-center'>
							byBarter offers a social, safe and interactive{'\n'} marketplace
							for{' '}
							<span className='text-[#63CFE3] text-center font-bold xl:text-[1.2rem] lg:text-md 2xl:text-[1.5rem]'>
								P-2-P exchange of products
							</span>
						</h2>
						<div className='flex flex-col mt-4 space-y-4'>
							<input
								onChange={handleEmail}
								value={email}
								onFocus={handleEmailFocus}
								onBlur={handleEmailBlur}
								placeholder='Enter your email'
								className='p-4 placeholder-center text-sm text-black py-4 placeholder-blue-700 border rounded-[40rem]'
							/>
							{(isEmailFocused && isEmailEmpty) || validateEmail() ? (
								<p className='text-red-400'>
									{isEmailEmpty ? 'Email is required' : validateEmail()}
								</p>
							) : null}
							<button
								onClick={sendEmail}
								disabled={isEmailEmpty || validateEmail()}
								className={`bg-blue-600 shadow-xl opacity-${
									isEmailEmpty || validateEmail() ? '40' : '100'
								} rounded-[40rem] py-6 text-white`}>
								Get notified early
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Waitlist;
