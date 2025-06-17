import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import StarCanvas from "./components/StarField";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Education from "./sections/Education";
import TechStack from "./sections/TechStack";
import Loader from "./components/startLoader";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <TechStack />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
          <CursorGlow />
          <StarCanvas />
        </>
      )}
    </>
  );
}
