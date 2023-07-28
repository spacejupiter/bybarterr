import React, { useEffect, useState } from 'react';
import importedData from '../../data/faq-data';
import dropDown from '../../assets/images/arrow_drop_down.svg';

function Faq() {
	const [data, setData] = useState(importedData);
	console.log(data);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='flex flex-col px-8 pt-24 poppins  items-center space-y-4 pb-8'>
			<div className='flex flex-col w-full justify-center items-center'>
				<h1 className='font-bold text-[3rem]'>
					Frequently Asked <br />
					Questions (FAQ'S)
				</h1>
				<p className='text-gray-400 lg:text-center'>
					Got Questions? We've Got Answers! Check Out Our Frequently Asked
					<br />
					Questions.
				</p>
			</div>
			<div className='flex flex-col w-full items-center justify-center bg-gray-100'>
				<div className='w-full flex flex-col items-start justify-center  py-4 px-4 rounded-xl'>
					<div className='flex flex-row '>
						<h1 className='text-[1.5rem] '>
							Frequently Asked Questions(FAQ's)
						</h1>
						<img src={dropDown} alt={''} className='ml-auto' />
					</div>

					<div className='flex flex-col space-y-4  items-start text-left'>
						{data.map((element) => {
							return (
								<Box
									isOpen={false}
									answer={element.answer}
									question={element.question}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

function Box({ isOpen, setOpen, question, answer }) {
	return (
		<div className='flex flex-row w-full '>
			{isOpen === true ? (
				<div className='flex flex-row w-full '>
					<p className='text-gray-400'>{question}</p>
				</div>
			) : (
				<div>
					<p className='text-black font-bold'>{question}</p>
					<p className='text-gray-400'>{answer}</p>
				</div>
			)}
			<img
				onClick={() => {
					setOpen((openState) => !openState);
				}}
				src={dropDown}
				alt={''}
				className='mr-auto'
			/>
		</div>
	);
}

export default Faq;
