import { useEffect } from 'react';
import buy from '../../assets/images/buy.svg';
import security from '../../assets/images/security.svg';
import swap from '../../assets/images/swap.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Frame2() {
	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className='w-full xl:h-[40rem] lg:max-xl:h-[40rem] h-[60rem] lg:py-0 py-4 flex lg:flex-row flex-col px-4 md:px-8 lg:space-x-4 xl:space-x-8 2xl:space-x-12 lg:space-y-0 space-y-4 md:max-lg:space-y-8 md:max-lg:h-[50rem] justify-center text-[#010532]'>
			<div
				className='w-full lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'
				data-aos='fade-up'>
				<div className='p-8 bg-[#2931F8] w-auto text-center justify-center w-14 rounded-[100%]  flex items-center'>
					<img src={buy} className='w-14' alt='' data-aos='zoom-in' />
				</div>

				<div className='text-center'>
					<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
						Sell fast
					</p>
					<p className='whitespace-pre-line 2xl:text-[20px] xl:text-[15px]'>
						We connect buyers with sellers, ensuring trustworthy transactions
						and providing access to a wide range of high-quality products.
					</p>
				</div>
			</div>

			<div
				className='w-full lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'
				data-aos='fade-up'>
				<div className='p-8 bg-[#2931F8] w-auto text-center justify-center w-14 rounded-[100%]  flex items-center'>
					<img src={security} className='w-14' alt='' data-aos='zoom-in' />
				</div>

				<div className='text-center'>
					<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
						Escrow
					</p>
					<p className='whitespace-pre-line 2xl:text-[20px] xl:text-[15px]'>
						We facilitate valuable exchanges, ensuring the fair transfer of
						funds and goods, giving you peace of mind throughout the process
					</p>
				</div>
			</div>

			<div
				className='w-full lg:w-[21rem] md:max-lg:w-[50vw] md:max-lg:ml-[12vw] justify-center flex flex-col items-center space-y-4'
				data-aos='fade-up'>
				<div className='p-8 bg-[#2931F8] w-auto text-center justify-center w-14 rounded-[100%]  flex items-center'>
					<img src={swap} className='w-14' alt='' data-aos='zoom-in' />
				</div>

				<div className='text-center'>
					<p className='text-xl font-bold 2xl:text-[30px] xl:text-[20px]'>
						Swap
					</p>
					<p className='whitespace-pre-line 2xl:text-[20px] xl:text-[15px]'>
						We facilitate valuable sales by connecting buyers and sellers,
						ensuring fair exchanges of equivalent items to meet their needs
					</p>
				</div>
			</div>
		</div>
	);
}

export default Frame2;
