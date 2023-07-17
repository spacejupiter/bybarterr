import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	useEffect(() => {
		Aos.init({});
	}, []);
	return (
		<div className='flex  md:flex-row flex-col lg:px-24 py-12 h-[40vh] md:space-x-[2rem] lg:space-x-[4rem] xl:space-x-[8rem] space-y-4 md:space-y-0 text-[#010532] px-8  text md:w-full '>
			<div className='flex flex-col mt-4 ' data-aos='fade-in'>
				<p
					className='whitespace-pre-line 
            font-bold lg:text-[2rem] text-[2rem] md:text-[0.5rem'>
					{'Swap securely \n with byBarter'}
				</p>
			</div>

			<div
				className='flex flex-row space-x-8 xl:space-x-8 lg:space-x-6 '
				data-aos='fade-up'>
				<div className='flex flex-col'>
					<ul className='flex flex-col space-y-2'>
						<li className='font-bold'>Company</li>
						<li>
							<Link to='/product'>Product</Link>
						</li>
						<Link to='/'>About us</Link>
						<Link to='/faq'>FAQ's</Link>
					</ul>
				</div>

				<div className='flex flex-col' data-aos='fade-up'>
					<ul className='flex flex-col space-y-2'>
						<Link to='/support'>Get in touch</Link>
						<li>Email</li>
						<li>info@bybarter.com</li>
					</ul>
				</div>
			</div>
			<div>
				<button
					className=' px-[6rem] mb-8 py-[1rem] border lg:px-[2rem] lg:py-[1.5rem] xl:px-[5rem] xl:py-[1.5rem] 
      rounded-3xl  text-center'>
					{' '}
					Get on All stores{' '}
				</button>
			</div>
		</div>
	);
}

export default Footer;
