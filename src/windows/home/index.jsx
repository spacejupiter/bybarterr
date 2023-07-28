import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Frame1 from './frame1';
import Frame2 from './frame2';
import Frame3 from './frame3';
import Frame4 from './frame4';
import Frame5 from './frame5';
import Frame6 from './frame6';

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
		// Add smooth scrolling on mount
		scroll.scrollToTop({
			smooth: true,
			duration: 20, // Adjust the duration to control the speed of scrolling
		});
	}, []);

	return (
		<div className='text overflow-x-hidden overflow-y-scroll h-auto  pt-0 lg:pt-0 pb-8 w-full'>
			<div className='flex flex-col lg:space-y-32 space-y-4'>
				<Frame1 />
				<Frame2 />
				<Frame3 />
				<Frame4 />
				<Frame5 />
				<Frame6 />
			</div>
		</div>
	);
}

export default Home;
