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

          <h2 className="text-2xl font-semibold mt-8">My Football Journey</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">⚽</div>
              <div>
                <h3 className="font-medium">11-a-side Football</h3>
                <p className="text-sm text-muted-foreground">
                  Played competitively in my younger years, forming lasting
                  friendships and developing teamwork skills
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🏆</div>
              <div>
                <h3 className="font-medium">5-a-side Regular</h3>
                <p className="text-sm text-muted-foreground">
                  Weekly player since age 16, developing skills and maintaining
                  fitness through fast-paced matches
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">💙</div>
              <div>
                <h3 className="font-medium">Everton Supporter</h3>
                <p className="text-sm text-muted-foreground">
                  Lifelong fan of the Toffees through thick and thin - mostly
                  thin lately!
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">The Injury Chronicles</h2>
          <p>
            I'm no Bobby Moore, but I can hold my own at 5-a-side.
            Unfortunately, my football career has been plagued by a series of
            increasingly serious injuries:
          </p>

          <div className="grid gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🦶</div>
              <div>
                <h3 className="font-medium">Broken Foot</h3>
                <p className="text-sm text-muted-foreground">
                  First major injury that sidelined me but didn't dampen my
                  enthusiasm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">✋</div>
              <div>
                <h3 className="font-medium">Broken Wrist</h3>
                <p className="text-sm text-muted-foreground">
                  Second significant injury that tested my resilience and
                  recovery abilities
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
              <div className="text-2xl">🦴</div>
              <div>
                <h3 className="font-medium">The Final Blow</h3>
                <p className="text-sm text-muted-foreground">
                  Managed to break both my leg and ankle simultaneously, ending
                  my playing career
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <img
            src="/leg_xray.jpeg"
            alt="X-ray of broken leg and ankle"
            className="w-full h-64 object-contain rounded-lg mt-4"
          />

          <h2 className="text-2xl font-semibold mt-8">Life After Playing</h2>
          <p>
            Even though I can't play anymore, I'll never stop following the
            Toffees. Any Everton fan will tell you it's not exactly been smooth
            sailing lately, but that's just part of being a Blue, isn't it?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <img
              src="/everton-fc.png"
              alt="Everton Football Club"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                <div className="text-2xl">🥊</div>
                <div>
                  <h3 className="font-medium">New Sporting Horizons</h3>
                  <p className="text-sm text-muted-foreground">
                    Transitioning to boxing to maintain fitness and discover new
                    athletic challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors mt-4">
                <div className="text-2xl">📺</div>
                <div>
                  <h3 className="font-medium">Dedicated Supporter</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuing to follow Everton through all the ups and downs
                    of Premier League football
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">
            Football has taught me resilience, teamwork, and how to cope with
            disappointment (especially as an Everton fan!). While my playing
            days may be behind me, the lessons and friendships I've gained will
            last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}
