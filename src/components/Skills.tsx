
import React from 'react';
import { 
  Code, 
  FileCode, 
  Python, 
  Java, 
  React as ReactIcon, 
  FileCode2 
} from 'lucide-react';

const skills = [
  { name: "Python", level: "Advanced", category: "Language", icon: Python },
  { name: "Flask", level: "Advanced", category: "Framework", icon: FileCode },
  { name: "C", level: "Intermediate", category: "Language", icon: Code },
  { name: "Java", level: "Advanced", category: "Language", icon: Java },
  { name: "React", level: "Advanced", category: "Framework", icon: ReactIcon },
  { name: "Flutter", level: "Intermediate", category: "Framework", icon: FileCode2 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-tech-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="p-6 bg-tech-gray rounded-lg hover:border-tech-red border border-transparent transition-colors duration-300 flex flex-col items-center"
              >
                <SkillIcon 
                  className="mb-4 text-tech-red" 
                  size={48} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-tech-red mb-2">{skill.level}</p>
                <p className="text-gray-400">{skill.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
