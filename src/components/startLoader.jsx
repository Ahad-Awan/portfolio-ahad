import { motion } from "framer-motion";

const stripeVariants = {
  hidden: { y: "-100%" },
  visible: { y: "0%" },
};

const Loader = () => {
  const stripes = Array.from({ length: 6 });

  return (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center items-center bg-[#0f0f0f]"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex w-full h-full absolute inset-0">
        {stripes.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-b from-[#fc0865] to-[#ff9720]"
            variants={stripeVariants}
            transition={{
              duration: 1.4,
              ease: [0.65, 0, 0.35, 1],
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <motion.h1
        className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: stripes.length * 0.17 + 0.8, duration: 1.8 }}
      >
        Welcome to Ahad’s Portfolio
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
