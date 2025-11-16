  'use client';
  import { motion } from 'framer-motion';

  export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Stops page reload
      alert('Form submitted! (Placeholder - connect to a backend)');
      // Add form submission logic here (e.g., API call for extras)
    };

    return (
      <section id="contact" className="px-6 py-24 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(255, 123, 0, 0.2)' }}
          className="max-w-2xl mx-auto bg-black p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ready to Deploy Advanced UAV Solutions?
          </h2>

          <p className="text-gray-400 text-center mb-8 text-sm md:text-base">
            Reach out to our engineering team for demos, integrations, or enterprise partnerships.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                placeholder="you@company.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none"
                placeholder="How can we help you?"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg font-semibold transition shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    );
  }
  