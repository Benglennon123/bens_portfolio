import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

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
            Hello! I'm Ben, a 24 year old passionate data scientist with
            expertise in building modern web applications. I specialize in AI
            and love creating elegant solutions to complex problems. During my
            time at BP, I worked on a range of projects, from AI-driven
            reservoir engineering to helping the company build a framework to
            deliver AI solutions to the business more efficiently.
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="grid gap-4">
            <div className="rounded-lg border p-4">
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
            <div className="rounded-lg border p-4">
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
            <div className="rounded-lg border p-4">
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
          <div className="flex flex-wrap gap-2">
            {[
              "Gen-AI",
              "AI Agents",
              "Full Stack Development",
              "Project Management",
              "Data Science",
              "Python",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "React",
              "Next.js",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-secondary rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">
              First Class Honours BSc Hons Data Science
            </h3>
            <p className="text-sm text-muted-foreground">
              Data Science Degree Apprenticeship • 2020 - 2024
            </p>
            <p className="mt-2">Anglia Ruskin University (Cambridge Spark)</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Testimonials (fake rn)</h2>
          <div className="grid gap-6">
            <div className="rounded-lg border p-6 space-y-3">
              <p className="italic">
                "Ben's expertise in AI and data science transformed our approach
                to reservoir engineering. His ability to translate complex
                technical concepts into practical solutions is remarkable."
              </p>
              <div>
                <p className="font-medium">Andrew Edirisoorya</p>
                <p className="text-sm text-muted-foreground">Tech Lead, bp</p>
              </div>
            </div>
            <div className="rounded-lg border p-6 space-y-3">
              <p className="italic">
                "Working with Ben on AI initiatives was incredible. His
                technical knowledge combined with his project management skills
                made him an invaluable team member."
              </p>
              <div>
                <p className="font-medium">Uthman Ali</p>
                <p className="text-sm text-muted-foreground">
                  Global Responsible AI Officer, bp
                </p>
              </div>
            </div>
            <div className="rounded-lg border p-6 space-y-3">
              <p className="italic">
                "Ben's full-stack development skills and AI expertise helped us
                deliver a complex project ahead of schedule. His attention to
                detail and problem-solving abilities are exceptional."
              </p>
              <div>
                <p className="font-medium">Adrian O'Neill</p>
                <p className="text-sm text-muted-foreground">
                  Digital Product Manager, bp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Me Section */}
        <div className="space-y-4 items-center w-full flex-col">
          <h2 className="text-2xl font-semibold">Connect With Me</h2>
          <div className="flex gap-6 items-center mx-auto">
            <a
              href="https://www.linkedin.com/in/ben-glennon-0a78ab196/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Benglennon123"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:glennonben@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
