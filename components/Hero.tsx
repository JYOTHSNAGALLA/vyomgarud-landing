'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home.jpg')",
          filter: "brightness(40%)",  // 🔥 makes it faded + darker
        }}
      />

      {/* Optional soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Redefining <span className="text-orange-500">Aerial Intelligence</span>
          for the Next Generation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mt-6"
        >
          Military-grade UAV systems engineered with precision, autonomy,
          and real-time intelligence to operate in any environment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex justify-center gap-6"
        >
          {/* <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-lg font-semibold transition">
            Explore Solutions
          </button>

          <button className="px-6 py-3 border border-gray-400 hover:border-white hover:text-white rounded-lg text-lg transition">
            Contact Us
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
