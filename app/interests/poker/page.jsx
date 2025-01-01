import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Poker</h1>
          <p className="text-muted-foreground">
            Data Science meets Game Theory
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Poker is a hobby I naturally got into over the last couple of years
            and fell in love quickly. As a data scientist I thought I would have
            an interesting edge in the game and it does help but its only one
            part of the puzzle.
          </p>

          <p>
            I have tried to take what I know from the data world and apply it to
            my poker, taking game theory optimal (GTO) solutions and trying to
            take bet sizes based on pot odds…. Long story short is that works
            great if the other players on your table play how they are supposed
            too! Playing in pubs or casinos where I often do the game is a lot
            more erratic and you find yourself in so many positions where GTO
            makes no sense to play.
          </p>

          <p>
            Instead the approach I am now opting for is more exploitative in
            nature and looks to understand a certain players style and identify
            them into 5 categories then change my game based on what they are
            likely to do. That combined with solid GTO knowledge has started to
            prove very successful for me in winning plenty of games and even
            qualifying for the regionals…. Which I then went out in the first
            hand at 😅 but I am definitely improving!
          </p>
          <img
            src="/poker.jpg"
            alt="Poker"
            className="w-full h-64 object-contain rounded-lg"
          />

          <p>
            I have seriously caught the poker bug and have been tracking all of
            my online hands in a database that I can analyze and find leaks in
            going forward, 90% of Poker for me is iteratively improving on
            positions you play and finding a more optimal solution that results
            in a higher expected value in the long run. Going forward I plan to
            make a poker bot to play against to find flaws in my game, I promise
            once complete I will add the bot to this site and you can see if you
            can beat my bot!
          </p>
        </div>
      </div>
    </div>
  );
}
