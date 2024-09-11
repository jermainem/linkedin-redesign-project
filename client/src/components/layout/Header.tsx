import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header: React.FC = () => {
	return (
		<div>
			<div className='bg-primary'>
				<div className='container mx-auto'>
					<div className='flex justify-between'>
						<div className='header-left flex items-center gap-3'>
							<div className='logo'>
								<a className='flex' href='#'>
									<FontAwesomeIcon
										icon={["fab", "linkedin"]}
										className='w-[31px] h-auto'
										color='white'
									/>
								</a>
							</div>
							<div className='search flex relative'>
								<div className='search-icon'>
									<FontAwesomeIcon
										icon='magnifying-glass'
										color='white'
										className='absolute w-3.5 h-3.5 left-2.5 top-[9px]'
									/>
								</div>
								<input
									className='bg-lightPrimary text-white placeholder-white pl-8 py-1 rounded-md w-[450px]'
									type='search'
									placeholder='Search'
									name=''
									id='header-search-bar'
								/>
							</div>
						</div>
						<div className='header-right text-white'>
							<div className='menu flex items-center gap-x-4'>
								<div className='menu-item p-1.5'>
									<a
										className='flex items-center justify-center flex-col gap-1'
										href='#'>
										<svg
											className='w-4'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 448 512'>
											<path
												fill='currentColor'
												d='M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z'
											/>
										</svg>
										<span className='text-xs'>
											Notifications
										</span>
									</a>
								</div>
								<div className='menu-item p-1.5'>
									<a
										href='#'
										className='flex items-center justify-center flex-col gap-[0.21rem]'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											className='w-[20px]'>
											<path
												fill='currentColor'
												d='M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z'></path>
										</svg>
										<span className='text-xs flex items-center'>
											Work
											<svg
												className='w-3 h-2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 320 512'>
												<path
													fill='currentColor'
													d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z'
												/>
											</svg>
										</span>
									</a>
								</div>
								<div className='menu-item border-l-[1px] border-lightPrimary pl-4 p-1.5'>
									<a
										href='#'
										className='flex items-center justify-center flex-col gap-1'>
										<img
											src='https://media.licdn.com/dms/image/v2/C4E03AQEAlokPhxOHKg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516893204895?e=1731542400&v=beta&t=wheHh6mWHo7cZtQfhO7ByapbD8LwGCTTrRhuOqEEip0'
											alt=''
											className='profile w-5 h-5 rounded-full'
										/>
										<span className='text-xs flex items-center'>
											Jermaine
											<svg
												className='w-3 h-2'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 320 512'>
												<path
													fill='currentColor'
													d='M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z'
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom-nav py-2 border-b-[1.5px] border-[#f3f1f0]'>
				<div className='container mx-auto flex justify-between'>
					<div className='main-menu flex gap-8'>
						<a href='#' className='flex'>
							<div className='main-menu-item flex items-center gap-2 text-[#535353]'>
								<div className='icon'>
									<svg
										className='w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 576 512'>
										<path
											fill='currentColor'
											d='M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
										/>
									</svg>
								</div>
								<span className='text-xs font-semibold'>
									Home
								</span>
							</div>
						</a>
						<a className='flex' href='#'>
							<div className='main-menu-item flex items-center gap-2 text-[#535353]'>
								<div className='icon'>
									<svg
										className='w-3'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'>
										<path
											fill='currentColor'
											d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z'
										/>
									</svg>
								</div>
								<span className='text-xs font-semibold'>
									My Network
								</span>
							</div>
						</a>
						<a className='flex' href='#'>
							<div className='main-menu-item flex items-center gap-2 text-[#535353]'>
								<div className='icon'>
									<svg
										className='w-3'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 384 512'>
										<path
											fill='currentColor'
											d='M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z'
										/>
									</svg>
								</div>
								<span className='text-xs font-semibold'>
									Job
								</span>
							</div>
						</a>
						<a className='flex' href='#'>
							<div className='main-menu-item flex items-center gap-2 text-[#535353]'>
								<div className='icon'>
									<svg
										className='w-5'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 512'>
										<path
											fill='currentColor'
											d='M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z'
										/>
									</svg>
								</div>
								<span className='text-xs font-semibold'>
									Messaging
								</span>
							</div>
						</a>
					</div>
					<div className='call-out'>
						<a
							href='#'
							className='text-[#cd903c] text-xs font-bold'>
							Try Premium for free
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
