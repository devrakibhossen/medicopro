"use client";

import { ArrowUpRight, Book } from "lucide-react";
import { motion } from "framer-motion";
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];
// Reusable fade-up variant
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: easeOutExpo },
});

// Floating blob component
const Blob = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
    transition={{
      duration: 7,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 ">
      {/* Animated background blobs */}
      <Blob className="w-96 h-96 bg-[#cf4f22] -top-24 -right-24" delay={0} />
      <Blob className="w-72 h-72 bg-orange-300 bottom-0 -left-20" delay={2} />
      <Blob
        className="w-56 h-56 bg-[#cf4f22] top-1/2 left-1/2 -translate-x-1/2"
        delay={4}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.span
            {...fadeUp(0.1)}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-[#cf4f22] mb-6 border border-[#ededed] shadow-sm shadow-orange-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#cf4f22] mr-2 animate-pulse" />
            Healthcare for everyone
          </motion.span>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.22)}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white font-poppins max-w-4xl leading-tight"
          >
            AI assistant for
            <br />
            <motion.span
              className="text-[#cf4f22] inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: easeOutExpo }}
            >
              symptom understanding.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.46)}
            className="mt-6 text-gray-500 font-poppins max-w-xl leading-relaxed text-base md:text-lg"
          >
            Medicopro analyzes your symptoms, suggests the right tests, and
            recommends medicines — all in seconds. Expert health guidance is now
            just one message away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.58)}
            className="flex md:flex-row flex-col gap-3 mt-8"
          >
            {/* Blog Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex gap-2 bg-white items-center justify-center py-2.5 px-4 border border-gray-200 text-gray-700 rounded-full hover:border-gray-300 transition-all font-medium text-sm"
            >
              Read Our Blog
              <span className="bg-[#cf4f22] p-1 text-white rounded-full">
                <Book size={15} />
              </span>
            </motion.button>

            {/* Primary CTA */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(207,79,34,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex gap-2 items-center justify-center py-2.5 px-4 bg-[#cf4f22] text-white rounded-full hover:bg-[#b8431c] transition-all font-medium text-sm shadow-lg "
            >
              Try medicopro Free
              <span className="bg-black/80 p-1 rounded-full">
                <ArrowUpRight size={15} />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            {...fadeUp(0.7)}
            className="mt-10 flex md:flex-row flex-col items-center gap-3 text-sm text-gray-400"
          >
            <div className="flex -space-x-2">
              {[
                "bg-orange-200",
                "bg-rose-200",
                "bg-amber-200",
                "bg-orange-300",
              ].map((color, i) => (
                <motion.div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white ${color}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.72 + i * 0.07, duration: 0.4 }}
                />
              ))}
            </div>
            <p>
              Joined by{" "}
              <span className="text-gray-600 font-medium">1,000+</span> users
              this month
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
