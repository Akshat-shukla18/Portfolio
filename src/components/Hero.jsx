import React from "react";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, repoLink, CVLink, socialMedia } from "../constants";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CountUp } from "countup.js";
import ProfileCard from "./ProfileCard";
import akshatImg from "../assets/akshat.jpeg";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const counters = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 8, suffix: "+", label: "Technologies Mastered" },
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 1000, suffix: "+", label: "Code Commits" },
  ];

  // Create refs for each counter
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (el) {
        // Ensure proper initialization for all counters
        const { value, suffix } = counters[index];
        const countUp = new CountUp(el, value, {
          duration: 15,
          suffix: suffix || "",
        });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} pt-16 md:pt-20`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* Hero text */}
          <div className="flex flex-row justify-between items-center w-full text-white">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
              Hi there!
              <br className="sm:block hidden" /> I am
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <LetsConnect />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {aboutMe.intro}
          </p>
          {/* Social Icons */}
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
         
            {/* Contact Me */}
            {/* <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={FaGithub}
            />
          </a> */}
          </div>
       

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="relative z-index-[5] h-[90%] w-[85%]">
            <Lottie {...defaultOptions} />
          </div>
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <LetsConnect />
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className={`flex flex-col md:flex-row ${styles.paddingY}`}
      >
        <div className="flex-1 flex flex-col justify-start px-4 sm:px-8 lg:px-10">
          <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[60px] lg:leading-[70px] text-center sm:text-left">
            About Me
          </h1>
          <p
            className={`text-dimWhite text-sm mt-4 sm:text-base lg:text-lg max-w-full md:max-w-[90%] lg:max-w-[80%] text-center sm:text-left leading-relaxed`}
          >
            My name is{" "}
<span className="text-teal-500 font-bold">Akshat Shukla </span>
            , a software engineer specializing in Backend Systems, AI Engineering, and Scalable Architectures. I build resilient server-side services using Node.js and design intuitive user interfaces with
            in{" "}
            <span className="text-teal-500 font-bold">
               React.
            </span>
            
            <br />
            <br />
           Beyond full-stack development, I sharpen my problem-solving skills through programming -
            
            <span className="text-teal-500 font-bold">
            maintaining a 1700+ rating on LeetCode with C++
            </span>{" "}
            (Driven by a competitive mindset),{" "}
           
           I regularly participate in AI hackathons with cross-functional teams to engineer practical, high-impact solutions under pressure.
            <br />
            <br />
           Currently pursuing my degree at : {" "}
            <span className="text-teal-500 font-bold">
              Chandigarh Engineering College, Mohali {" "}
            </span>
            I am focused on scaling backend infrastructure, integrating intelligent AI workflows, and solving complex algorithmic challenges.
            . I'm heading to adapt battle-tested capability to build scalable backend systems, integrated AI workflows, and practical applications through competitive hackathons and engineering projects.
          </p>
          <a href="/AkResume.pdf" target="_blank" rel="noopener noreferrer">
<button className="col-auto border-2 border-teal-200 w-60 text-center text-white font-bold px-6 py-2 mt-16 rounded-lg animate-pulse hover:shadow-neon hover:shadow-teal-400 transition duration-300 mb-4">
                           Resume
                           </button></a>
        </div>
        <div className="flex flex-col justify-center items-center relative mt-8 md:mt-0 lg:mr-10">
          <ProfileCard
            name={aboutMe.name}
            title="Software Engineer"
            handle={aboutMe.githubUsername || "Akshat-shukla"}
            status="Online"
            contactText="Contact Me"
            avatarUrl={akshatImg}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const contactSection = document.getElementById("contactMe");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </section>

      {/* Counter Section */}
      {/* <section>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center text-center mb-20">
          {[
            { value: "1+", label: "Years of Experience" },
            { value: "8+", label: "Technologies Mastered" },
            { value: "20+", label: "Projects Completed" },
            { value: "1k+", label: "Code Commits" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate__animated animate__fadeIn animate__delay-1s"
            >
              <p className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-white">
                <span className="counter">{stat.value}</span>
              </p>
              <p className="text-teal-200 text-sm sm:text-base lg:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section> */}
     
    </>
  );
};

export default Hero;
