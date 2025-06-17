import { motion } from "framer-motion";

const textVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f]"
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      animate={{ opacity: 0, scale: 1.4, filter: "blur(10px)" }}
      transition={{ delay: 2, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#fc086530] to-transparent rounded-full blur-2xl scale-150" />

      <motion.h1
        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-[#fc0865] to-[#ff9720] bg-clip-text text-transparent text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Welcome to Ahad’s Portfolio
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
