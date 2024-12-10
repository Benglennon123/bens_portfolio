import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Contact | Ben Glennon",
  description:
    "Get in touch with Ben Glennon - Full Stack Data Scientist & Founder",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-muted-foreground">
            I'm always open to discussing new opportunities and ideas
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/ben-glennon-0a78ab196/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg border hover:border-primary transition-colors space-y-4"
          >
            <FaLinkedin className="w-8 h-8 text-primary" />
            <h2 className="font-semibold">LinkedIn</h2>
            <p className="text-sm text-center text-muted-foreground">
              Connect with me professionally
            </p>
          </a>

          <a
            href="https://github.com/Benglennon123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg border hover:border-primary transition-colors space-y-4"
          >
            <FaGithub className="w-8 h-8 text-primary" />
            <h2 className="font-semibold">GitHub</h2>
            <p className="text-sm text-center text-muted-foreground">
              Check out my commits and projects (Mostly private☠️)
            </p>
          </a>

          <a
            href="mailto:glennonben@gmail.com"
            className="flex flex-col items-center p-6 rounded-lg border hover:border-primary transition-colors space-y-4"
          >
            <FaEnvelope className="w-8 h-8 text-primary" />
            <h2 className="font-semibold">Email</h2>
            <p className="text-sm text-center text-muted-foreground">
              glennonben@gmail.com
            </p>
          </a>
        </div>

        {/* Additional Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-muted-foreground">
            Whether you're interested in discussing AI solutions, web
            development projects, or just want to connect, I'm always happy to
            chat. As a Full Stack Data Scientist with expertise in AI and modern
            web development, I'm particularly interested in projects involving:
          </p>
          <div className="grid gap-2 pl-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>AI and Machine Learning Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Full Stack Web Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Interesting Business Ideas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Technical Program Management</span>
            </div>
          </div>
        </div>

        {/* Response Time Note */}
        <div className="bg-secondary/50 p-4 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            I typically respond to messages within 24-48 hours. For urgent
            matters, please reach out via email.
          </p>
        </div>
      </div>
    </div>
  );
}
