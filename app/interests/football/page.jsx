import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Football</h1>
          <p className="text-muted-foreground">
            Everton, 5 a side and a lot of injuries
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Football's always been a massive part of my life - it's just how it
            is growing up in Liverpool. I Used to play 11-a-side when I was
            younger and met some of my best mates there. We weren't exactly
            Prime Barcelona and I definitely wasn't helping matters!
          </p>

          <p>
            I'm no Booby Moore, but I can hold my own at 5-a-side - playing
            weekly since I was 16. Had a nightmare run with injuries though:
            broken foot, broke my wrist, and then the killer - managed to break
            both my leg and ankle at the same time!
          </p>

          {/* Image Section */}
          <img
            src="/leg_xray.jpeg"
            alt="Football"
            className="w-full h-64 object-contain rounded-lg"
          />
          <div className="flex flex-row gap-4 justify-between items-center">
            <p>
              But you know what? Even though I can't play anymore, I'll never
              stop following the Toffee's. Any Everton fan will tell you it's
              not exactly been smooth sailing lately, but that's just part of
              being a Blue, isn't it? Time to switch things up now though -
              going to get stuck into boxing to keep fit and loving every moment
              of that.
            </p>
            <img
              src="/everton-fc.png"
              alt="Football"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
