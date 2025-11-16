'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
      id="about"
      className="section px-6 py-20 text-white bg-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Engineering the Future of <span className="text-orange-500">UAV Intelligence</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Inspired by the engineering precision of Raphe and the modern  
            connectivity-first approach of Onomondo, VyomGarud builds advanced  
            unmanned systems designed for defense, surveillance, and  
            industrial intelligence operations.
          </p>

          <p className="text-gray-400 text-lg">
            Our mission is to deliver reliable, secure, and autonomous  
            UAV platforms capable of adapting to the most demanding mission  
            profiles across global environments.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.img
          src="/btw.jpg"
          alt="UAV Drone"
          className="rounded-xl shadow-xl object-cover"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
