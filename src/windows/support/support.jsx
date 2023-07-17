import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Handlesupport from './lib/handlesupport';
import Succespage from './lib/successpage';

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
		<div className='support flex flex-col  h-[100vh] bg-blue-700 text-white justify-center  space-y-4 overflow-x-hidden'>
			{success ? (
				<Succespage
					onGotIt={handleGotIt}
					title={'We have got your concerns!'}
					caption={'One of our support team would be in touch shortly! x'}
				/>
			) : (
				<SupportPage />
			)}
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
		<div>
			<div data-aos='fade-down' className='flex flex-col xl:mt-14 '>
				<h1 className='lg:text-[5rem] md:text-[4rem] text-[1.5rem] font-bold text-center'>
					Hi! how can we help ?
				</h1>
				<p className='text-center lg:text-[1.5rem] text-[0.62rem] md:text-[1.2rem] whitespace-pre-line'>
					{
						'Fill out the form to get through to us with any feedback, \n recommendations or complaints'
					}
				</p>
			</div>

			<div
				data-aos='fade-up'
				className='flex flex-col border boder-[2rem] h-[60vh] lg:h-[60vw] xl:h-[30vw] border-white mx-4  xl:mx-[20rem]  lg:mx-[4rem] p-4 rounded-lg space-y-4'>
				<div className='flex lg:flex-row flex-col justify-center space-y-4 lg:space-y-0 lg:space-x-4'>
					<input
						onChange={handleNameChange}
						value={name}
						placeholder='Name'
						className='rounded-xl px-12 lg:px-12 py-4 bg-blue-700 border border-2 placeholder-white'
					/>
					<input
						onChange={handleEmailChange}
						value={email}
						placeholder='Email Address'
						className='rounded-xl px-12 py-4 bg-blue-700 border border-2 placeholder-white'
					/>
				</div>
				<textarea
					onChange={handleMessageChange}
					value={message}
					placeholder='Message'
					className='bg-blue-700  p-4 lg:h-[35vh] md:h-[35vh] h-52 xl:h-52  border text-white placeholder-white rounded-lg px-4 lg:mx-8'
				/>
				<button
					onClick={handleSubmit}
					className='bg-white text-blue-700 py-4 rounded-xl  lg:mx-8'>
					Submit
				</button>
			</div>
		</div>
	);
};
export default Support;
