	import { motion, AnimatePresence } from "framer-motion";
	import { useState, useRef, useEffect } from "react";
	import { ExternalLink, Github } from "lucide-react";

	const ProjectSingle = ({ title, category, image, github, demo, tech ,index}) => {
	const [current, setCurrent] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const touchStartX = useRef(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % image.length);
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev - 1 + image.length) % image.length);
	};

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		const touchEndX = e.changedTouches[0].clientX;

		if (touchStartX.current - touchEndX > 50) nextSlide();
		if (touchEndX - touchStartX.current > 50) prevSlide();
	};

	useEffect(() => {
		if (isPaused) return;
		console.log(demo);
		const interval = setInterval(() => {
		nextSlide();
		}, 4000);

		return () => clearInterval(interval);
	}, [image.length, isPaused]);

	return (
		<div className={`w-full max-w-[920px] mx-auto ${index%2 == 0 ? 'xl:mr-[20%] lg:mr-[10%]' : 'xl:ml-[20%] lg:ml-[10%]'}  mt-12 px-4 sm:px-6`}>
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
		>
			{/* IMAGE + HOVER AREA */}
			<div
			className="relative w-full max-w-[920px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden mx-auto"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onMouseEnter={() => {
				setIsHovered(true);
				setIsPaused(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				setIsPaused(false);
			}}
			>
			{/* IMAGE */}
			<AnimatePresence mode="wait">
				<motion.img
				key={current}
				src={image[current]}
				alt={title}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="absolute inset-0 w-full h-full object-fill"
				/>
			</AnimatePresence>

			{/* GRADIENT TINT */}
			<motion.div
				initial={{ x: "-100%" }}
				animate={{ x: isHovered ? "0%" : "-100%" }}
				transition={{ duration: 0.5 }}
				className="absolute w-full inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/85 to-purple-900/80 z-20 pointer-events-auto"
			/>

			{/* CONTENT OVERLAY */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{
				opacity: isHovered ? 1 : 0,
				y: isHovered ? 0 : 40,
				}}
				transition={{ duration: 0.35 }}
				className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-6 sm:p-10 text-white"
			>
				{/* CATEGORY */}
				<span className="text-indigo-200 mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider">
				{category}
				</span>

				{/* TITLE */}
				<h2 className="text-lg sm:text-4xl md:text-5xl font-bold mb-5 text-indigo-50">{title}</h2>

				{/* TECH STACK */}
				<div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-6">
				{tech?.map((item, index) => (
					<span
					key={index}
					className="px-1 sm:px-3 py-1 text-xs sm:text-sm bg-indigo-900/40 text-indigo-100 backdrop-blur rounded-md border border-indigo-400/20"
					>
					{item}
					</span>
				))}
				</div>

				{/* BUTTONS */}
				<div className="flex gap-4">
				<a
				href={demo}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-1 sm:gap-2 sm:px-5 px-1 sm:py-2 rounded-lg  text-xs sm:text-lg  font-medium bg-indigo-500 text-indigo-50 hover:bg-indigo-600 transition"
				>
				<ExternalLink size={16} />
				Live Demo
				</a>

				<a
					href={github}
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 px-5 py-2 rounded-lg border text-xs sm:text-lg border-indigo-300 text-indigo-200 hover:bg-indigo-900/40 transition"
				>
					<Github size={16} />
					GitHub
				</a>
				</div>
			</motion.div>

			{/* DOTS */}
			<div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-40">
				{image.map((_, i) => (
				<button
					key={i}
					onClick={() => setCurrent(i)}
					className={`h-2 rounded-full transition-all ${
					i === current
						? "w-6 bg-white"
						: "w-2 bg-white/40"
					}`}
				/>
				))}
			</div>
			</div>
		</motion.div>
		</div>
	);
	};

	export default ProjectSingle;