import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { links } from "../constants/index";

import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className={`relative w-full mx-auto`}
      style={{ height: window.screen.availHeight * 0.8 }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Cameron</span>
          </h1>
          <div className={`${styles.heroTypedText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: [
                  "Quantitative Developer",
                  "Portfolio Manager",
                  "Software Engineer",
                  "Quantitative Analyst",
                  "Project Manager",
                  "Leader",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 100,
                deleteSpeed: 40,
                pauseFor: 1000,
                wrapperClassName: "text-[#dfd9ff]",
                cursorClassName: "purple-text-gradient",
              }}
            />
          </div>
          <a href={links.resume} target="_blank">
            <button
              className={`${styles.heroSubText} bg-[#915EFF] rounded-full text-center mt-4 text-white-100 pl-5 pr-5 pt-1 pb-1`}
            >
              <i className="fa-solid fa-file-lines fa-xs pr-3"></i>Resume
            </button>
          </a>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p> */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"> */}
      <div className="absolute bottom-5 w-full flex justify-center items-center">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mb-5"
            onClick={() => console.log("Clicked")}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
