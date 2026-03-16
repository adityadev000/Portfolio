	import AppBanner from "../components/shared/AppBanner";
	import ProjectsGrid from "../components/projects/ProjectsGrid";
	import TechStack from '../components/Skills/TechStack';
	import bgImage from "../images/background.jpg";
	import { useSelector } from "react-redux";

	const Home = () => {
		const theme = useSelector((state) => state.theme.mode);
	return (
		<div>

		{/* HERO SECTION */}
		<div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[300px] md:h-[700px] overflow-hidden">

			{/* BACKGROUND IMAGE */}
			<img
				src={bgImage}
				alt="hero background"
				className={`absolute  w-full h-full object-fill object-top ${theme === 'dark' ? ' block': ' hidden' }`}
			/>

			{/* DARK OVERLAY */}
			{theme === "dark" && (
			<div className="absolute inset-0 bg-black/60"></div>
			)}

			{/* CONTENT */}
			<div className="relative z-10 container mx-auto lg:px-8 h-full flex items-center">
			<AppBanner />
			</div>

		</div>

		{/* OTHER SECTIONS */}
		<div className="container mx-auto">
			<ProjectsGrid />
			<TechStack/>
		</div>

		</div>
	);
	};

	export default Home;