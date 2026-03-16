    import { Link } from "react-router-dom";
    import { FiX } from "react-icons/fi";
    import { motion } from "framer-motion";

    const MobileMenu = ({ showMenu, toggleMenu }) => {
    if (!showMenu) return null;

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 backdrop-blur-xl bg-black/40 flex flex-col"
        >
        {/* Close button */}
        <div className="flex justify-end p-6">
            <button onClick={toggleMenu}>
            <FiX className="text-3xl text-white" />
            </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center flex-1 gap-10 text-3xl font-semibold text-white">

            <Link to="/projects" onClick={toggleMenu}>
            Projects
            </Link>

            <Link to="/about" onClick={toggleMenu}>
            About Me
            </Link>

            <Link to="/contact" onClick={toggleMenu}>
            Contact
            </Link>

            <a
            href="mailto:adityadev1222004@gmail.com"
            className="bg-indigo-500 px-8 py-3 rounded-xl"
            >
            Hire Me
            </a>

        </div>
        </motion.div>
    );
    };

    export default MobileMenu;