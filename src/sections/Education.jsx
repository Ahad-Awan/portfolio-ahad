import React from "react";
import PropTypes from "prop-types";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";
import { educationData } from "../constants/data";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#32303a", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #32303a" }}
      date={education.duration}
      dateClassName="text-white"
      iconStyle={{ background: "#32303a", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.institution}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-base font-bold">{education.degree}</h3>
        <p className="text-gray-300 text-base font-mono" style={{ margin: 0 }}>
          {education.institution}
        </p>
      </div>

      {/* Grade */}
      {education.grade && (
        <p className="mt-2 mb-2 text-gray-400 text-sm">
          Grade: {education.grade}
        </p>
      )}

      {/* Subjects */}
      {education.subjects && education.subjects.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {education.subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-[#7e3ff2] text-white text-xs md:text-sm px-2 py-1 rounded-full"
            >
              {subject}
            </span>
          ))}
        </div>
      )}

      {/* Achievements */}
      {education.achievements && education.achievements.length > 0 && (
        <ul className="mt-3 list-disc ml-5 space-y-1 text-xs md:text-sm text-gray-400">
          {education.achievements.map((item, i) => (
            <li key={`edu-achievement-${i}`}>{item}</li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

// ✅ Move PropTypes after function declaration
EducationCard.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    grade: PropTypes.string,
    subjects: PropTypes.arrayOf(PropTypes.string),
    achievements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Education = () => {
  return (
    <section className="w-full flex justify-center mb-20 px-4" id="education">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        {/* Title */}
        <div className="w-full">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Education
            </LinearGradient>
          </motion.h2>
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor={"#fff"}>
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
