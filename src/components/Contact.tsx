
import { Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const socialLinks = [
    { 
      name: "Instagram",
      url: "https://www.instagram.com/neilna7h", 
      icon: Instagram,
      color: "hover:text-pink-500" 
    },
    { 
      name: "GitHub",
      url: "https://github.com/NE1LN47H", 
      icon: Github,
      color: "hover:text-purple-400" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="py-20 bg-tech-gray text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Connect With Me
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {socialLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <motion.a 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-white ${link.color} transition-all duration-300 bg-tech-black p-4 rounded-lg hover:scale-110`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 10px 25px rgba(234, 56, 76, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={32} />
                <span className="text-lg">{link.name}</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
