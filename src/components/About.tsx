
export const About = () => {
  return (
    <section id="about" className="py-20 bg-tech-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a passionate software engineer and ethical hacker, dedicated to building secure and efficient solutions. 
            With expertise in both development and security, I bring a unique perspective to every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-tech-black rounded-lg border border-tech-red/20">
              <h3 className="text-xl font-semibold mb-4 text-tech-red">Software Engineering</h3>
              <p className="text-gray-300">
                Specialized in full-stack development with expertise in Python, Java, React, and Flutter. 
                Building scalable and user-friendly applications is my forte.
              </p>
            </div>
            <div className="p-6 bg-tech-black rounded-lg border border-tech-red/20">
              <h3 className="text-xl font-semibold mb-4 text-tech-red">Ethical Hacking</h3>
              <p className="text-gray-300">
                Proficient in penetration testing and security assessments. 
                Committed to helping organizations strengthen their security posture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
