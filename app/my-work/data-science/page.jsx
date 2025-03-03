import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Data Science at bp</h1>
          <p className="text-muted-foreground">
            Getting to grips with data science at bp and building a community of
            practice
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            My journey at bp began in 2020 when I joined as a data science
            degree apprentice. Right from the start, I was thrown into the deep
            end, becoming the sole data scientist in my team within the wells
            division. Looking back, this was actually a blessing in disguise. It
            forced me to really understand how to interact with my customers and
            keep their needs front and center - something I'll admit I briefly
            lost sight of later in my bp career.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Early Career Journey</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="font-medium">Wells Division</h3>
                <p className="text-sm text-muted-foreground">
                  Started as the sole data scientist, quickly adapting to
                  deliver value while learning to prioritize customer needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🌊</div>
              <div>
                <h3 className="font-medium">Subsurface Rotation</h3>
                <p className="text-sm text-muted-foreground">
                  Found my stride working with reservoir engineering, building
                  tools that transformed their daily work
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🔍</div>
              <div>
                <h3 className="font-medium">Breaking Through</h3>
                <p className="text-sm text-muted-foreground">
                  Overcame initial resistance from the RE team by solving their
                  toughest challenges, becoming an invaluable resource
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Community Leadership</h2>
          <p>
            Then came a massive opportunity - leading the Data and Analytics
            Community of Practice at bp. This was huge. Suddenly, I had access
            to this incredible network of data specialists, which gave me a much
            broader perspective on how my work fit into the bigger picture. It
            also constantly challenged me to focus on the most impactful
            projects.
          </p>

          <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors mt-4">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-medium">The Hackathon Solution</h3>
              <p className="text-sm text-muted-foreground">
                Faced with limited time and resources, I organized the largest
                hackathon in bp's history, creating massive value and learning
                opportunities
              </p>
            </div>
          </div>
        </div>

        {/* AI for Everyone Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">AI for Everyone Initiative</h2>
          <p>
            The Hackathon was such a hit that I wanted to find a way to scale
            this approach across bp. While it had been phenomenal for the
            subsurface world, I knew other parts of the organization could
            benefit from AI innovations.
          </p>
          <p>
            That's when I launched "AI for Everyone" - a multi-stage event we're
            still running today. It's broken down into several key phases:
          </p>
          <div className="grid gap-4 mt-4">
            {["Education", "Idea Submission", "Shark Tanks", "Idea Lab"].map(
              (phase) => (
                <div
                  key={phase}
                  className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                >
                  <div className="text-2xl">{getPhaseIcon(phase)}</div>
                  <div>
                    <h3 className="font-medium">{phase}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getPhaseDescription(phase)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Impact & Outcomes</h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
            <div className="text-2xl">🌱</div>
            <div>
              <h3 className="font-medium">Community Building</h3>
              <p className="text-sm text-muted-foreground">
                Created a thriving community around AI upskilling and innovation
                across bp
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
            <div className="text-2xl">🔄</div>
            <div>
              <h3 className="font-medium">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Established a framework for ongoing AI education and
                experimentation
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
            <div className="text-2xl">💼</div>
            <div>
              <h3 className="font-medium">Business Value</h3>
              <p className="text-sm text-muted-foreground">
                Delivered tangible business outcomes through practical AI
                applications
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6">
          As we continue to push the boundaries of what's possible with AI at
          bp, I'm excited to see how our community will evolve. The journey has
          been challenging yet rewarding, and I'm grateful for the opportunity
          to contribute to such transformative work.
        </p>
      </div>
      {/* Next Step Card */}
      <div className="mt-8">
        <a
          href="/my-work/tpm-ai"
          className="block rounded-lg border p-4 hover:bg-accent transition-colors"
        >
          <div className="flex items-start gap-3">
            <img
              src="/bp-logo.png"
              alt="BP Logo"
              className="w-14 h-14 flex-shrink-0 rounded-lg object-contain"
            />
            <div className="text-left">
              <h3 className="font-semibold text-base mb-1">
                Next: Technical Program Manager for AI
              </h3>
              <p className="text-sm text-muted-foreground leading-normal">
                Leading bp's AI strategy and governance framework
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

// Helper function to get phase descriptions
function getPhaseDescription(phase) {
  const descriptions = {
    Education:
      "Workshops and expert sessions showing bp employees what's possible with AI",
    "Idea Submission":
      "Employees pitch AI solutions for their specific work areas",
    "Shark Tanks": "The best ideas get presented to a panel of AI experts",
    "Idea Lab": "Quick 1-6 week experiments to build and deploy solutions",
  };
  return descriptions[phase];
}

// Helper function to get phase icons
function getPhaseIcon(phase) {
  const icons = {
    Education: "🎓",
    "Idea Submission": "💭",
    "Shark Tanks": "🦈",
    "Idea Lab": "🧪",
  };
  return icons[phase];
}
