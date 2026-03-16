import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse  lg:flex-row lg:gap-20 gap-10  py-6 px-6 lg:py-6  "
		>

			<ContactForm />
			<ContactDetails />
		</motion.div>
	);
};

export default Contact;
