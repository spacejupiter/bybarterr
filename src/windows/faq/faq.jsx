import backarrow from '../../assets/images/back.svg';
import forwardarrow from '../../assets/images/forward.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import importedData from '../../data/faq-data';
function Faq() {
	//const [isToggled, setToggle] = useState(true);
	const [data, setData] = useState(importedData);

	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({});
	}, []);

	const toggle = (id) => {
		var updatedArray = [];
		var on = false;
		data.forEach((element) => {
			if (element.id === id) {
				on = !element.show;
				var x = element;
				x.show = !x.show;
				updatedArray.push(x);
			} else {
				var y = element;
				y.show = !on;
				updatedArray.push(y);
			}
		});
		setData(updatedArray);
	};

	return (
		<div className='flex flex-col justify-center bg-blue-700 h-[110vh] sm:h-[100vh]  lg:space-y-8 space-y-8 lg:pt-8 overflow-x-hidden overflow-y-scroll'>
			<div data-aos='fade-down justify-center px-8'>
				<h4 className='text-white lg:text-[4rem] text-[1.5rem] md:text-[5vw] text-center font-bold'>
					We'd satisfy your curiosity
				</h4>
				<h3 className='text-center text-white text-[0.9rem] lg:text-[1.5rem]'>
					Get to know more about us and our products
				</h3>
			</div>

			<div className='flex-col flex space-y-6 lg:space-y-6 mb-8'>
				{data.map((data) => {
					return (
						<Questions
							toggleid={data.id}
							key={data.id}
							answer={data.answer}
							question={data.question}
							show={data.show}
							duration={data.duration}
							entries={data.question}
						/>
					);
				})}
			</div>
		</div>
	);

	function Box(props) {
		return (
			<div className='flex flex-row mx-4 lg:mx-40'>
				<span
					value={true}
					onClick={() => {
						toggle(props.toggleid);
					}}
					className='lg:h-12 lg:w-14 h-8 w-8 justify-center mt-8 border border-white border-[3px] rounded-[100%] flex justify-center p-4 hover:cursor'>
					<img
						src={forwardarrow}
						alt=''
						className='w-14  object-cover lg:w-8'
					/>
				</span>

				<div
					data-aos='fade-left'
					data-aos-duration='3000'
					className='bg-blue-500  flex flex-col mx-4  py-4 h-[55vw] md:h-[40vw] lg:h-[14vw] rounded-lg px-8'>
					<p className='text-white  font-bold md:text-[5vw] lg:text-[1.8vw]'>
						{props.question}
					</p>
					<p className='text-white text-[4vw] lg:text-[1.7vw]'>
						{' '}
						{props.answer}
					</p>
				</div>
			</div>
		);
	}

	function Questions(props) {
		return (
			<div className=' '>
				{props.show ? (
					<div
						data-aos='fade-left'
						data-aos-duration={props.duration}
						className='flex flex-row lg:px-[18rem] px-4 justify-center space-x-4'>
						<span
							value={true}
							onClick={() => {
								toggle(props.toggleid);
							}}
							className=' border border-white border-[3px] rounded-[100%] p-4 hover:cursor'>
							<img src={backarrow} alt='' className='w-8 lg:w-8' />
						</span>
						<span className='text-white w-[83vw]  text-center h-[3.5rem] p-4 lg:w-[48vw] xl:w-[40vw] md:h-[5rem]  lg:h-[4.5rem] lg:p-4 border border-white border-[3px] rounded-xl'>
							<p className='text-[2.8vw] lg:text-[1rem] justify-center font-bold'>
								{props.entries}
							</p>
						</span>
					</div>
				) : (
					<Box question={props.question} answer={props.answer} />
				)}
			</div>
		);
	}
}

export default Faq;
