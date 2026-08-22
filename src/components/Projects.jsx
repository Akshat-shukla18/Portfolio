import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <motion.div
      className="lightning-border-wrap group"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="lightning-content">
        {/* ── Project Image Showcase ── */}
        <div className="w-full h-48 sm:h-56 overflow-hidden bg-gradient-to-b from-[#0e1424] to-[#080c16] flex items-center justify-center p-3 image-electric-shine border-b border-gray-800/80">
          <img
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110 drop-shadow-md"
            src={props.image}
            alt={props.title}
          />
        </div>

        {/* ── Card Body ── */}
        <div className="flex flex-col flex-1 px-6 py-6 justify-between">
          <div>
            {/* Project Title */}
            <h1 className="text-xl font-semibold font-poppins capitalize md:text-2xl text-gradient group-hover:brightness-125 transition-all duration-300">
              {props.title}
            </h1>

            {/* Description */}
            <p className="mt-3 font-poppins font-normal text-dimWhite text-sm leading-relaxed">
              {props.content}
            </p>
          </div>

          <div>
            {/* Tech Stack */}
            <div className="mt-5">
              <p className="font-poppins font-normal text-dimWhite text-xs mb-2 uppercase tracking-widest">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {props.stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="text-dimWhite text-[22px] hover:text-teal-200 tooltip transition-all duration-200 hover:scale-110"
                  >
                    {React.createElement(tech.icon)}
                    <span className="tooltiptext">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-5 pt-4 border-t border-gray-800 group-hover:border-gray-700">
              {props.github && (
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="flex items-center gap-1.5 text-dimWhite hover:text-teal-300 transition-colors duration-200"
                >
                  <AiFillGithub size="1.5rem" />
                  <span className="font-poppins text-xs font-medium">Source Code</span>
                </a>
              )}
              {props.link && (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="flex items-center gap-1.5 text-dimWhite hover:text-teal-300 transition-colors duration-200"
                >
                  <BsLink45Deg size="1.5rem" />
                  <span className="font-poppins text-xs font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-2 py-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
