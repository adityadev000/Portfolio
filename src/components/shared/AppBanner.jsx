import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import CursorFollower from '../CursorFollower';

const AppBanner = () => {
	const theme = useSelector((state) => state.theme.mode);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col justify-center items-center mx-auto mt-2  md:flex-row md:items-center md:mt-12 "
		>
			<div className=" will-change-contents flex flex-col md:items-start items-center md:w-1/2 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className={`font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left ${theme === 'dark' ? ' text-gray-200' : ' text-gray-800' }  uppercase`}
				>
					Hi, I'm Aditya
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className={`font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800' }`}
				>
					Full Stack MERN Developer
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Aditya-Resume.pdf"
						href="/cv.pdf"
						className= {`font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 
						sm:mb-0 text-lg border ${theme === 'dark' ? ' border-indigo-200 hover:text-white' : ' border-gray-200 hover:text-black' }   py-2.5 sm:py-3 shadow-lg rounded-lg 
						bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500  text-gray-500  duration-500`}
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>

			<div className=' hidden md:flex' >
				<CursorFollower/>
			</div>
		</motion.section>
	);
};

export default AppBanner;
