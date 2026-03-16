import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import UseScrollToTop from "./hooks/useScrollToTop";
import { useSelector } from "react-redux";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <AnimatePresence mode="wait">
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-800'}  transition-colors duration-300`}>
        <ScrollToTop />
        <AppHeader />

        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <AppFooter />
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;