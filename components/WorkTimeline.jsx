"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const workTimeline = [
  {
    year: "2024",
    title: "CEO at Bar-Trek",
    description: "Founder and Chief Executive Officer",
    tech: ["Postgres-SQL", "AI Agents", "Full Stack Development"],
  },
  {
    year: "2024",
    title: "Technical Program Manager for AI at BP",
    description: "Leading AI projects and initiatives",
    tech: ["Project Management", "Gen-AI", "Leadership"],
  },
  {
    year: "2020",
    title: "Data Scientist - Reservoir Engineering at BP",
    description:
      "Applied data science techniques to reservoir engineering challenges",
    tech: ["Data Science", "Python", "AI"],
  },
  {
    year: "2020",
    title: "BSc Hons Data Science",
    description:
      "Started my Data Science Degree Apprenticeship at Anglia Ruskin University (Cambridge Spark)",
    tech: ["Data Science", "Python", "AI"],
  },
];

export default function WorkTimeline() {
  return (
    <div className="space-y-16">
      {workTimeline
        .slice()
        .reverse()
        .map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-8 items-start"
            >
              <div className="text-xl font-bold text-gray-400">{item.year}</div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex gap-2">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}
