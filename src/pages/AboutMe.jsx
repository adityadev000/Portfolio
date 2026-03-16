import AboutMeBio from '../components/about/AboutMeBio';
import { motion } from 'framer-motion';

const About = () => {
	return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto px-6 lg:px-12"
			>
				<AboutMeBio />
			</motion.div>
	);
};

export default About;
