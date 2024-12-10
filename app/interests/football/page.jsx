import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Football</h1>
          <p className="text-muted-foreground">
            A lifelong passion for the beautiful game
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            I've played football from a young age and always been in teams. I
            chose the hard path in life and decided to support Everton. As I got
            older, unfortunately I didn't grow too much and missed out on being
            a good height for a center half, which was my favored position.That
            didn't stop me taking up five-a-side with a couple of friends and
            really enjoying my football again. Up until I broke my leg!
          </p>

          {/* Image Section */}
          <img
            src="/leg_xray.jpeg"
            alt="Football"
            className="w-full h-64 object-contain rounded-lg"
          />

          <p>
            Now I stick to just watching and supporting my team but still love
            the game just as much even if I can't play anymore. Football's still
            in my blood, even if I'm not on the pitch these days.
          </p>
        </div>
      </div>
    </div>
  );
}
