import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'IIITDMJ FUSION',
    company: 'Android Team Member',
    period: 'January 2024 - April 2024',
    description: 'Worked with the Android team of 5 members for the Research module of the Fusion mobile app at IIITDMJ, integrating Django-based APIs, and overseeing the workflow and architecture to ensure efficient data flow and seamless user interaction.',
  }
];

const education = [
  {
    school: 'Indian Institute of Information Technology, Jabalpur, India',
    degree: 'Bachelor of Technology - Computer Science Engineering',
    period: 'December 2021 – July 2025',
    courses: 'Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System, Software Engineering, Computer Networks, Cryptography'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Education
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 pb-12"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-purple-500">
                  <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-purple-500">
                    <GraduationCap className="w-4 h-4 text-white absolute -left-0.5 -top-0.5" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-purple-500 font-medium">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-600">Relevant Coursework: {edu.courses}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500">
                  <div className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-blue-500">
                    <Briefcase className="w-4 h-4 text-white absolute -left-0.5 -top-0.5" />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-500 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;