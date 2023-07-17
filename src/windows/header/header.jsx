import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	const [isToggled, setToggle] = useState(false);
	const [style, setStyle] = useState('bg-white');

	const toggle = () => {
		setToggle(!isToggled);
		if (style == 'bg-white') {
			setStyle('bg-green-500');
		} else {
			setStyle('bg-white');
		}
	};

	const shouldRenderDropdown = () => {
		if (isToggled) {
			return renderDropdown();
		}
	};

	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<div className='lg:px-[rem] xl:px-[6rem] px-8 lg:pt-4 py-6 lg:py-0  flex flex-row  bg-blue-700 text text-white top-0 border-b border-b-2 sm:border-b-0   fixed bg-blue-700 z-50 w-full py-4 lg:h-[8rem] '>
			<Link to='/'>
				<img className='lg:w-44 w-[28vw] lg:mt-4' src={logo} alt='' />
			</Link>

			<ul className=' lg:block hidden flex flex-row right-4 absolute  top-4 '>
				<div className='flex flex-row space-x-12 mt-4 md:mt-8'>
					<Link to='/product' className='mt-3'>
						Product
					</Link>
					<Link to='/faq' className='mt-3'>
						FaQ's
					</Link>

					<Link to='/support' className='mt-3'>
						Support
					</Link>
					<Link
						to='/waitlist'
						className='border p-4 border-white border-4 rounded-[40rem] '>
						Go to the app
					</Link>
				</div>
			</ul>
			<div
				className='lg:hidden flex flex-col space-y-[2px] absolute right-4 top-6'
				onClick={toggle}>
				<div className={'w-5 h-[2px] ' + style}></div>
				<div className={'w-5 h-[2px] bg-white ' + style}></div>
				<div className={'w-5 h-[2px] bg-white ' + style}></div>
			</div>
			{shouldRenderDropdown()}
		</div>
	);

	function renderDropdown() {
		return (
			<div
				className='lg:hidden absolute bg-blue-700 w-[85vw] mt-[12.1vw] md:mt-[9vw] md:pt-[14vw]  md:w-[90vw] z-50 flex justify-left border-t border-t-4 border-t-green-500 py-4 '
				data-aos='fade-down'
				data-aos-duration='500'>
				<ul className='flex flex-col space-y-4 ml-5 md:ml-[13vw]'>
					<Link onClick={toggle} to='/product' className=''>
						{'products'}
					</Link>
					<Link onClick={toggle} to='/faq' className=''>
						{' '}
						FaQ's
					</Link>
					<Link onClick={toggle} to='/support' className=''>
						{' '}
						Support
					</Link>
					<Link
						onClick={toggle}
						to='/waitlist'
						className='bg-white text-blue-700 px-[24vw]  md:px-[24vw] md:py-8  py-4 rounded-[40rem] font-bold -mt-6'>
						Go to the App
					</Link>
				</ul>
			</div>
		);
	}
}

export default Header;
