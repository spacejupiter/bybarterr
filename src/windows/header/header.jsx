import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Header() {
	const [isToggled, setToggle] = useState(false);

	const toggle = () => {
		setToggle(!isToggled);
	};

	const slideAnimation = useSpring({
		transform: isToggled ? 'translateX(0)' : 'translateX(-100%)',
	});

	return (
		<div>
			<animated.div
				style={slideAnimation}
				className='fixed z-50 lg:hidden bg-black lg:px-8 w-full poppins top-0 text-black h-full z-50 items-center text-center justify-center flex flex-col'>
				<div
					onClick={toggle}
					className='absolute fixed top-14 right-8 text-white'>
					x
				</div>
				<ul className='flex flex-col space-y-4'>
					<Link onClick={toggle} to='/about' className='text-white'>
						About us
					</Link>
					<Link onClick={toggle} to='/faq' className='text-white'>
						FaQ'ss
					</Link>
					<Link onClick={toggle} to='/support' className='text-white'>
						Support
					</Link>
					<Link
						onClick={toggle}
						to='/waitlist'
						className='text-black px-[24vw] md:px-[24vw] md:py-8 py-4 rounded-[40rem] font-bold'></Link>
				</ul>
			</animated.div>

			<div className='lg:px-8 border-b md:border-b-0 items-center z-50 md:space-y-0 space-y-4 flex flex-row bg-white text-black poppins text-black top-0 h-[5rem] px-8 fixed z-30 w-full lg:h-[5rem]'>
				<Link to='/' className='flex flex-row space-x-2 lg:space-y-1'>
					<img className='lg:w-8 w-8' src={logo} alt='' />
					<p className='text-black font-bold ns text md:text-[1.5rem] text-[1.1rem]'>
						byBarterr
					</p>
				</Link>

				<ul className='lg:block hidden flex flex-row ml-auto'>
					<div className='flex flex-row space-x-4'>
						<Link to='/about' className='mt-3'>
							About us
						</Link>
						<Link to='/faq' className='mt-3'>
							FaQ's
						</Link>
						<Link to='/support' className='mt-3'>
							Contact us
						</Link>
					</div>
				</ul>
				<div
					className='lg:hidden flex hamburger flex-col space-y-[2px] absolute right-6 top-4'
					onClick={toggle}>
					<div
						className={`w-5 h-[2px] bg-black ${
							isToggled ? 'transform rotate-45 translate-y-1' : ''
						}`}></div>
					<div
						className={`w-5 h-[2px] bg-black ${
							isToggled ? 'opacity-0' : ''
						}`}></div>
					<div
						className={`w-5 h-[2px] bg-black ${
							isToggled ? 'transform -rotate-45 -translate-y-1' : ''
						}`}></div>
				</div>
			</div>
		</div>
	);
}

export default Header;
