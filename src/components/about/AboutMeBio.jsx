	import profileImage from "../../images/profile.jpeg";
	import { aboutMeData } from "../../data/aboutMeData";
	import { Github, Linkedin, Download } from "lucide-react";
	import { FaArrowDownLong } from "react-icons/fa6";
	import { useSelector } from "react-redux";
	const frontend = ["React", "JavaScript", "Tailwind CSS", "Redux", "HTML", "CSS"];
	const backend = ["Node.js", "Express.js", "MongoDB"];
	const tools = ["JWT", "bcrypt", "Socket.io", "Nodemailer", "Cloudinary", "Razorpay", "Git", "GitHub"];

	const AboutMeBio = () => {
		const theme = useSelector((state) => state.theme.mode);
	return (
		<div className="flex flex-col gap-12 mt-16 items-start">

		{/* PROFILE IMAGE */}
		<div className="flex lg:flex-row flex-col gap-20">

			<div className="w-full lg:w-1/3 flex justify-center">
				<img
				src={profileImage}
				alt="Aditya Dev"
				className="rounded-xl shadow-lg w-72 lg:w-80 border border-slate-700 hover:scale-120 transform duration-400"
				/>
			</div>

			{/* TEXT SECTION */}
			<div className="w-full lg:w-2/3 text-left">

				{/* BIO */}
				<div className="space-y-4 mb-8">
				{aboutMeData.map((bio) => (
					<p
					key={bio.id}
					className={` ${theme === 'dark' ? ' text-slate-400':' text-slate-600' } leading-relaxed text-lg`}
					>
					{bio.bio}
					</p>
				))}
				</div>
			</div>
		</div>
		<div>

			{/* QUICK INFO */}
			<div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 ${theme ==='dark' ? ' text-slate-400'  : ' text-slate-600'} `}>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Name:</span> Aditya Dev
			</p>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Role:</span> MERN Developer
			</p>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Location:</span> India
			</p>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Focus:</span> Full Stack
			</p>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Experience:</span> Projects
			</p>
			<p>
				<span className={`${theme === 'dark' ? 'text-white' : ' text-black'} font-semibold`}>Interest:</span> Building Full Stack Applications
			</p>
			</div>

			{/* SKILLS */}
			<div className="mb-10">
			<h3 className={`${theme === 'dark' ? 'text-white' : ' text-black'} text-2xl font-semibold  mb-4`}>
				Technologies I Work With
			</h3>

			<h3 className={`${theme === 'dark' ? 'text-white' : ' text-black'} text-xl mb-3`}>Frontend</h3>
				<div className="flex flex-wrap gap-2 mb-6">
				{frontend.map((tech, i) => (
					<span key={i} className={`px-3 py-1 ${theme == 'dark' ? 'bg-slate-800 text-slate-300' : ' bg-slate-300 text-slate-800' } rounded-md text-sm `}>
					{tech}
					</span>
				))}
				</div>

				<h3 className={`${theme === 'dark' ? 'text-white' : ' text-black'} text-xl mb-3`}>Backend</h3>
				<div className="flex flex-wrap gap-2 mb-6">
				{backend.map((tech, i) => (
					<span key={i} className={`px-3 py-1 ${theme == 'dark' ? 'bg-slate-800 text-slate-300' : ' bg-slate-300 text-slate-800' } rounded-md text-sm `}>
					{tech}
					</span>
				))}
				</div>

				<h3 className={`${theme === 'dark' ? 'text-white' : ' text-black'} text-xl mb-3`}>Tools & Integrations</h3>
				<div className="flex flex-wrap gap-2">
				{tools.map((tech, i) => (
					<span key={i} className={`px-3 py-1 ${theme == 'dark' ? 'bg-slate-800 text-slate-300' : ' bg-slate-300 text-slate-800' } rounded-md text-sm `}>
					{tech}
					</span>
				))}
				</div>
			</div>

			{/* ACTION BUTTONS */}
			<div className="flex gap-4 flex-wrap">

			<a
				download="Aditya-Resume.pdf"
				href="../../../public/file/cv.pdfpban"
				target="_blank"
				rel="noreferrer"
				className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
			>
				<FaArrowDownLong />
				<span size={18}>Download Resume</span> 
				
			</a>

			<a
				href="https://github.com/adityadev000"
				target="_blank"
				rel="noreferrer"
				className={`flex items-center gap-2 px-6 py-3 border ${theme === 'dark' ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : ' border-slate-300 text-slate-600 hover:bg-slate-100' }  
				 rounded-lg  transition`}
			>
				<Github size={18} />
				GitHub
			</a>

			<a
				href="https://linkedin.com"
				target="_blank"
				rel="noreferrer"
				className={`flex items-center gap-2 px-6 py-3 border ${theme === 'dark' ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : ' border-slate-300 text-slate-600 hover:bg-slate-100'} rounded-lg transition`}
			>
				<Linkedin size={18} />
				LinkedIn
			</a>

			</div>

		</div>
		</div>
	);
	};

	export default AboutMeBio;