import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Product() {
	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({});
	}, []);

	return (
		<div className='support flex flex-col  h-[100vh] bg-blue-700 pt-[15vh] text-white justify-center px-[6vw] pt-[56vw] overflow-x-hidden '>
			<div className='flex flex-col space-y-44 py-[8vw]'>
				<Services
					styles='space-y-[28vh]'
					caption1='ESCROW'
					info1='Attain transaction security with our escrow services '
					caption2='SWAP'
					info2='Attain transaction security with our escrow services'
				/>
				<Services
					styles='space-y-[8vh]'
					caption1='SOCIALS'
					info1='Embrace the  the social side of commerce'
					caption2='SECURITY'
					info2='your goods are safe with us'
				/>
				<Services
					caption1='PAYMENT'
					info1='Attain transaction security with our escrow services '
					caption2='DELIVERY'
					info2='Attain transaction security with our escrow services'
				/>
				<Services
					caption1='ESCROW'
					info1='Attain transaction security with our escrow services '
					caption2='DELIVERY'
					info2='Attain transaction security with our escrow services'
				/>
			</div>
		</div>
	);
}

function Services(props) {
	return (
		<div className={'flex flex-row space-x-[30vw]  ' + props.styles}>
			<div className={'flex flex-col '} data-aos='fade-right'>
				<h1 className='font-bold lg:text-[6vw] text-[4vw] '>
					{props.caption1}
				</h1>
				<p className=' font-bold'>{props.info1}</p>
			</div>

			<div className={'flex flex-col '} data-aos='fade-left'>
				<h1 className='font-bold lg:text-[6vw] text-[4vw] '>
					{props.caption2}
				</h1>
				<p className='font-bold'>{props.info2}</p>
			</div>
		</div>
	);
}
export default Product;
