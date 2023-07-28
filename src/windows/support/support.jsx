import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Handlesupport from './lib/handlesupport';
import Succespage from './lib/successpage';
import Faq from '../faq/faq';
function Support() {
	const [, , , , , , , setSuccess, success] = Handlesupport();
	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({});
	}, []);

	const handleGotIt = () => {
		setSuccess(false);
	};

	return (
		<div className='support flex flex-col px-8 h-auto bg-white text-black justify-center  space-y-4 overflow-x-hidden'>
			{success ? (
				<Succespage
					onGotIt={handleGotIt}
					title={'We have got your concerns!'}
					caption={'One of our support team would be in touch shortly! x'}
				/>
			) : (
				<SupportPage />
			)}
			<Faq />
		</div>
	);
}

const SupportPage = () => {
	const [
		name,
		email,
		message,
		handleNameChange,
		handleEmailChange,
		handleMessageChange,
		handleSubmit,
	] = Handlesupport();
	return (
		<div className='pt-24 xl:pt-0 '>
			<div data-aos='fade-down' className='flex flex-col xl:mt-14 poppins  '>
				<h1 className='lg:text-[5rem] md:text-[4rem] text-[2rem] font-bold text-center'>
					Get in touch with us
				</h1>
				<p className='text-center lg:text-[1.5rem] text-[1rem] poppins text-gray-400 md:text-[1.2rem] whitespace-pre-line'>
					{
						'Fill out the form to get through to us with any feedback, \n recommendations or complaints'
					}
				</p>
			</div>

			<div
				data-aos='fade-up'
				className='flex flex-col border boder-[4rem] h-[60vh] lg:h-[60vw] xl:h-[30vw] border-gray-400   xl:mx-[20rem]  lg:mx-[4rem] p-4 rounded-2xl space-y-4'>
				<div className='flex lg:flex-row flex-col justify-center space-y-4 lg:space-y-0 lg:space-x-4'>
					<input
						onChange={handleNameChange}
						value={name}
						placeholder='Name'
						className='rounded-2xl px-12 lg:px-12 py-4 bg-white border border-2  border-gray-400 teplaceholder-white'
					/>
					<input
						onChange={handleEmailChange}
						value={email}
						placeholder='Email Address'
						className='rounded-2xl px-12 lg:px-12 py-4 bg-white border border-2  border-gray-400 teplaceholder-white'
					/>
				</div>
				<textarea
					onChange={handleMessageChange}
					value={message}
					placeholder='Message'
					className='bg-white  p-4 lg:h-[35vh] md:h-[35vh] h-52 xl:h-52  border border-2 border-gray-400 text-black placeholder-black rounded-lg px-4 lg:mx-8'
				/>
				<button
					onClick={handleSubmit}
					className='rounded-2xl px-12 lg:px-12 lg:ml-8 lg:w-52 w-full py-4 bg-black border border-2  border-gray text-white'>
					Submit
				</button>
			</div>
		</div>
	);
};
export default Support;
