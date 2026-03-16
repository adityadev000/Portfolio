    import { useSelector } from "react-redux";
    import { techStackData } from "../../data/techStackData";
    import { motion } from "framer-motion";

    const TechStack = () => {
        const theme = useSelector((state) => state.theme.mode);
    return (
        <section className="w-full py-24 px-6 lg:px-16">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
            <div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
                <span className={`${theme === 'dark' ? ' text-white' : ' text-gray-800' }`}>Me and</span> <span className="text-indigo-400">My Tech Stack</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
                I specialize in building full-stack web applications using the MERN
                ecosystem. My focus is on writing clean, scalable code and creating
                seamless user experiences.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
                I enjoy solving real-world problems with modern technologies,
                developing performant APIs, and designing responsive interfaces.
            </p>

            <p className="text-slate-400 leading-relaxed">
                My toolkit continues to evolve as I explore new frameworks,
                backend systems, and cloud deployment technologies.
            </p>

            </div>


            {/* RIGHT ICON GRID */}
            <div className="relative">

            {/* background circle */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[420px] h-[420px] bg-slate-800 rounded-full opacity-40 blur-2xl"></div>
            </div>

            <div className="relative grid grid-cols-4 gap-5 sm:gap-10 justify-items-center">

                {techStackData.map((tech, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.15 }}
                    className={` p-1 sm:p-4 rounded-xl ${theme === 'dark' ? ' bg-slate-900' : 'bg-white '}  shadow-lg hover:shadow-indigo-500/20 transition`}
                >
                    <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                    />
                </motion.div>
                ))}

            </div>

            </div>

        </div>

        </section>
    );
    };

    export default TechStack;