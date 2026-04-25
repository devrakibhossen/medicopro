"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Mother of 2, Dhaka",
    avatar: "AR",
    avatarBg: "bg-rose-100 text-rose-500",
    rating: 5,
    review:
      "My son had fever and rashes at midnight. I described his symptoms to Medicopro and within seconds it told me he might have chickenpox and suggested exactly what to do. Saved us a panic trip to the ER.",
    tag: "Symptom Analysis",
  },
  {
    name: "Dr. Imran Hossain",
    role: "General Physician, Chittagong",
    avatar: "IH",
    avatarBg: "bg-blue-100 text-blue-500",
    rating: 5,
    review:
      "I recommend Medicopro to my patients for a first opinion before visiting clinics. The accuracy of test suggestions is surprisingly good. It doesn't replace doctors — it makes them more efficient.",
    tag: "Doctor Approved",
  },
  {
    name: "Tanvir Ahmed",
    role: "Software Engineer, Sylhet",
    avatar: "TA",
    avatarBg: "bg-amber-100 text-amber-600",
    rating: 5,
    review:
      "When I had chest tightness, it flagged it seriously and told me to get an ECG right away. Turned out I had mild arrhythmia. Medicopro might have saved my life.",
    tag: "Life-changing",
  },
  {
    name: "Nusrat Jahan",
    role: "University Student, Rajshahi",
    avatar: "NJ",
    avatarBg: "bg-purple-100 text-purple-500",
    rating: 5,
    review:
      "As a student far from home, I always worried about health issues. Now I just ask Medicopro. It's like having a doctor in my pocket — calm, clear, and always available.",
    tag: "Always Available",
  },
  {
    name: "Karim Uddin",
    role: "Small Business Owner, Cumilla",
    avatar: "KU",
    avatarBg: "bg-green-100 text-green-600",
    rating: 5,
    review:
      "My family used to spend so much on unnecessary clinic visits. Medicopro tells us exactly which tests to get. We've saved money AND gotten better care. Unbelievable value.",
    tag: "Cost Saving",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    setDirection(dir);
    setActive(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const t = setInterval(() => paginate(1), 5000);
    return () => clearInterval(t);
  }, [active]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -50 : 50 }),
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 overflow-hidden font-poppins "
    >
      {/* Soft orange radial bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-orange-50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100/60 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1150px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#cf4f22] text-sm font-medium tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold leading-tight">
            Real people. <span className="text-[#cf4f22]">Real results.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto leading-relaxed">
            From worried parents to working professionals — here's what people
            say after using Medicopro.
          </p>

          {/* Animated underline divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-[#cf4f22]/40 to-transparent"
          />
        </motion.div>

        {/* Layout: Big card left + side stack right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* ── Featured card (left, 3 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-[#cf4f22] rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl shadow-orange-200/60 min-h-[320px] flex flex-col justify-between">
              {/* Dot texture */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-400/30 rounded-full blur-2xl pointer-events-none" />

              {/* Quote icon */}
              <Quote
                size={56}
                className="absolute top-6 right-8 text-white/10 fill-white/10"
              />

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col gap-5"
                >
                  {/* Tag */}
                  <span className="inline-block self-start text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white/90 backdrop-blur-sm">
                    {testimonials[active].tag}
                  </span>

                  {/* Review */}
                  <p className="text-white/90 text-lg leading-relaxed font-light">
                    "{testimonials[active].review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white ${testimonials[active].avatarBg.split(" ")[1]}`}
                      >
                        {testimonials[active].avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {testimonials[active].name}
                        </p>
                        <p className="text-orange-100/70 text-xs">
                          {testimonials[active].role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-amber-300 text-amber-300"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nav controls */}
              <div className="flex items-center gap-3 mt-6">
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => paginate(-1)}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all"
                >
                  <ChevronLeft size={15} />
                </motion.button>

                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > active ? 1 : -1);
                        setActive(i);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-5 h-2 bg-white"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => paginate(1)}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all"
                >
                  <ChevronRight size={15} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* ── Side cards (right, 2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {testimonials
              .filter((_, i) => i !== active)
              .slice(0, 2)
              .map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  onClick={() => {
                    const idx = testimonials.indexOf(t);
                    setDirection(idx > active ? 1 : -1);
                    setActive(idx);
                  }}
                  whileHover={{
                    x: 4,
                    boxShadow: "0 8px 30px rgba(207,79,34,0.10)",
                  }}
                  className="group bg-white border border-gray-100 hover:border-[#cf4f22]/25 rounded-2xl p-5 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.avatarBg}`}
                    >
                      {t.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-gray-800 font-semibold text-sm">
                          {t.name}
                        </p>
                        <StarRating count={t.rating} />
                      </div>
                      <p className="text-gray-400 text-xs mb-2">{t.role}</p>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors">
                        "{t.review}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#cf4f22]/10 flex items-center justify-center">
                <Star size={16} className="fill-[#cf4f22] text-[#cf4f22]" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm">
                  4.9 / 5 Rating
                </p>
                <p className="text-gray-400 text-xs">
                  Based on 200+ verified reviews
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
