import React, { useState, useEffect } from 'react';
import hero from '../../../assets/images/hero.svg';
import value1 from '../../../assets/images/icon.svg';

function Frame1() {
	const [showText, setShowText] = useState(false);

	useEffect(() => {
		setShowText(true);
	}, []);

	return (
		<div className='h-auto  flex flex-col  poppins   space-y-4 w-full py-14'>
			<div className='whitespace-pre-line lg:items-center px-8'>
				<h1 className='text-center lg:text-[2rem]  md:text-[1.5rem] text-[1.1rem]   text-left font-bold bg-white'>
					About Us - We are fostering interactive connections and elevating the
					retail experience through seamless, cutting-edge social commerce
					solutions
				</h1>
			</div>

			<img src={hero} alt={'hero'} className='' />

			<div className='flex flex-col space-y-2 items-start px-8 w-full h-auto justify-center items-ceter'>
				<h1 className='h1 text-2xl'>
					Our Core <span className='text-[#5262FF]'>values</span>
				</h1>
				<div className='grid lg:grid-cols-4 md:grid-cols-1 w-full lg:space-x-4 space-y-4'>
					<div className='flex flex-col'>
						<img src={value1} alt={''} className='w-14 h-14' />
						<div className='flex flex-col items-start'>
							<h1 className='font-bold text-xl'>Social impact</h1>
							<p className='text-left text-gray-400 text-sm'>
								we acknowledge our duty to make a positive impact on the world.
								We prioritize Social Impact in everything we do, adhering to
								ethical and sustainable practices, supporting communities, and
								promoting responsible consumption. By aligning our business
								goals with a greater purpose, we aspire to create a brighter
								future for all.
							</p>
						</div>
					</div>
					<div className='flex flex-col'>
						<img src={value1} alt={''} className='w-14 h-14' />
						<div className='flex flex-col items-start'>
							<h1 className='font-bold text-xl'>Customer centricity</h1>
							<p className='text-left text-gray-400 text-sm'>
								we are unwavering in our commitment to Customer-Centricity. We
								believe that understanding and meeting the needs of our
								customers is paramount. Through personalized interactions,
								tailored experiences, and attentive service, we strive to exceed
								expectations and leave a lasting impression.
							</p>
						</div>
					</div>

					<div className='flex flex-col'>
						<img src={value1} alt={''} className='w-14 h-14' />
						<div className='flex flex-col items-start'>
							<h1 className='font-bold text-xl'>Innovation</h1>
							<p className='text-left text-gray-400 text-sm'>
								We understand that the world of social commerce is constantly
								evolving, and we embrace this as an opportunity to lead the way.
								Through continuous improvement, creative thinking, and
								cutting-edge technologies, we aim to revolutionize the social
								commerce landscape and provide our customers with an unrivaled
								shopping experience
							</p>
						</div>
					</div>
					<div className='flex flex-col'>
						<img src={value1} alt={''} className='w-14 h-14' />
						<div className='flex flex-col items-start'>
							<h1 className='font-bold text-xl'>Transparency</h1>
							<p className='text-left text-gray-400 text-sm'>
								Transparency is the bedrock of our relationships with customers,
								partners, and employees alike. We believe in open and honest
								communication, valuing trust and credibility above all else. By
								being transparent in our practices, policies, and
								decision-making, we foster an environment of mutual respect and
								collaboration
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Frame1;
