import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
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

export const metadata = {
  title: "About Me | Ben",
  description:
    "Full Stack Data Scientist & Founder with expertise in AI and modern web development",
};

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-muted-foreground">
            Full Stack Data Scientist & Founder
          </p>
        </div>

        {/* Introduction Section */}
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Hello! I'm Ben, a passionate data scientist with expertise in
            building modern web applications. I specialize in AI and love
            creating elegant solutions to complex problems. During my time at
            BP, I worked on a range of projects, from AI-driven reservoir
            engineering to helping the company build a framework to deliver AI
            solutions to the business more efficiently.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/bar-trek.png"
                    alt="Bar-Trek logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">CEO</h3>
                    <p className="text-sm text-muted-foreground">
                      Bar-Trek • July 2024 - Present
                    </p>
                  </div>
                </div>
                <a
                  href="/my-work/bar-trek"
                  className="px-4 py-2 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-black transition-colors"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-2">Founder and Chief Executive Officer</p>
            </div>
            <div className="rounded-lg border p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/bp-logo.png"
                    alt="BP logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">
                      Technical Program Manager for AI
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      BP • August 2024 - Present
                    </p>
                  </div>
                </div>
                <a
                  href="/my-work/tpm-ai"
                  className="px-4 py-2 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-black transition-colors"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-2">Leading AI projects and initiatives</p>
            </div>
            <div className="rounded-lg border p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/bp-logo.png"
                    alt="BP logo"
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <h3 className="font-medium">
                      Data Scientist - Reservoir Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      BP • March 2020 - August 2024
                    </p>
                  </div>
                </div>
                <a
                  href="/my-work/data-science"
                  className="px-4 py-2 text-sm text-primary border border-primary rounded-md hover:bg-primary hover:text-black transition-colors"
                >
                  Learn More
                </a>
              </div>
              <p className="mt-2">
                Applied data science techniques to reservoir engineering
                challenges
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                icon: <FaRobot className="text-xl text-primary" />,
                name: "Gen-AI",
              },
              {
                icon: <FaBrain className="text-xl text-primary" />,
                name: "AI Agents",
              },
              {
                icon: <FaLaptopCode className="text-xl text-primary" />,
                name: "Full Stack Development",
              },
              {
                icon: <FaProjectDiagram className="text-xl text-primary" />,
                name: "Project Management",
              },
              {
                icon: <FaChartLine className="text-xl text-primary" />,
                name: "Data Science",
              },
              {
                icon: <FaPython className="text-xl text-primary" />,
                name: "Python",
              },
              {
                icon: <FaJs className="text-xl text-primary" />,
                name: "JavaScript",
              },
              {
                icon: <SiTypescript className="text-xl text-primary" />,
                name: "TypeScript",
              },
              {
                icon: <SiTailwindcss className="text-xl text-primary" />,
                name: "Tailwind CSS",
              },
              {
                icon: <FaReact className="text-xl text-primary" />,
                name: "React",
              },
              {
                icon: <SiNextdotjs className="text-xl text-primary" />,
                name: "Next.js",
              },
              {
                icon: <FaDatabase className="text-xl text-primary" />,
                name: "PostgreSQL",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <div>{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="rounded-lg border p-4 hover:bg-accent/50 transition-colors">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="font-medium">
                  First Class Honours BSc Hons Data Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  Data Science Degree Apprenticeship • 2020 - 2024
                </p>
                <p className="mt-2">
                  Anglia Ruskin University (Cambridge Spark)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <div className="grid gap-6">
            <div className="rounded-lg border p-6 space-y-3 hover:bg-accent/50 transition-colors">
              <div className="text-2xl mb-2">💬</div>
              <p className="italic">
                "Ben's ability to quickly grasp project needs and translate them
                into action is remarkable. He's incredibly proactive,
                consistently delivering results with a focused 'start simple'
                approach. His expertise in web design and data-driven solutions
                ensures we always arrive at the best possible outcome."
              </p>
              <div>
                <p className="font-medium">Natalia Konstantinova</p>
                <p className="text-sm text-muted-foreground">
                  Global Architecture Lead in AI, bp
                </p>
              </div>
            </div>
            <div className="rounded-lg border p-6 space-y-3 hover:bg-accent/50 transition-colors">
              <div className="text-2xl mb-2">💬</div>
              <p className="italic">
                "Ben's technical excellence was fundamental in the
                transformative delivery of a unified data platform to the global
                reservoir engineering discipline. What impressed me most was his
                pragmatic and innovative approach to resolving complex business
                problems, accelerating business value through technologies such
                as AI."
              </p>
              <div>
                <p className="font-medium">Andrew Edirisoorya</p>
                <p className="text-sm text-muted-foreground">
                  Subsurface Tech Lead, bp
                </p>
              </div>
            </div>
            <div className="rounded-lg border p-6 space-y-3 hover:bg-accent/50 transition-colors">
              <div className="text-2xl mb-2">💬</div>
              <p className="italic">
                "Ben is a strategic and highly organized problem solver. His
                ability to navigate and streamline complex projects is truly
                impressive. He brings a unique blend of skills, including
                innovative AI application and sophisticated portfolio
                management, with a keen business understanding of the oil and
                gas industry. This combination showcases a strong analytical and
                problem-solving mindset, making him an invaluable asset. Ben's
                rapid learning and adaptability are particularly noteworthy. I
                confidently recommend him to any organization seeking a highly
                effective and forward-thinking professional."
              </p>
              <div>
                <p className="font-medium">Uthman Ali</p>
                <p className="text-sm text-muted-foreground">
                  Global Responsible AI Officer, bp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Me Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://www.linkedin.com/in/ben-glennon-0a78ab196/"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-primary" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Benglennon123"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 text-primary" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:glennonben@gmail.com"
              className="flex items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
