
import React, { useState } from 'react';
import { 
  Code, 
  FileCode, 
  Cpu, 
  Coffee,
  Atom, 
  Smartphone 
} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", level: "Advanced", category: "Language", icon: Code },
  { name: "Flask", level: "Advanced", category: "Framework", icon: FileCode },
  { name: "C", level: "Intermediate", category: "Language", icon: Cpu },
  { name: "Java", level: "Advanced", category: "Language", icon: Coffee },
  { name: "React", level: "Advanced", category: "Framework", icon: Atom },
  { name: "Flutter", level: "Intermediate", category: "Framework", icon: Smartphone },
];

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  return (
    <section id="skills" className="py-20 bg-tech-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px rgba(234, 56, 76, 0.2)' 
                }}
                onHoverStart={() => setActiveSkill(skill.name)}
                onHoverEnd={() => setActiveSkill(null)}
                className={`p-6 bg-tech-gray rounded-lg border ${
                  activeSkill === skill.name ? 'border-tech-red' : 'border-transparent'
                } transition-all duration-300 flex flex-col items-center cursor-pointer`}
              >
                <motion.div
                  animate={{ 
                    rotateY: activeSkill === skill.name ? 360 : 0 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <SkillIcon 
                    className="mb-4 text-tech-red" 
                    size={48} 
                    strokeWidth={1.5} 
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-tech-red mb-2">{skill.level}</p>
                <p className="text-gray-400">{skill.category}</p>
                
                {activeSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-sm text-center text-gray-300"
                  >
                    <p>Click to see projects</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
