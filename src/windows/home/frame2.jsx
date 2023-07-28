import React from 'react';
import { useState } from 'react';
import gamingImg from '../../assets/images/gaming.svg';
import books from '../../assets/images/books.svg';
import clothingImg from '../../assets/images/clothings.svg';
import shoes from '../../assets/images/shoes.svg';
import laptop from '../../assets/images/desktop.svg';
import mobileImg from '../../assets/images/mobilephone.svg';
import swapImg from '../../assets/images/swapdeals.svg';
import electronics from '../../assets/images/electronics.svg';
import image1 from '../../assets/images/image.svg';
import { Link } from 'react-router-dom';

function Frame2() {
	const [images, setImages] = useState([
		{
			url: gamingImg,
			tag: 'Gaming',
			caption: 'Find all your gaming needs',
		},
		{
			url: books,
			tag: 'Books',
			caption: 'swap and sell books now',
		},
		{
			url: clothingImg,
			tag: 'Clothing',
			caption: 'Find all you clothings needs',
		},
		{
			url: shoes,
			tag: 'Shoes',
			caption: 'Buy all kind of shoes on the app',
		},
		{
			url: laptop,
			tag: 'Laptop',
			caption: 'Find all varities of laptops',
		},
		{
			url: mobileImg,
			tag: 'Mobile Phones',
			caption: 'Find varities of mobile phones',
		},
		{
			url: swapImg,
			tag: 'Swap Deals',
			caption: 'swap anything for anything ',
		},
		{
			url: electronics,
			tag: 'Electronics',
			caption: 'Find all electronical equipments',
		},
	]);
	return (
		<div className='flex flex-col px-8 '>
			<div className='grid grid-cols-1 xl:grid-cols-4 gap-4  p-4 flex flex-col justify-center items-center  poppins py-24 bg-[#F9F9F9]'>
				{images.map((element) => {
					return (
						<UtilityCrumb
							url={element.url}
							tag={element.tag}
							caption={element.caption}
						/>
					);
				})}
			</div>
			<div className='flex lg:flex-row flex-col space-y-8 lg:space-y-0 w-full bg-[#1D242D] rounded-lg lg:h-auto  '>
				<img
					src={image1}
					alt=''
					className='rounded-lg lg:max-w-[100vw] lg:max-h-[100vh] cover  '
				/>
				<div className=' text-white justify-center text-left flex  flex-col lg:items-center px-4 w-full py-4  poppins'>
					<div className='flex flex-col space-y-4'>
						<h1 className='lg:text-[3rem] text-[1.4rem]'>
							Explore a generous 25%
							<br /> discount on your first trade <br />
						</h1>
						<Link
							to='/waitlist'
							className='bg-white text-center w-full lg:w-44 py-4 px-8 text-black mr-auto rounded-lg'>
							{' '}
							Get started
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

const UtilityCrumb = ({ url, tag, caption }) => {
	return (
		<div className='flex flex-row shadow bg-white shadow-xl shadow-offset-x-offset-y-blur-radius-spread-radius-color" rounded-lg px-4 p-4 poppins space-x-2'>
			<img src={url} alt={''} className='' />
			<div className='flex flex-col'>
				<h1 className='text-lg'>{tag}</h1>
				<p className='text-gray-400 text-sm'>{caption}</p>
			</div>
		</div>
	);
};
export default Frame2;
