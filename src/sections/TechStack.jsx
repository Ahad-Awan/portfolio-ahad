import FallingText from "../components/FallingText";
import { LinearGradient } from "react-text-gradients";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TechStack = () => {
  const [fontSize, setFontSize] = useState("1.8rem");

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 640 ? "1.2rem" : "1.8rem");
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-[400px] sm:h-[500px] bg-[#1a191e] text-white max-w-7xl mx-auto mb-10 px-4 sm:px-0">
      <motion.h1
        className="mb-4 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
          My Tech Stack
        </LinearGradient>
      </motion.h1>

      <FallingText
        text="JavaScript TypeScript ReactJS NextJS Tailwind CSS HTML Git GitHub PostgreSQL MongoDB"
        backgroundColor="transparent"
        gravity={1}
        fontSize={fontSize}
        trigger="hover"
        mouseConstraintStiffness={0.2}
      />
    </div>
  );
};

export default TechStack;
