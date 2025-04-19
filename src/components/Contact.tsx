
import { Instagram, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-tech-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Connect With Me</h2>
        <div className="flex justify-center gap-8">
          <a 
            href="https://www.instagram.com/neilna7h" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-tech-red transition-colors duration-300"
          >
            <Instagram size={32} />
            <span className="text-lg">Instagram</span>
          </a>
          <a 
            href="https://github.com/NE1LN47H" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-tech-red transition-colors duration-300"
          >
            <Github size={32} />
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
