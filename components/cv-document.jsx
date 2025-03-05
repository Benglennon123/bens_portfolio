import React from "react";
import Image from "next/image";
import {
  FaRobot,
  FaBrain,
  FaLaptopCode,
  FaProjectDiagram,
  FaChartLine,
  FaPython,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// CV data based on the about page content
const cvData = {
  "data-science": {
    title: "Data Science CV",
    name: "Ben Glennon",
    email: "glennonben@gmail.com",
    phone: "", // Add phone if available
    linkedin: "https://linkedin.com/in/ben-glennon-0a78ab196",
    github: "https://github.com/Benglennon123",
    photo: "/ben.jpg", // Add your photo path here
    summary:
      "Results-driven Data Scientist with extensive experience in developing and implementing AI solutions and modern web applications. Demonstrated expertise in delivering business value through AI-driven reservoir engineering projects and establishing enterprise frameworks for efficient AI solution deployment. Proven track record of translating complex technical challenges into scalable solutions that drive operational excellence.",
    experience: [
      {
        title: "Technical Program Manager for AI",
        company: "BP",
        date: "August 2024 - Present",
        description:
          "Leading BP's AI strategy development and governance implementation, including establishing comprehensive frameworks for performance tracking and regulatory compliance with emerging standards like the EU AI Act. Spearheading the creation of an enterprise-wide AI inventory while identifying and evaluating new AI technologies to drive innovation across the organization.",
        logo: "/bp-logo.png", // Add logo path here
      },
      {
        title: "Founder & CEO",
        company: "Bar-Trek",
        date: "July 2024 - Present",
        description:
          "Leading the development and strategic direction of Bar-Trek, a pub discovery and tracking platform I founded with a small team. Personally architected and built the entire platform using Next.js and Supabase, transforming a simple concept into a comprehensive community product. Responsible for all technical implementation, product vision, and growth strategy while collaborating with team members to enhance the pub exploration experience across the UK.",
        logo: "/bar-trek.png", // Add logo path here
      },
      {
        title: "Data Scientist - Reservoir Engineering",
        company: "BP",
        date: "September 2020 - August 2024",
        description:
          "Led data science initiatives in reservoir engineering, developing AI solutions that optimized production workflows and created enterprise frameworks for AI delivery. Spearheaded the 'AI for Everyone' initiative and organized bp's largest hackathon, building a thriving community of practice around AI upskilling and innovation. Delivered tangible business outcomes through practical AI applications while establishing frameworks for continuous learning and experimentation.",
        logo: "/bp-logo.png", // Add logo path here
      },
    ],
    skills: [
      "Gen-AI",
      "AI Agents",
      "Full Stack",
      "Project Management",
      "Data Science",
      "Python",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "React",
      "Next.js",
      "PostgreSQL",
    ],
    education: [
      {
        degree: "First Class Honours BSc Hons Data Science",
        institution: "Anglia Ruskin University (Cambridge Spark)",
        date: "2020 - 2024",
        details: "Data Science Degree Apprenticeship",
      },
    ],
    testimonials: [
      {
        text: "Ben's ability to quickly grasp project needs and translate them into action is remarkable. His expertise in web design and data-driven solutions ensures we always arrive at the best possible outcome.",
        author: "Natalia Konstantinova",
        position: "Global Architecture Lead in AI, bp",
      },
      {
        text: "Ben's technical excellence was fundamental in delivering a unified data platform. His pragmatic approach to resolving complex business problems accelerates value through AI.",
        author: "Andrew Edirisoorya",
        position: "Subsurface Tech Lead, bp",
      },
      {
        text: "Ben is a strategic and highly organized problem solver. His ability to navigate and streamline complex projects is truly impressive. He brings a unique blend of skills, including innovative AI application and sophisticated portfolio management, with a keen business understanding of the oil and gas industry.",
        author: "Uthman Ali",
        position: "Global Responsible AI Officer, bp",
      },
    ],
  },
  "technical-program-manager": {
    // Similar structure but with TPM focus
    title: "Technical Program Manager CV",
    name: "Ben Glennon",
    // ... other fields similar to data-science variant but with TPM emphasis
  },
  "full-stack": {
    // Similar structure but with full-stack focus
    title: "Full Stack Developer CV",
    name: "Ben Glennon",
    // ... other fields similar to data-science variant but with full-stack emphasis
  },
  founder: {
    // Similar structure but with founder focus
    title: "Founder/Entrepreneur CV",
    name: "Ben Glennon",
    // ... other fields similar to data-science variant but with founder emphasis
  },
};

const CVDocument = ({ variant }) => {
  const data = cvData[variant] || cvData["data-science"];

  // Map skill names to their corresponding icons
  const skillIcons = {
    "Gen-AI": <FaRobot className="text-blue-500" />,
    "AI Agents": <FaBrain className="text-blue-500" />,
    "Full Stack": <FaLaptopCode className="text-blue-500" />,
    "Project Management": <FaProjectDiagram className="text-blue-500" />,
    "Data Science": <FaChartLine className="text-blue-500" />,
    Python: <FaPython className="text-blue-500" />,
    JavaScript: <FaJs className="text-blue-500" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    Tailwind: <SiTailwindcss className="text-blue-500" />,
    React: <FaReact className="text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-blue-500" />,
    PostgreSQL: <FaDatabase className="text-blue-500" />,
  };

  return (
    <div className="bg-white p-6 max-w-[21cm] mx-auto shadow-none print:shadow-none print:p-6 print:max-w-full">
      {/* Combined Header and Summary Section */}
      <div className="mb-4 pb-2 border-b border-gray-200 flex gap-4">
        {/* Content Column (now on the left) */}
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{data.name}</h1>
          <div className="text-xs text-gray-600 flex flex-wrap gap-x-4 gap-y-1 mb-2">
            <a
              href={`mailto:${data.email}`}
              className="text-blue-600 hover:underline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {data.email}
            </a>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {data.phone}
              </a>
            )}
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://benglennon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Portfolio
            </a>
          </div>

          {/* Summary as a quote without header */}
          <div className="pl-3 border-l-2 border-blue-300 italic text-xs text-gray-700 leading-tight">
            {data.summary}
          </div>
        </div>

        {/* Photo Column (now on the right) */}
        <div className="w-20 flex-shrink-0">
          <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-gray-200 mb-2">
            {data.photo && (
              <Image
                src={data.photo}
                alt={data.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            )}
          </div>
        </div>
      </div>

      {/* Two Column Layout for Experience and Skills */}
      <div className="flex gap-6 mb-4">
        {/* Main Column (Experience) */}
        <div className="flex-1">
          {/* Experience Section */}
          <div>
            <h2 className="text-sm font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center">
              <span className="bg-blue-500 w-1 h-4 mr-1.5 rounded-sm"></span>
              Experience
            </h2>
            <div className="space-y-2">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-2 relative pl-3 border-l border-blue-100"
                >
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1 top-1"></div>
                  <div className="flex items-start">
                    {exp.logo && (
                      <div className="w-8 h-8 mr-2 relative flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xs font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600">
                        {exp.company}
                      </p>
                      <p className="text-xs italic text-gray-600">{exp.date}</p>
                      <p className="text-xs text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column (Skills) */}
        <div className="w-1/4 space-y-4">
          {/* Skills Section */}
          <div>
            <h2 className="text-sm font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center">
              <span className="bg-blue-500 w-1 h-4 mr-1.5 rounded-sm"></span>
              Technical Skills
            </h2>
            <div className="flex flex-col gap-1 mt-1">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md mb-1 border border-blue-100 flex items-center"
                >
                  {skillIcons[skill] && (
                    <span className="mr-1.5">{skillIcons[skill]}</span>
                  )}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education Section - Full Width */}
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center">
          <span className="bg-blue-500 w-1 h-4 mr-1.5 rounded-sm"></span>
          Education
        </h2>
        <div className="space-y-2">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="mb-1 pl-3 border-l border-blue-100 relative"
            >
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1 top-1"></div>
              <h3 className="text-xs font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-xs text-gray-700">{edu.institution}</p>
              <p className="text-xs text-gray-700">
                {edu.date} • {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section - Full Width */}
      <div>
        <h2 className="text-sm font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200 flex items-center">
          <span className="bg-blue-500 w-1 h-4 mr-1.5 rounded-sm"></span>
          Recommendations
        </h2>
        <div className="space-y-2">
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-2 bg-gray-50 border-l-2 border-blue-500 rounded-sm mb-2"
            >
              <p className="text-xs italic text-gray-700 mb-1">
                "{testimonial.text}"
              </p>
              <p className="text-xs font-bold text-gray-800 mb-0">
                {testimonial.author}
              </p>
              <p className="text-xs text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVDocument;
