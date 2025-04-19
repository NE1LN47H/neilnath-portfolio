
export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-tech-gray text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto bg-tech-black p-8 rounded-lg border border-tech-red/20">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-tech-gray border border-gray-700 rounded-md p-3 focus:border-tech-red outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-tech-gray border border-gray-700 rounded-md p-3 focus:border-tech-red outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-tech-gray border border-gray-700 rounded-md p-3 focus:border-tech-red outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-tech-red text-white py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
