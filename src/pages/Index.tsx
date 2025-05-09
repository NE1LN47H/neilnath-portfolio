
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-tech-black">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
