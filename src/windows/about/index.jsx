import React, { useEffect } from 'react';
import Frame1 from './lib/fram1';
import Frame2 from './lib/frame2';
import Frame3 from './lib/frame3';
function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='md:pt-[6rem] pt-[3rem] space-y-44  h-auto'>
			<Frame1 />
			<Frame2 />
			<Frame3 />
		</div>
	);
}

export default About;
