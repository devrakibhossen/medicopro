"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Stethoscope,
  FlaskConical,
  Pill,
  ShieldCheck,
  Zap,
  MessageCircleHeart,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Symptom Analysis",
    description:
      "Describe how you feel in plain language. Our AI maps your symptoms to potential conditions with clinical-level precision.",
    tag: "Core",
    highlight: true,
  },
  {
    icon: FlaskConical,
    title: "Test Recommendations",
    description:
      "Get a prioritized list of lab tests and diagnostics tailored to your symptoms — no guesswork, no unnecessary costs.",
    tag: "Smart",
    highlight: false,
  },
  {
    icon: Pill,
    title: "Medicine Suggestions",
    description:
      "Receive safe, evidence-based medicine options with dosage guidance, instantly — reviewed against known drug interactions.",
    tag: "Reliable",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "No waiting rooms. No appointment delays. Get a full health assessment in under 10 seconds, any time of day.",
    tag: "Fast",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "100% Private",
    description:
      "Your health data never leaves your control. End-to-end encrypted conversations with zero data sharing to third parties.",
    tag: "Secure",
    highlight: false,
  },
  {
    icon: MessageCircleHeart,
    title: "Human-like Guidance",
    description:
      "No robotic responses. Medicopro speaks like a caring doctor — clear, compassionate, and easy to understand.",
    tag: "Empathetic",
    highlight: false,
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-default overflow-hidden
        ${
          feature.highlight
            ? "bg-[#cf4f22] border-[#cf4f22] text-white"
            : "bg-card border-app hover:border-[#cf4f22]/30  hover:shadow-orange-50"
        }`}
    >
      {/* Subtle background pattern for highlight card */}
      {feature.highlight && (
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      )}

      {/* Glow on hover for white cards */}
      {!feature.highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/60 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
      )}

      <div className="relative flex flex-col gap-4 h-full">
        {/* Top row: Icon + Tag */}
        <div className="flex items-start justify-between">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
              ${feature.highlight ? "bg-white/15" : "bg-orange-50 group-hover:bg-orange-100"}`}
          >
            <Icon
              size={20}
              className={feature.highlight ? "text-white" : "text-[#cf4f22]"}
            />
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide
              ${
                feature.highlight
                  ? "bg-white/20 text-white"
                  : "bg-orange-50 text-[#cf4f22]"
              }`}
          >
            {feature.tag}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h3
            className={`text-lg font-semibold font-poppins
              ${feature.highlight ? "text-white" : "text-gray-900"}`}
          >
            {feature.title}
          </h3>
          <p
            className={`text-sm leading-relaxed
              ${feature.highlight ? "text-orange-100/80" : "text-gray-500"}`}
          >
            {feature.description}
          </p>
        </div>

        {/* Bottom accent */}
        <div
          className={`mt-auto pt-4 border-t
            ${feature.highlight ? "border-app" : "border-app"}`}
        >
          <span
            className={`text-xs font-medium flex items-center gap-1.5 transition-colors
              ${
                feature.highlight
                  ? "text-orange-100/70"
                  : "text-gray-400 group-hover:text-[#cf4f22]"
              }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full
                ${feature.highlight ? "bg-orange-200" : "bg-[#cf4f22]"}`}
            />
            Powered by Medicopro AI
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="max-w-[1150px] mx-auto font-poppins px-4 py-16">
      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-[#cf4f22] text-sm font-medium tracking-widest uppercase mb-3">
          Features
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-app text-3xl md:text-4xl font-semibold leading-tight max-w-lg">
            Everything you need,{" "}
            <span className="text-[#cf4f22]">{`nothing you don't.`}</span>
          </h2>
          <p className="text-muted text-sm max-w-xs leading-relaxed md:text-right">
            Medicopro brings hospital-grade health intelligence directly to your
            phone — simple, fast, and private.
          </p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 h-px bg-gradient-to-r from-[#cf4f22]/40 via-orange-100 to-transparent"
        />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 rounded-2xl bg-card border-app p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <h4 className="text-gray-900 font-semibold text-base">
            Ready to take control of your health?
          </h4>
          <p className="text-gray-500 text-sm mt-0.5">
            Join 1,000+ users already using Medicopro.
          </p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0 8px 30px rgba(207,79,34,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0 bg-[#cf4f22] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#b8431c] transition-colors shadow-md shadow-orange-200"
        >
          Try Medicopro Free →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Features;
