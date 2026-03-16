import { useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoLight from "../../images/logo-lightmode.png";
import logoDark from "../../images/logo-darkmode.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reusable/themeSlice";
import MobileMenu from "../reusable/MobileMenu";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sm:container sm:mx-auto"
      >
        <div className="flex justify-between items-center py-6 px-4 sm:px-0">

          {/* Logo */}
          <Link to="/">
            {theme === "dark" ? (
              <img src={logoDark} className="w-36" alt="logo" />
            ) : (
              <img src={logoLight} className="w-36" alt="logo" />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 items-center">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>

            <a
              href="mailto:adityadev1222004@gmail.com"
              className="bg-indigo-500 text-white px-5 py-2.5 rounded-md"
            >
              Hire Me
            </a>

            <button onClick={() => dispatch(toggleTheme())}>
              {theme === "dark" ? <FiMoon /> : <FiSun />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-4 sm:hidden">
            <button onClick={() => dispatch(toggleTheme())}>
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <button onClick={toggleMenu}>
              <FiMenu className="text-3xl" />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default AppHeader;