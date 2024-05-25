import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who am I</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm currently in my final year pursuing a double degree in
        Mechatronics Engineering and Business at McMaster University. Throughout
        my degree, I have gained over two years of experience working multiple
        software developer internships. My passion lies in developing innovative
        solutions and increasing efficiency through optimized pipelines and
        workflows, which I believe can add value to any organization. I am also
        interested in areas such as data analytics, machine learning, AI, and
        the fintech industry, particularly with quantitative analysis and
        algorithmic trading.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        In my free time, I enjoy staying active by working out and playing
        sports. I am a fan of Formula 1 racing and am fascinated by the
        engineering behind the cars. As an engineer & developer, I am always
        eager to explore new technologies and collaborate with others. I have
        participated in several hackathons as both a participant and executive
        organizer. I also have leadership experience as a project manager for
        the McMaster Rocketry Team, where I oversaw planning and integration of
        the first successful high-powered rocket launch our University has ever
        had! Check out our 3km (10,000ft){" "}
        <u>
          <a href="https://www.youtube.com/watch?v=4lxF2DUAMRA" target="_blank">
            launch video
          </a>
        </u>
        !
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
