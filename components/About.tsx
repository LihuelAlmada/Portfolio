import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://lh6.googleusercontent.com/h58k7EK4uv-nEPE-K4LMZ8_0LJGAqWcHr4LmMYhIn13zSWP4oWlLxvoG63jeS_WEd7aFL1TNxHjS79f6js24igfnr4Q1A6YsP1KdJKSmn16_KrBYkxF5xYM0cLKgYMr39w=w1280"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
         You may not {""}
          <span className="underline decoration-[#F7AB0A]/50">know</span> {""}
          but
        </h4>
        <p className="text-base">
          My areas of expertise are web and mobile development. I'm also very
          passionate about teaching, and luckily, I had and continue to have the
          opportunity of being a teaching assistant at one of my former
          college's classes. I also play piano 🎹 and do sports 🎾
        </p>
      </div>
    </motion.div>
  );
}

export default BackgroundCircles;
