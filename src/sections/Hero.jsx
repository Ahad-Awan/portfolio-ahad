import { LinearGradient } from "react-text-gradients";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import MouseScroll from "../components/MouseScroll";
import { socialLinks } from "../constants/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [waveTrigger, setWaveTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveTrigger(true);
      setTimeout(() => setWaveTrigger(false), 1000);
    }, 4000); //Wave every 4 seconds.

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative items-center justify-center px-4"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col c-space gap-7 items-center">
        <h2 className="md:text-5xl sm:text-4xl text-2xl font-medium text-white text-center">
          Hi, I am{" "}
          <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
            Muhammad Ahad
          </LinearGradient>
        </h2>

        <h2
          className="text-center text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black
          !leading-normal relative w-[20ch] overflow-hidden whitespace-nowrap
          animate-typewriter border-r-4 border-white "
        >
          Frontend Developer
        </h2>

        <p className="max-w-5xl text-center justify-center text-white xl:text-xl md:text-lg sm:text-sm text-md">
          I&apos;m a passionate Frontend Developer specializing in building
          modern, responsive, and user friendly web interfaces using JavaScript,
          TypeScript and React. I focus on writing clean code, creating smooth
          user experiences, and continuously improving my skills to deliver high
          quality web applications.
        </p>
      </div>

      {/* Resume Download Button + Social Icons */}
      <div className="flex flex-col items-center gap-6 mt-6">
        <a
          href="/Ahad-Resume.pdf"
          download
          className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>

        <motion.div
          className="flex flex-row gap-4 justify-center max-w-7xl mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={
                waveTrigger
                  ? {
                      y: [0, -10, 0],
                      transition: {
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                    }
                  : {}
              }
            >
              <SocialIcon className="heroIcon" url={link.url} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5">
        <MouseScroll />
      </div>
    </section>
  );
};

export default Hero;
