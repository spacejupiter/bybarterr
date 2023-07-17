import deliver from '../../assets/images/deliver.svg';
import Frame2 from './frame2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Frame3() {
	useEffect(() => {
		window.scrollTo(0, 0);
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className=' flex flex-col sm:max-md:justify-center '>
			<Frame2 />

			<div
				className=' flex flex-row  h-[20rem] lg:max-xl:h-[30rem] md:h-[40rem] xl:h-[38rem] lg:py-4 xl:py-4 
        w-[100vw] justify-center  md:justify-between px-14  bg-[#010532] 
        text-white '>
				<div className='flex   flex-col space-y-4 justify-center'>
					<h4
						className='lg:w-[20rem] xl:w-[34rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[50px] md:text-[40px]
           text-[6vw] lg:text-left text-center font-bold whitespace-pre-line
           '
						data-aos='fade-in'>
						{'Get your orders delivered anywhere instantly'}
					</h4>
					<Link to='/waitlist'>
						<button
							className='text-white font-bold rounded-lg bg-[#2931F8] 
          lg:w-[30vw] xl:w-[30vw] 2xl:w-[30vw] w-[80vw] md:w-[80vw] lg:py-8 xl:py-8 
          2xl:py-10 2xl:text-44 py-6'
							data-aos='fade-in'>
							{'Go to the App'}
						</button>
					</Link>
				</div>

				<img
					className=' lg:max-xl:h-[40rem] lg:max-xl:w-[50rem] xl:h-[50rem] xl:max-2xl:w-[55rem] md:h-[70vw] lg:block lg:-mt-[7rem] 
          hidden'
					src={deliver}
					alt=''
					data-aos='fade-up'
				/>
			</div>
		</div>
	);
}

export default Frame3;
