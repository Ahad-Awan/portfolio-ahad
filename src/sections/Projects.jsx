import { useState, useEffect, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AUTO_SLIDE_INTERVAL = 2000;

const Projects = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const carouselSlides = myProjects.map((project, index) => ({
      key: uuidv4(),
      content: <ProjectCard project={project} />,
      onClick: () => setSlideIndex(index),
    }));
    setSlides(carouselSlides);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % myProjects.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + myProjects.length) % myProjects.length);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % myProjects.length);
  };

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="projects">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Projects
            </LinearGradient>
          </motion.h2>
        </div>

        <div className="relative w-full mt-24 mb-12 md:mt-32 md:mb-20 lg:mt-40 h-[400px] md:h-[500px] flex items-center justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              const swipe = info.offset.x;
              if (swipe > 50) prevSlide();
              else if (swipe < -50) nextSlide();
            }}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {slides.length > 0 && (
              <Carousel
                slides={slides}
                goToSlide={slideIndex}
                offsetRadius={1}
                showNavigation={false}
                animationConfig={{ tension: 120, friction: 18 }} // 👈 Smooth custom config
              />
            )}
          </motion.div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className="hidden md:flex absolute -left-10 lg:-left-16 text-white bg-[#1a1a1a80] p-2 rounded-full hover:bg-[#fc0865] transition z-50"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className="hidden md:flex absolute -right-10 lg:-right-16 text-white bg-[#1a1a1a80] p-2 rounded-full hover:bg-[#ff9720] transition z-50"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
