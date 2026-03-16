	import { useRef } from "react";
	import emailjs from "@emailjs/browser";
	import FormInput from "../reusable/FormInput";

	const ContactForm = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
		import.meta.env.VITE_EMAILJS_SERVICE_ID,
		import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
		form.current,
		import.meta.env.VITE_EMAILJS_PUBLIC_KEY
		)
		.then(() => {
		alert("Message sent successfully 🚀");
		e.target.reset();
		})
		.catch((error) => {
		console.log(error);
		alert("Something went wrong");
		});
	};

	return (
		<div className="w-full lg:w-1/2">
		<div className="leading-loose">

			<form
			ref={form}
			onSubmit={sendEmail}
			className="max-w-xl bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left pb-5 px-5"
			>

			<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-4">
				Contact Form
			</p>

			<FormInput
				inputLabel="Full Name"
				labelFor="name"
				inputType="text"
				inputId="name"
				inputName="name"
				placeholderText="Your Name"
				ariaLabelName="Name"
			/>

			<FormInput
				inputLabel="Email"
				labelFor="email"
				inputType="email"
				inputId="email"
				inputName="email"
				placeholderText="Your email"
				ariaLabelName="Email"
			/>

			<FormInput
				inputLabel="Subject"
				labelFor="subject"
				inputType="text"
				inputId="subject"
				inputName="subject"
				placeholderText="Subject"
				ariaLabelName="Subject"
			/>

			<div className="mt-6">
				<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-2"
				htmlFor="message"
				>
				Message
				</label>

				<textarea
				className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
				id="message"
				name="message"
				rows="6"
				required
				/>
			</div>

			<div className="mt-6">
				<button
				type="submit"
				className="w-40 px-4 py-2.5 text-white font-medium bg-indigo-500 hover:bg-indigo-600 rounded-lg transition"
				>
				Send Message
				</button>
			</div>

			</form>

		</div>
		</div>
	);
	};

	export default ContactForm;