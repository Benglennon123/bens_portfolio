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
          <p>
            Those early months were all about figuring out what being a data
            scientist actually meant - understanding my role and the
            expectations placed on me. While it took a few months to get up to
            speed, my prior coding experience outside of work helped me adapt
            quickly. Before long, I was turning around tasks for the team like a
            pro.
          </p>
          <p>
            After almost a year in that initial team, I rotated into the
            subsurface side of the business. This was where things really
            clicked for me. I started to truly grow as a data scientist and find
            ways to deliver real value to the organization.
          </p>
          <p>
            Working with the reservoir engineering community was fascinating. I
            was building different tools - not always machine learning or AI -
            to support their daily work. Now, the RE team had a reputation for
            being pretty independent and resistant to technological assistance.
            It took some time, but once I cracked a couple of their tough nuts,
            they couldn't get enough of my help!
          </p>
          <p>
            Then came a massive opportunity - leading the Data and Analytics
            Community of Practice at bp. This was huge. Suddenly, I had access
            to this incredible network of data specialists, which gave me a much
            broader perspective on how my work fit into the bigger picture. It
            also constantly challenged me to focus on the most impactful
            projects.
          </p>
          <p>
            With so much on my plate and never enough time, I quickly learned
            the art of being resourceful and prioritizing effectively. My
            solution? A Hackathon - and not just any Hackathon. This became the
            largest bp had ever run, creating massive value for the business and
            providing incredible learning opportunities for data experts and
            beginners alike.
          </p>
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
        </div>

        {/* AI for Everyone Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">AI for Everyone Initiative</h2>
          <ul className="grid gap-2">
            {["Education", "Idea Submission", "Shark Tanks", "Idea Lab"].map(
              (phase) => (
                <li key={phase} className="rounded-lg border p-4">
                  <h3 className="font-medium">{phase}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {getPhaseDescription(phase)}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
        <p>
          The AI for Everyone initiative has been a huge success. It has
          provided a platform for bp employees to learn about and experiment
          with AI, and has helped to build a community around AI up-skilling.
        </p>
        <p>
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
