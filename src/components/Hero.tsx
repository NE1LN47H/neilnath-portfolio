
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-tech-black text-white p-4">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-tech-red/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.2, 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <motion.span
            initial={{ color: "#FFFFFF" }}
            animate={{ color: ["#FFFFFF", "#ea384c", "#FFFFFF"] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Neilnath
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Developer
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            &
          </motion.span>{" "}
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Ethical Hacker
          </motion.span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="inline-block"
        >
          <motion.a 
            href="#about" 
            className="bg-tech-red text-white px-8 py-3 rounded-md hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(234, 56, 76, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <ArrowDown className="text-tech-red" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};
