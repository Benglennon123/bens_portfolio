import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Technical Program Manager for AI at bp
          </h1>
          <p className="text-muted-foreground">
            Leading bp's AI strategy and governance framework
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            After the massive success of the Hackathon and the AI for Everyone
            event, I was offered the role of Technical Program Manager for AI.
            It's been an incredible opportunity that has already taught me so
            much about leading large-scale teams and building efficient,
            effective governance frameworks to ensure top-notch delivery.
          </p>
          <p>
            Now, I know what you might be thinking - governance sounds about as
            exciting as watching paint dry. But trust me, it couldn't be further
            from boring. Governance at scale is like a complex puzzle with
            countless attributes and factors that can be optimized to squeeze
            the absolute best performance out of your teams.
          </p>
          <p>
            I'm approaching this role the way I'd tackle any product development
            challenge. I'm building robust tracking systems around our work,
            which allows us to measure our progress accurately and uncover
            meaningful insights. So far, this approach is paying off. We're
            already identifying key areas where we can focus our efforts to
            deliver maximum value across bp.
          </p>
          <p>
            It's a fascinating process of continuous improvement, where every
            metric and every insight helps us refine our approach and drive more
            impactful results. Who said governance has to be dry?
          </p>
        </div>
      </div>
    </div>
  );
}
