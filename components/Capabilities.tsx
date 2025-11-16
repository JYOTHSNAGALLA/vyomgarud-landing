'use client';
import { motion } from 'framer-motion';
import { Cpu, Satellite, Shield, Wifi } from 'lucide-react';

const capabilities = [
  {
    title: "AI-Driven Autonomy",
    desc: "Advanced onboard intelligence for navigation, obstacle avoidance, and mission execution.",
    icon: <Cpu size={42} />,
  },
  {
    title: "Secure Long-Range Connectivity",
    desc: "Global SIM, cloud-integrated telemetry, and ultra-reliable communication.",
    icon: <Wifi size={42} />,
  },
  {
    title: "Defense-Grade Durability",
    desc: "Designed to perform in extreme weather, rugged environments, and mission-critical operations.",
    icon: <Shield size={42} />,
  },
  {
    title: "Satellite Integration",
    desc: "Seamless GNSS, satellite uplink, and real-time remote command capabilities.",
    icon: <Satellite size={42} />,
  },
];

export default function Capabilities() {
  return (
    <section 
    id="capabilities"
    className="py-24 bg-gray-900 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        Core Capabilities
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition group cursor-pointer border border-gray-700 hover:border-orange-500"
          >
            <div className="text-orange-500 mb-4 group-hover:scale-110 transition">
              {cap.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
            <p className="text-gray-400">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
