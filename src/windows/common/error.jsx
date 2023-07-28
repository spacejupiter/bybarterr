function Error() {
	return (
		<div className='bg-white h-[100vh] pt-[10rem] flex text-black  justify-center'>
			<div className='flex flex-col space-y-5 justify-center'>
				<h4 className=' lg:text-[3rem] font-bold'>
					uh oh ! It seems you've missed your way?
				</h4>
				<h4 className=' lg:text-[7rem] font bold text-center'>404 Error!</h4>
			</div>
		</div>
	);
}

export default Error;
