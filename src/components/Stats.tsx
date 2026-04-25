"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Stethoscope, ShieldCheck, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Active Users",
    description:
      "Patients trust Medicopro daily for fast, reliable health insights.",
    color: "bg-white/10",
  },
  {
    icon: Stethoscope,
    value: 50,
    suffix: "+",
    label: "Diseases Covered",
    description:
      "From common colds to complex conditions — we've got you covered.",
    color: "bg-white/10",
  },
  {
    icon: BadgeCheck,
    value: 99,
    suffix: "%",
    label: "Symptom Accuracy",
    description:
      "Clinically aligned AI trained on verified medical knowledge bases.",
    color: "bg-white/10",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Data Secure",
    description:
      "End-to-end encrypted. Your health data stays private — always.",
    color: "bg-white/10",
  },
];

// Animated counter hook
function useCounter(target: number, isInView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(stat.value, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col gap-4 "
    >
      {/* Icon */}
      {/* <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-white" />
      </div> */}

      {/* Number */}
      <div className="flex items-end gap-0.5">
        <span className="text-5xl font-bold text-white font-poppins leading-none tabular-nums">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl font-bold text-orange-200 mb-0.5">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div>
        <h6 className="text-white font-semibold text-base font-poppins">
          {stat.label}
        </h6>
        <p className="text-orange-100/70 text-sm mt-1 leading-relaxed">
          {stat.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="py-8 font-poppins bg-[#cf4f22]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative  rounded-2xl max-w-[1150px] w-11/12 md:w-full mx-auto py-8 md:py-10 overflow-hidden"
      >
        {/* Background texture dots */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Glow blobs */}
        {/* <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-orange-400/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-red-700/30 blur-3xl pointer-events-none" /> */}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 relative"
        >
          <span className="text-orange-200/80 text-sm font-medium tracking-widest uppercase">
            By the numbers
          </span>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mt-1">
            Trusted by thousands,
            <span className="text-orange-200">built for everyone.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
