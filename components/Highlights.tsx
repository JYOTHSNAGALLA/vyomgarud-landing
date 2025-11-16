'use client';
import { motion } from 'framer-motion';

export default function Highlights() {
  return (
    <section 
    id="highlights"
    className="px-6 py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-14">
        Key Highlights
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        {/* Animated Counter 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl font-bold text-orange-500">99.9%</div>
          <p className="text-gray-300 mt-2">Operational Reliability</p>
        </motion.div>

        {/* Animated Counter 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-5xl font-bold text-orange-500">AI+</div>
          <p className="text-gray-300 mt-2">Next-Gen Autonomy</p>
        </motion.div>

        {/* Animated Counter 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-5xl font-bold text-orange-500">50+</div>
          <p className="text-gray-300 mt-2">Global Deployments</p>
        </motion.div>
      </div>
    </section>
  );
}
