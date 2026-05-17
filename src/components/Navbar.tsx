"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { label: "Meet medicopro", href: "/" },
    { label: "Tools", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Login", href: "/" },
  ];
  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-sm " : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1150px] mx-auto  py-2 w-11/12 md:w-full">
        <div className="flex items-center ">
          <Image
            className=""
            src="/medicopro.png"
            alt="medicopro"
            width={40}
            height={40}
            priority
          />
          <h3 className="text-4xl text-[#cf4f22] font-poppins font-semibold">medicopro</h3>
        </div>
        <div className="md:flex items-center gap-6 hidden">
          <ul className="flex items-center gap-6 ">
            <Link href="/">Meet medicopro</Link>
            <Link href="/">Tools</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Login</Link>
          </ul>
          <Link href="/dashboard/chat/new">
          <button className="flex gap-1.5 items-center border border-transparent p-1 bg-[#cf4f22] text-white rounded-full hover:bg-[#b8431c] transition pl-3">
            Try medicopro
            <span className="bg-black p-1 rounded-full">
              <ArrowUpRight size={18} />
            </span>
          </button>
          </Link>
        </div>
        <motion.button
          onClick={() => setOpen(true)}
          className="md:hidden cursor-pointer p-2 rounded-lg "
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="text-[#cf4f22]" />
        </motion.button>
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
              />

              {/* Drawer Panel */}
              <motion.div
                key="drawer"
                className="fixed top-0 right-0 h-screen w-full  bg-white z-50 flex flex-col justify-between p-6 shadow-2xl md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Top Section */}
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <Image
                        src="/medicopro.png"
                        alt="medicopro"
                        width={36}
                        height={36}
                        priority
                      />
                      <h3 className="text-2xl text-[#cf4f22] font-semibold tracking-tight">
                        medicopro
                      </h3>
                    </motion.div>

                    <motion.button
                      onClick={() => setOpen(false)}
                      className="cursor-pointer p-2 rounded-full hover:bg-orange-50 transition-colors"
                      whileTap={{ rotate: 90, scale: 0.85 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <X size={20} className="text-gray-500" />
                    </motion.button>
                  </div>

                  {/* Divider */}
                  <motion.div
                    className="h-px bg-gradient-to-r from-[#cf4f22]/30 via-orange-100 to-transparent mb-5"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  />

                  {/* Nav Links */}
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.2 + i * 0.07,
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between py-2 px-3 rounded-full text-gray-700 hover:text-[#cf4f22] hover:bg-orange-100 transition-all duration-200 text-lg font-medium"
                        >
                          {link.label}
                          <motion.span
                            className="opacity-0 group-hover:opacity-100 text-[#cf4f22]"
                            initial={false}
                          >
                            <ArrowUpRight size={16} />
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex gap-1.5 items-center justify-center border border-transparent p-1 bg-[#cf4f22] text-white rounded-full hover:bg-[#b8431c] transition pl-3 w-full"
                  >
                    Try medicopro
                    <span className="bg-black/80 p-1 rounded-full">
                      <ArrowUpRight size={16} />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
