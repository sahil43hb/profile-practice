import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAws,
  FaCcStripe,
} from "react-icons/fa";
import {
  BiLogoVuejs,BiLogoFlutter
  
} from "react-icons/bi";
import {
  TbBrandThreejs
} from "react-icons/tb";
import {
  LiaNode
} from "react-icons/lia";
import {
  DiMongodb
} from "react-icons/di";
import {
  SiAngularjs,SiTailwindcss,
  SiExpress
} from "react-icons/si";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPhp,
  SiLaravel,
  SiPhpmyadmin,
  SiMysql,
  SiZapier,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <BiLogoVuejs key="vue" />,
          <SiAngularjs key="angular" />,
          <TbBrandThreejs key="three" />,
          <SiTailwindcss key="tailwind" />,
          <SiExpress key="express" />,
          <DiMongodb key="mongo" />,
          <LiaNode key="node" />,
          <SiPhp key="Php" />,
          <SiLaravel key="laraval" />,
          <SiPhpmyadmin key="Phpmyadmin" />,
          <SiMysql key="Mysql" />,
          <FaAws key="FaAws" />,
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaWordpress key="wordpress" />,
          <FaCcStripe key="Stripe" />,
        ],
      },
      {
        title: "Zapier Expert",
        icons: [
          <SiZapier key="SiZapier" />,
        ],
      },
      {
        title: "App Development",
        icons: [
          <FaReact key="react" />,
          <BiLogoFlutter key="flutter" />,
      
        ],
      },
     
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Front End Web Developer - Hybreathe Company",
        stage: "2014 - 2016",
      },
      {
        title: "Php Laravel Developer - Hybreathe Company",
        stage: "2016 - 2019",
      },
      {
        title: "MERN Stack Developer - DEF Corporation",
        stage: "2019 - 2021",
      },
      {
        title: "Full Stack Mobile and Web App Manager - Hybreathe Company",
        stage: "2021 - Pres.",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "HTML5.2x",
        stage: " HTML5 Apps and Games 2014",
      },
      {
        title: "JS.0x",
        stage: "JavaScript Introduction 2014",
      },
      {
        title: "HTML5.1x",
        stage: "HTML5 Coding Essentials and Best Practices 2014",
      },
      {
        title: "HTML5.0x",
        stage: " HTML5 and CSS Fundamentals 2014",
      },
      {
        title: "CSS.0x",
        stage: "CSS Basics 2014",
      },
      {
        title: "CSS.0x",
        stage: "CSS Basics 2014",
      },
      {
        title: "Bachelors in Computer Science - GIFT University, GUJW, PK",
        stage: "2015",
      },
     
    ],
  },
];

//compom
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import CountUp from "react-countup";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificant design.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
          8 years ago, I began freelancing as a developer .Since then, I've done remote work for agencies, consulted for startup, and collaborated an digital products for business and consumer use .
          </motion.p>

          {/* counter */}

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0
    mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/*Clients*/}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/*project*/}
              <div
                className="relative flex-1 "
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={4} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished project
                </div>
              </div>
              {/*award
              <div className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
        cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
          `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0" >{item.title}</div>
                  <div className="hidden md:flex font-bold">:</div>
                  <div>{item.stage}</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-4 pl-4" > 
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={icon.key}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
