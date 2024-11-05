/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

import React from 'react';

const aboutItems = [
  {
    label: "Project done",
    number: 3,
  },
  {
    label: "Months of experience",
    number: 6,
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          {/* Introduction Paragraph */}
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Sakthi, a hardworking and passionate Python developer
            with expertise in Django, React, and MySQL. Completed impactful projects 
            like Smart Bus Pass and Mech Manage, and a web development internship. 
            Strong problem-solving, teamwork, and database management skills, eager for challenges.
          </p>

          {/* Education Section */}
          <div className="education-section mt-8 text-zinc-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-6 h-6 mr-2 text-sky-400"
              >
                <path d="M32 12L2 28h60L32 12zM2 28v24h60V28L32 8 2 28zM32 36a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <h2 className="font-semibold text-lg">Education</h2>
            </div>
            <div className="education-details text-sm text-zinc-400">
              <div className="mb-4">
                <span className="block font-medium">• Master of Computer Application - 2022-2024</span>
                <span>| AWH Engineering College, Kozhikode.</span><br />
                <span>| APJ Abdul Kalam University</span><br />
                <span>| CGPA - 6.81</span>
              </div>
              <div className="mb-4">
                <span className="block font-medium">• BSC Mathematics - 2017-2020</span>
                <span>| AVS College of Arts & Science, Salem.</span><br />
                <span>| Periyar University</span><br />
                <span>| CGPA - 7.0</span>
              </div>
              <div>
                <span className="block font-medium">• HSC - 2016-2017</span>
                <span>| Bharathi Vidhyalaya Hr.Sec School, Salem</span><br />
                <span>| Percentage - 69%</span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="certifications-section mt-8 text-zinc-300">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-6 h-6 mr-2 text-sky-400"
              >
                <path d="M32 12L2 28h60L32 12zM2 28v24h60V28L32 8 2 28zM32 36a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <h2 className="font-semibold text-lg">Certifications</h2>
            </div>
            <div className="certification-details text-sm text-zinc-400">
              <div className="mb-4">
                <span className="block font-medium">• NPTEL Certification: Introduction to IoT</span>
                <span>| Duration: 12 weeks</span>
              </div>
              <div>
                <span className="block font-medium">• Exploring R Programming</span>
                <span>| TUTOR JOES Computer Education</span><br />
                <span>| Duration: 4 weeks</span>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap items-center gap-4 mt-8 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="text-center">
                <div className="flex items-center justify-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.png"
              alt="Company Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
