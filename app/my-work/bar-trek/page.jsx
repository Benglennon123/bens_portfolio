import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Bar-Trek</h1>
          <p className="text-muted-foreground">
            Building the ultimate pub discovery and tracking platform
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            If you&apos;ve landed on this page, you&apos;re probably wondering,
            &quot;What the f*** is Bar-Trek, and why is it in this professional
            portfolio?&quot;
          </p>

          <p>
            Bar-Trek is my brainchild - cooked up with my dad and three friends
            back in June 2024. We&apos;ve built an app that&apos;s basically the
            ultimate wingman for any pub adventure. Want to build an epic pub
            crawl? Track your pub visits? Find the best spots? Bar-Trek&apos;s
            got you covered.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Origin Story</h2>
          <p>
            The whole thing started with my dad, John. His method of tracking
            pub visits was hilariously old-school: a massive poster of Liverpool
            covered in green and red dots. Green dots? Pubs he&apos;d visited.
            Red dots? The unexplored territories waiting for him.
          </p>
          <p>
            I caught him in the act of building this and said &quot;What are you
            doing! It would take me 2 hours to build a map from the spreadsheet
            to visualize all this for you&quot; Turns out, that casual comment
            was the spark that turned into Bar-Trek.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Technical Details
          </h2>
          <p>
            Technically speaking, I built the whole site using Next.js and
            Supabase. What started as a digital version of my dad&apos;s quirky
            poster quickly became something much bigger. We realized we
            weren&apos;t just making a tracking app - we were creating a whole
            new way to experience pub culture.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Vision</h2>
          <p>
            As we kept developing, our vision grew. We&apos;re not just building
            an app; we&apos;re creating a community for pub lovers. Our goal? To
            become the go-to platform for discovering, planning, and sharing
            epic pubs across the UK.
          </p>

          <p>
            The journey from my dad&apos;s dot-covered poster to a full digital
            platform has been wild. We&apos;re all about keeping the social
            magic of pub culture alive, just with a tech twist. Whether
            you&apos;re a local looking to discover hidden gems or a tourist
            wanting the perfect pub route, Bar-Trek is your new best friend.
          </p>

          {/* Next Step Card */}
          <div className="mt-8">
            <a
              target="_blank"
              href="https://bar-trek.com"
              className="block rounded-lg border p-4 hover:bg-accent transition-colors"
            >
              <div className="flex items-start gap-3">
                <img
                  src="/bar-trek.png"
                  alt="Bar-Trek Logo"
                  className="w-14 h-14 flex-shrink-0 rounded-lg object-contain"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-base mb-1">Try Bar-Trek</h3>
                  <p className="text-sm text-muted-foreground leading-normal">
                    The ultimate pub companion
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
