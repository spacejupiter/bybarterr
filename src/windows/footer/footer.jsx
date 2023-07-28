import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import appstore from '../../assets/images/appstore.svg';
import googlestore from '../../assets/images/googlestore.svg';
import logo from '../../assets/images/logo.svg';

function Footer() {
	useEffect(() => {}, []);
	return (
		<div className='flex lg:grid-cols-4 grid grid-cols-1 gap-4 text-white poppins bg-[#1D242D] py-10 justify-center items-center px-8 '>
			<div className='flex flex-col space-y-2'>
				<div className='flex flex-row space-y-0 space-x-1'>
					<img src={logo} alt={''} className='w-12 h-12' />
					<h1 className='text lg:text-[2.3rem] text-[2rem] '>byBarterr</h1>
				</div>
				<div className='flex flex-col space-y-4 lg:mr-auto'>
					<div className='flex flex-row space-x-4 bg-[#333942] p-4 rounded-xl'>
						<img src={appstore} className='w-6 h-6' alt={''} />
						<p>Download on apple store</p>
					</div>
					<div className='flex flex-row space-x-4 bg-[#333942] p-4 rounded-xl'>
						<img src={googlestore} className='w-6 h-6' alt={''} />
						<p>Download on playstore </p>
					</div>
				</div>
			</div>

			<div className='flex flex-col space-y-2'>
				<h1 className='lg:text-3xl text-xl'>Company</h1>
				<div className='flex flex-col'>
					<Link to='/about' className='lg:text-lg text-md'>
						About
					</Link>
					<Link to='/faq' className='lg:text-lg text-md'>
						FaQ
					</Link>
					<Link to='/support' className='lg:text-lg text-md'>
						Contact us
					</Link>
				</div>
			</div>
			<div className='flex flex-col space-y-2'>
				<h1 className='lg:text-3xl text-xl'>Product</h1>
				<div className='flex flex-col'>
					<Link to='' className='lg:text-lg text-md'>
						Buy
					</Link>
					<Link to='' className='lg:text-lg text-md'>
						Sell
					</Link>
					<Link to='' className='lg:text-lg text-md'>
						Swap
					</Link>
				</div>
			</div>
			<div className='flex flex-col space-y-2'>
				<h1 className='lg:text-3xl text-xl'>Payment</h1>
				<div className='flex flex-col'>
					<Link to='' className='lg:text-lg text-md'>
						Mastercard
					</Link>
					<Link to='' className='lg:text-lg text-md'>
						Visa card
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
