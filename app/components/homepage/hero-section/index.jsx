"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <TypewriterComponent
            options={{
              strings: ["Ali Lpu", "a Developer", "a Designer", "an Innovator"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200"
        >
          Building digital experiences with creativity and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <Link href="https://github.com" target="_blank">
            <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-200" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition-colors duration-200" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="text-2xl hover:text-blue-300 transition-colors duration-200" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-6"
        >
          <span className="block text-gray-300 text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            Hello, I&apos;m
          </span>
          <Link href="#contact">
            <span className="inline-block mt-2 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md transition">
              Let&apos;s Connect
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
